# Project analysis and step-by-step fix plan

**Date:** 2026-02-18  
**Scope:** TypeScript errors and type/schema mismatches (build currently passes because `next.config.ts` has `typescript.ignoreBuildErrors: true`).

**Progress:** Stages 1–6 done. TS errors: 0. All fixes applied (backend, Media, MissionBanner, PageRender, StoryTimeline, cvTemplates, ContactForm).

---

## Summary

| Category | Count | Files |
|----------|--------|--------|
| Backend (user controller) | 1 | user.controller.ts |
| Components (Media, MissionBanner, PageRender, StoryTimeline) | 14+ | 4 files |
| CV templates | 1 | cvTemplates.tsx |
| Contact form | 1 | ContactForm.tsx |
| Page schemas (cookie, extra, pricing, services) | 44 | 14 schema files |
| Types (button-ui) | 2 | button-ui.ts |
| **Total** | **~63** | **~22 files** |

---

## 1. Backend

### 1.1 `src/backend/controllers/user.controller.ts`

- **Error:** `'name' does not exist in type 'UserType'`.
- **Cause:** `formatUser()` returns `name: user.name` but `UserType` has `firstName` and `lastName`, not `name`.
- **Fix:** In `formatUser`, return `firstName: user.firstName`, `lastName: user.lastName` (and ensure DB/model uses those fields). If the schema still has `name`, either add a computed `name` to `UserType` for API compatibility or change the API to return first/last only.

**Steps:**
1. Open `src/backend/controllers/user.controller.ts`.
2. In `formatUser`, replace `name: user.name` with `firstName: user.firstName, lastName: user.lastName`.
3. If any API consumer expects `name`, add `name: [user.firstName, user.lastName].filter(Boolean).join(' ')` to the returned object only if you extend `UserType` with an optional `name` for backward compatibility; otherwise leave as firstName/lastName.

---

## 2. Components

### 2.1 `src/components/constructor/image/Media.tsx`

- **Errors:**  
  - TS2352: Cast of `mediaMap` to `Record<string, string>` is unsafe (media contains `StaticImageData`).  
  - TS2322: `resolveMedia(src)` can be `undefined` but `Image` expects `string | StaticImport`.
- **Fix:**  
  - Type `resolveMedia` so it returns `string | StaticImageData` and handle both in the component (e.g. pass through to `Image` when `StaticImageData`, or resolve to URL when string).  
  - Ensure `Image` never receives `undefined`: guard with `src != null` or provide a fallback/placeholder.

**Steps:**
1. Change `resolveMedia` to return `string | StaticImageData | undefined` and handle `undefined` (e.g. early return or placeholder).
2. Use a type assertion via `unknown` if you must cast media map, or type the map as `Record<string, string | StaticImageData>` and narrow in `resolveMedia`.
3. Ensure the `Image` component is only rendered when `src` is defined.

### 2.2 `src/components/constructor/missio-banner/MissionBanner.tsx`

- **Error:** `Media` is passed `width` and `height`, which are not in `MediaProps`.
- **Cause:** `Media` uses `fill` and does not declare `width`/`height`.
- **Fix:** Either add optional `width` and `height` to `MediaProps` and use them (e.g. for layout/sizing) or remove them from `MissionBanner` and control size via wrapper CSS/`aspectRatio`.

**Steps:**
1. Remove `width` and `height` from `<Media>` in MissionBanner and style the wrapper (e.g. aspect ratio / max-height), **or**
2. Add `width?: string; height?: string` to `MediaProps` and use them in `Media.tsx` (e.g. for dimensions or `sizes`).

### 2.3 `src/components/constructor/page-render/PageRender.tsx`

Multiple prop/type mismatches when mapping schema blocks to component props:

- **ValuesIcons:** `values` expect `ValueItem[]` (`icon: string`, etc.) but schema has `icon: ReactNode`, `text`/`description`. Map `text` → `description` and ensure `icon` is string or cast/typed as allowed.
- **TeamGrid:** `members[].image` must be `keyof typeof media` (literal), but schema gives `string`. Cast or validate (e.g. allow only known keys) when passing to `TeamGrid`.
- **TestimonialsSlider:** `testimonials[].image` same as above; optional `image` vs required in type. Align type (e.g. `image?: keyof typeof media`) or provide default.
- **StoryTimeline:** `steps[].year` is optional in schema but required in `TimelineStep`. Use `year: step.year ?? ''` or make `TimelineStep.year` optional.
- **PricingCard:** Schema uses variant `"highlight"` but component only accepts `"starter"|"pro"|"premium"|"custom"`. Map `"highlight"` → `"pro"` (or add `"highlight"` to `PricingCardProps`).
- **FAQ:** Block has `image` but `FAQProps` has no `image`. Remove `image` from the block when calling FAQ or add optional `image` to `FAQProps` and use it in the component.
- **Media (in PageRender):** Same `width`/`height` issue as MissionBanner; fix as in 2.2.
- **Grid/cards:** `buttonLink`/`buttonText` optional in schema but required in type; use defaults (e.g. `buttonLink: ''`, `buttonText: '') or make optional in the receiving type.

**Steps:**
1. In PageRender, for each block type, map schema shapes to component prop types (defaults, casts, or narrow types).
2. Add a central mapping for variant (e.g. `highlight` → `pro`) and for optional fields (year, buttonLink, buttonText, image).
3. For `TeamGrid`/`TestimonialsSlider`, type `image` as `keyof typeof media` where possible and cast or validate string keys from schema.

### 2.4 `src/components/constructor/story-timeline/StoryTimeline.tsx`

- **Error:** Cannot find namespace `JSX`.
- **Cause:** With the current JSX transform, `JSX` may not be in scope.
- **Fix:** Use `React.JSX.Element` or `React.ReactElement` instead of `JSX.Element`.

**Steps:**
1. Replace `JSX.Element` with `React.ReactElement` (or `React.JSX.Element` if available) in the `icons` record type.

### 2.5 `src/components/extra/cv/cvTemplates/cvTemplates.tsx`

- **Error:** `Property 'languages' does not exist on type 'CVOrderType'`.
- **Cause:** Template uses `o.languages` but `CVOrderType` has no `languages` field.
- **Fix:** Add optional `languages?: string` to `CVOrderType` in `src/backend/types/cv.types.ts`, or use a fallback in the template (e.g. `(o as any).languages ?? "English (Fluent)"`). Prefer adding the field if the API/model can provide it.

**Steps:**
1. In `src/backend/types/cv.types.ts`, add `languages?: string` to `CVOrderType`.
2. If the CV order model/API does not set it, keep the template fallback `?? "English (Fluent)"`.

### 2.6 `src/components/widgets/contact-form/ContactForm.tsx`

- **Error:** Formik callback type incompatible: `ContactFormValues` has `message?: string` but Formik is inferred with `message: string`.
- **Cause:** `initialValues` from schema has `message: string`; component defines `ContactFormValues` with `message?: string`.
- **Fix:** Make types consistent: either make `message` required in `ContactFormValues` and keep `initialValues.message` as `""`, or type Formik explicitly as `Formik<ContactFormValues>` and ensure `initialValues` satisfies it (e.g. `message: ""`).

**Steps:**
1. In ContactForm, set `initialValues` so `message` is always a string (e.g. `message: ""`).
2. In the same file, change `ContactFormValues` to `message: string` (required), **or** keep `message?: string` and use a type assertion for the Formik component so the submit handler stays `ContactFormValues`.
3. Ensure `validationSchema` and submit payload accept optional message if you keep it optional.

---

## 3. Page schemas (types vs data)

### 3.1 Cookie policy – `description2`

- **Files:** `src/pageSchemas/cookie-policy/cookiePolicy.en.ts`, `cookiePolicy.no.ts`.
- **Error:** `'description2' does not exist in type 'TextBlock'`.
- **Cause:** Blocks use `description2` for a second paragraph; `TextBlock` only has `description`.
- **Fix:** Either extend `TextBlock` in `page-render/types.ts` with `description2?: string` and render it in the text block renderer, or merge content into `description` (e.g. two paragraphs in one string or use `bullets`).

**Steps:**
1. In `src/components/constructor/page-render/types.ts`, add `description2?: string` to `TextBlock`.
2. In PageRender where text blocks are rendered, output `description2` when present (e.g. second paragraph).
3. No schema file changes needed if you extend the type.

### 3.2 Extra case schemas – `type` on cards

- **Files:** `analysis`, `audit`, `copywriting`, `local`, `offPage`, `onPage` (each `.ts` and `.no.ts`), and `pricing/pricingPage.en.ts`.
- **Error:** `'type' does not exist in type 'LegacyCard'`.
- **Cause:** Card objects in schema include a `type` field (e.g. for styling); `LegacyCard` does not.
- **Fix:** Add optional `type?: string` to `LegacyCard` in `src/components/constructor/page-render/types.ts` so schema data is valid. The renderer can ignore it or use it for styling.

**Steps:**
1. In `types.ts`, add `type?: string` to `LegacyCard`.
2. Optionally use `type` in the grid/card renderer for variant styling.

### 3.3 Services page – HighlightStrip `messages`

- **Files:** `src/pageSchemas/services/servicesPage.en.ts`, `servicesPage.no.ts`.
- **Error:** `'messages' does not exist in type 'HighlightStripBlock'`.
- **Cause:** Block uses `messages: string[]` but type defines `items: Array<{...}>`.
- **Fix:** Either change schema to `items: messages.map(m => ({ text: m }))` in both EN/NO, or extend `HighlightStripBlock` with `messages?: string[]` and in the renderer map `messages` to `items` when present.

**Steps:**
1. In page-render types, add `messages?: string[]` to `HighlightStripBlock`.
2. In PageRender where HighlightStrip is rendered, if `block.messages` is set, pass `items: block.messages.map(text => ({ text }))` to the component; otherwise keep using `block.items`.

---

## 4. Types (shared)

### 4.1 `src/types/button-ui.ts`

- **Errors:**  
  - `ButtonColor` is not exported from `@/resources/styles-config`.  
  - `SxProps` is not exported from `@mui/joy/styles`.
- **Cause:** `ButtonColor` lives in `@/resources/types`; `styles-config` imports it from there. Project uses `@mui/material` for `SxProps` in styles-config.
- **Fix:** Import `ButtonColor` from `@/resources/types`. Import `SxProps` from `@mui/material/styles` (or `@mui/material` if that’s where it’s re-exported).

**Steps:**
1. Change line 1 to: `import { ButtonColor } from "@/resources/types";`
2. Change line 2 to: `import { SxProps } from "@mui/material/styles";` (or `@mui/material` after verifying export).

---

## 5. Recommended order of fixes

1. **Types (button-ui)** – quick, unblocks other code that might depend on it.
2. **Schema type extensions** – TextBlock (`description2`), LegacyCard (`type`), HighlightStripBlock (`messages`). Enables schema files to type-check.
3. **Schema data** – services EN/NO: use `items` or keep `messages` and use the new type (step 3.3).
4. **Backend** – user.controller `formatUser` (UserType).
5. **CV** – add `languages` to `CVOrderType` and/or template fallback.
6. **Contact form** – align ContactFormValues and Formik types.
7. **Media** – fix resolveMedia and undefined `src`; add optional width/height if desired.
8. **MissionBanner** – remove or add width/height (match Media).
9. **StoryTimeline** – replace `JSX.Element` with `React.ReactElement`.
10. **PageRender** – fix all prop mappings (values, team, testimonials, timeline, pricing variant, FAQ image, grid cards, Media).

After applying the plan, run `npx tsc --noEmit` and fix any remaining errors. Consider setting `typescript.ignoreBuildErrors: false` in `next.config.ts` once the codebase is clean so the build fails on new type errors.
