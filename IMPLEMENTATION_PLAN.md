# Implementation Plan: Norwegian Language & Currency Support

## Overview
This plan outlines the step-by-step implementation of:
1. **Remove Swedish language support** - Keep only English and Norwegian
2. Norwegian language support (no)
3. Language selector in header (English/Norwegian only)
4. **Complete Norwegian translations for ALL pages** - No exceptions
5. NOK currency support
6. Currency conversion for NOK
7. Domain-based routing (cheffmate.co.uk → cheffmate.org for Norwegian visitors)
8. Norwegian-only mode for cheffmate.org

## Important Notes

⚠️ **CRITICAL REQUIREMENTS:**
- **Swedish (`sv`) language is being REMOVED** - Only English (`en`) and Norwegian (`no`) will remain
- **ALL website pages MUST be translated to Norwegian** - No exceptions
- Every page component must have both English and Norwegian schemas
- All Swedish references must be removed from the codebase
- Language selector will only show English and Norwegian options

---

## Phase 1: Add Norwegian Language Support

### Step 1.1: Update i18n Context (Remove Swedish, Add Norwegian)
**File:** `src/context/i18nContext.tsx`

**Changes:**
- **Remove Swedish (`"sv"`) from `LangCode` type**
- Update `LangCode` type to only include `"en"` and `"no"` (Norwegian)
- Update default language detection to recognize Norwegian (`no`, `nb`, `nn`)
- Change default language from Swedish to English
- Update localStorage persistence to handle only "en" and "no"
- **Remove all Swedish-related code**

**Code changes:**
```typescript
export type LangCode = "en" | "no"; // Removed "sv"

// In useEffect for language detection:
useEffect(() => {
    try {
        const saved = localStorage.getItem("lang") as LangCode | null;
        if (saved === "no" || saved === "en") {
            setLangState(saved);
            return;
        }
        const browser = (navigator.language || "").toLowerCase();
        if (browser.startsWith("no") || browser.startsWith("nb") || browser.startsWith("nn")) {
            setLangState("no");
        } else {
            setLangState("en"); // Default to English (removed Swedish fallback)
        }
    } catch {
        setLangState("en"); // Default to English on error
    }
}, []);
```

---

### Step 1.2: Update Language Utility Functions (Remove Swedish)
**File:** `src/utils/schemaByLang.ts`

**Changes:**
- **Remove Swedish (`"sv"`) from LangCode type**
- Ensure `LangCode` type only includes `"en"` and `"no"`
- Update fallback logic: default fallback should be `"en"` (not `"sv"`)

**Code changes:**
```typescript
import { LangCode } from "@/context/i18nContext"; // Will be "en" | "no"

export function pickSchemaByLang(
    lang: LangCode,
    map: Partial<Record<LangCode, PageSchema>>,
    fallback: LangCode = "en" // Changed from "sv" to "en"
): PageSchema {
    return map[lang] ?? map[fallback]!;
}
```

**Verification:**
- Check that `pickSchemaByLang` function handles `"no"` correctly
- Ensure fallback is English, not Swedish
- Remove any Swedish-related code or comments

---

## Phase 2: Create Language Selector Component

### Step 2.1: Create LanguageSwitch Component
**File:** `src/components/widgets/language-switch/LanguageSwitch.tsx` (NEW)

**Implementation:**
- Similar structure to `CurrencySwitch.tsx`
- **Dropdown with only 2 language options: English, Norwegian** (removed Swedish)
- Display current language with flag icons or text (EN / NO or English / Norsk)
- Use `useI18n` hook to get/set language
- Store selection in localStorage (already handled by i18nContext)

**Code:**
```typescript
const LANGUAGES = [
    { code: "en" as const, label: "English" },
    { code: "no" as const, label: "Norsk" }
] as const;
```

**Props:** None (uses context)

**Styling:** Create `LanguageSwitch.module.scss` similar to `CurrencySwitch.module.scss`

---

### Step 2.2: Add Language Selector to Header
**File:** `src/components/layout/header/Header.tsx`

**Changes:**
- Import `LanguageSwitch` component
- Add `<LanguageSwitch />` next to `<CurrencySwitch />` in `actionsNav` div
- Ensure proper spacing and alignment

**Code:**
```tsx
<div className={styles.actionsNav}>
    <LanguageSwitch />
    <CurrencySwitch />
    <AuthButtons />
</div>
```

---

### Step 2.3: Add Language Selector to Drawer Menu
**File:** `src/components/ui/drawer/Drawer.tsx`

**Changes:**
- Add language selector to mobile drawer menu
- Place it near currency switcher if present

---

## Phase 3: Add NOK Currency Support

### Step 3.1: Update Currency Context
**File:** `src/context/CurrencyContext.tsx`

**Changes:**
- Add `"NOK"` to `Currency` type: `export type Currency = "GBP" | "EUR" | "USD" | "NOK";`
- Add NOK to `CURRENCY_SIGNS`: `NOK: "kr"`
- Add NOK to `RATES`: `NOK: 12.85` (1 GBP ≈ 12.85 NOK)
- Update default currency logic if needed

**Exchange Rate Reference:**
- **1 GBP = 12.85 NOK** (confirmed rate)
- Update `RATES` object: `NOK: 12.85`

---

### Step 3.2: Update Currency Switch Component
**File:** `src/components/widgets/currency-switch/CurrencySwitch.tsx`

**Changes:**
- Update `CURRENCIES` array to include `"NOK"`
- Ensure dropdown displays all 4 currencies

**Code:**
```typescript
const CURRENCIES = ["GBP", "EUR", "USD", "NOK"] as const;
```

---

### Step 3.3: Update Pricing Components
**Files:**
- `src/components/constructor/pricing-card/PricingCard.tsx`
- Any other components displaying prices

**Changes:**
- Verify `useCurrency` hook usage
- Ensure NOK conversion works correctly
- Test price display with NOK selected

**Verification:**
- Check that prices convert correctly when NOK is selected
- Verify token calculations remain accurate

---

## Phase 4: Translate All Content to Norwegian

### Step 4.1: Create Norwegian Page Schemas

**Files to create/update:**

1. **Home Page**
   - `src/pageSchemas/home/homePage.no.ts` (NEW)
   - Translate all content from `homePage.en.ts`
   - **Remove or ignore `homePage.sv.ts`** (Swedish no longer needed)

2. **About Page**
   - `src/pageSchemas/about/aboutPage.no.ts` (NEW)

3. **Services Page**
   - `src/pageSchemas/services/servicesPage.no.ts` (NEW)

4. **Pricing Page**
   - `src/pageSchemas/pricing/pricingPage.no.ts` (NEW)

5. **FAQ Page**
   - `src/pageSchemas/faq/faqPage.no.ts` (NEW)

6. **Contact Page**
   - `src/pageSchemas/contact-us/contactUsSchema.no.ts` (NEW)

7. **Terms & Conditions**
   - `src/pageSchemas/terms-and-conditions/termsAndConditions.no.ts` (NEW)

8. **Privacy Policy**
   - `src/pageSchemas/privacy-policy/privacyPage.no.ts` (NEW)

9. **Cookie Policy**
   - `src/pageSchemas/cookie-policy/cookiePolicy.no.ts` (NEW)

10. **Refund Policy**
    - `src/pageSchemas/refund-policy/refundPage.no.ts` (NEW)

11. **Get Started Page**
    - `src/pageSchemas/get-started/getStarted.page.no.ts` (NEW)

12. **Extra Pages** (if needed)
    - `src/pageSchemas/extra/onPage.ts` - check if needs translation
    - `src/pageSchemas/extra/offPage.ts`
    - `src/pageSchemas/extra/copywriting.ts`
    - `src/pageSchemas/extra/audit.ts`
    - `src/pageSchemas/extra/analysis.ts`
    - `src/pageSchemas/extra/local.ts`

**Translation Guidelines:**
- Use Norwegian Bokmål (nb) as the standard
- Maintain same structure as English version
- **Translate ALL website pages - no exceptions**
- Translate all user-facing text
- Keep technical terms consistent
- Preserve HTML/markdown formatting
- **Use AI translation but take time to ensure accuracy and correctness**
- **Review translations carefully - do not rush, think about context and meaning**
- **Ensure translations sound natural in Norwegian, not literal word-for-word**
- **Every page must have a Norwegian version - no skipping pages**

---

### Step 4.2: Remove Swedish References & Update Page Components

**CRITICAL: Remove all Swedish references from existing pages**

**Files to update (remove `sv:` from schemaMap):**

1. **Home Page**
   - `src/app/page.tsx`
   - Currently uses hardcoded components (no schema) - verify if needs update

2. **About Page**
   - `src/app/about-us/page.tsx`
   - Currently uses hardcoded components - verify if needs schema-based approach

3. **Services Page**
   - `src/app/services/page.tsx`
   - **Remove:** `sv: enServices`
   - **Add:** `no: noServices`
   - Change from: `schemaMap={{ sv: enServices, en: enServices }}`
   - To: `schemaMap={{ en: enServices, no: noServices }}`

4. **Pricing Page**
   - `src/app/pricing/page.tsx`
   - Add Norwegian schema, remove Swedish

5. **FAQ Page**
   - `src/app/faq/page.tsx`
   - **Remove:** `sv: enFaq`
   - **Add:** `no: noFaq`
   - Change from: `schemaMap={{ sv: enFaq, en: enFaq }}`
   - To: `schemaMap={{ en: enFaq, no: noFaq }}`

6. **Contact Page**
   - `src/app/contact-us/page.tsx`
   - Add Norwegian schema, remove Swedish

7. **Terms & Conditions**
   - `src/app/terms-and-conditions/page.tsx`
   - **Remove:** `sv: enTerms`
   - **Add:** `no: noTerms`
   - Change from: `schemaMap={{ sv: enTerms, en: enTerms }}`
   - To: `schemaMap={{ en: enTerms, no: noTerms }}`

8. **Privacy Policy**
   - `src/app/privacy-policy/page.tsx`
   - **Remove:** `sv: enPrivacy`
   - **Add:** `no: noPrivacy`
   - Change from: `schemaMap={{ sv: enPrivacy, en: enPrivacy }}`
   - To: `schemaMap={{ en: enPrivacy, no: noPrivacy }}`

9. **Cookie Policy**
   - `src/app/cookie-policy/page.tsx`
   - **Remove:** `sv: enCookie`
   - **Add:** `no: noCookie`
   - Change from: `schemaMap={{sv: enCookie, en: enCookie}}`
   - To: `schemaMap={{ en: enCookie, no: noCookie }}`

10. **Refund Policy**
    - `src/app/refund-policy/page.tsx`
    - **Remove:** `sv: enRefund`
    - **Add:** `no: noRefund`
    - Change from: `schemaMap={{ sv: enRefund, en: enRefund }}`
    - To: `schemaMap={{ en: enRefund, no: noRefund }}`

11. **Get Started Page**
    - `src/app/get-started/page.tsx`
    - Add Norwegian schema, remove Swedish

12. **Resources Pages**
    - `src/app/resources/page.tsx`
    - `src/app/resources/market-analysis/page.tsx`
    - `src/app/resources/financial-forecast/page.tsx`
    - Remove Swedish, add Norwegian

13. **Cases Pages**
    - `src/app/cases/on-page/page.tsx`
    - `src/app/cases/off-page/page.tsx`
    - `src/app/cases/local/page.tsx`
    - `src/app/cases/audit/page.tsx`
    - `src/app/cases/copywriting/page.tsx`
    - `src/app/cases/analysis/page.tsx`
    - Remove Swedish, add Norwegian

14. **Success Page**
    - `src/app/success/page.tsx`
    - Remove Swedish, add Norwegian

**Pattern to follow:**
```typescript
import enSchema from "@/pageSchemas/[page]/[page].en";
import noSchema from "@/pageSchemas/[page]/[page].no";

export default function Page() {
    return <PageCreator schemaMap={{ en: enSchema, no: noSchema }} fallback="en" />;
}
```

**Important:** 
- **Remove ALL Swedish (`sv:`) references from schemaMap**
- Only use English (`en:`) and Norwegian (`no:`) schemas
- Set fallback to `"en"` (English) in PageCreator
- **Every page must have both English and Norwegian versions**

---

### Step 4.3: Translate Component Text (Remove Swedish)

**Files to check/update:**

1. **Header Navigation**
   - `src/resources/content.ts`
   - Translate navigation links to Norwegian
   - **Remove Swedish translations**

2. **Footer Content**
   - `src/resources/content.ts`
   - Translate footer links and text to Norwegian
   - **Remove Swedish translations**

3. **Form Labels & Buttons**
   - `src/components/widgets/sign-up/SignUp.tsx`
   - `src/components/widgets/sign-in/SignIn.tsx`
   - `src/components/widgets/contact-form/ContactForm.tsx`
   - Translate form labels, placeholders, error messages to Norwegian
   - **Remove Swedish translations**

4. **Dashboard Components**
   - `src/components/features/dashboard/Dashboard.tsx`
   - `src/components/widgets/all-orders/AllOrders.tsx`
   - `src/components/widgets/all-transactions/AllTransactions.tsx`
   - Translate UI text to Norwegian
   - **Remove Swedish translations**

5. **Manual Generator**
   - `src/components/widgets/manual-generator/ManualGenerator.tsx`
   - Translate form labels, options, buttons to Norwegian
   - **Remove Swedish translations**

6. **Pricing Cards**
   - `src/components/constructor/pricing-card/PricingCard.tsx`
   - Translate button text, descriptions to Norwegian
   - **Remove Swedish translations**

7. **Checkout**
   - `src/components/widgets/checkout/Checkout.tsx`
   - Translate checkout form and messages to Norwegian
   - **Remove Swedish translations**

**Approach:**
- Create translation keys in a central file
- Use i18n context to conditionally render text
- **Remove all Swedish translation keys**

**Recommended:** Create `src/resources/translations.ts` with translation objects:
```typescript
export const translations = {
    en: { 
        // English translations
    },
    no: { 
        // Norwegian translations only
        // NO Swedish translations
    }
};
```

---

### Step 4.4: Translate Metadata (SEO)

**Files:** All page components with `generateMetadata`

**Changes:**
- Update metadata titles and descriptions based on current language
- Use `useI18n` hook in client components or pass lang from server

**Example:**
```typescript
export async function generateMetadata(): Promise<Metadata> {
    // Detect language from headers or default
    return {
        title: getTitleByLang("no"), // or dynamic
        description: getDescriptionByLang("no"),
    };
}
```

---

## Phase 5: Domain-Based Routing & Norwegian-Only Mode

### Step 5.1: Create Domain Detection Utility & IP Geolocation Service
**File:** `src/utils/domainDetection.ts` (NEW)

**Implementation:**
```typescript
export function getDomain(): string {
    if (typeof window === "undefined") {
        return process.env.NEXT_PUBLIC_DOMAIN || "cheffmate.co.uk";
    }
    return window.location.hostname;
}

export function isNorwegianDomain(): boolean {
    return getDomain() === "cheffmate.org" || getDomain().includes("cheffmate.org");
}

export function shouldRedirectToNorwegianDomain(): boolean {
    // Check if user is from Norway (IP geolocation or browser language)
    // For now, check browser language
    if (typeof window === "undefined") return false;
    const lang = navigator.language.toLowerCase();
    return (lang.startsWith("no") || lang.startsWith("nb") || lang.startsWith("nn")) 
        && getDomain() === "cheffmate.co.uk";
}
```

**File:** `src/utils/ipGeolocation.ts` (NEW)

**Implementation:**
- Create utility to detect Norwegian visitors via IP geolocation
- Use Vercel's `x-vercel-ip-country` header (automatically available on Vercel)
- Alternative: Use a free IP geolocation API like `ipapi.co` or `ip-api.com`
- Cache results to avoid rate limits

**Code:**
```typescript
/**
 * Detect if visitor is from Norway using IP geolocation
 * On Vercel, we can use the x-vercel-ip-country header
 */
export async function isNorwegianVisitor(request: Request): Promise<boolean> {
    // Method 1: Vercel header (preferred - no API calls needed)
    const country = request.headers.get("x-vercel-ip-country");
    if (country === "NO") {
        return true;
    }
    
    // Method 2: Fallback to IP geolocation API if header not available
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
        || request.headers.get("x-real-ip") 
        || "unknown";
    
    if (ip === "unknown") return false;
    
    try {
        // Using ipapi.co (free tier: 1000 requests/day)
        const response = await fetch(`https://ipapi.co/${ip}/country/`, {
            headers: { "User-Agent": "CheffMate" }
        });
        const countryCode = await response.text();
        return countryCode.trim() === "NO";
    } catch (error) {
        console.error("IP geolocation error:", error);
        return false;
    }
}
```

---

### Step 5.2: Create Redirect Middleware with IP Geolocation
**File:** `middleware.ts` (NEW - Next.js middleware file in project root, NOT in src/)

**Implementation:**
- Detect if user is visiting cheffmate.co.uk from Norway using **IP geolocation**
- Redirect to cheffmate.org
- Set language to Norwegian and currency to NOK
- Use Vercel's built-in geolocation headers

**Code:**
```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const hostname = request.headers.get("host") || "";
    const pathname = request.nextUrl.pathname;
    
    // If on cheffmate.co.uk, check if visitor is from Norway
    if (hostname === "cheffmate.co.uk" || hostname.includes("cheffmate.co.uk")) {
        // Method 1: Check Vercel's IP country header (preferred - instant, no API calls)
        const country = request.headers.get("x-vercel-ip-country");
        const isNorwegian = country === "NO";
        
        // Method 2: Fallback to Accept-Language header if country header not available
        const acceptLanguage = request.headers.get("accept-language") || "";
        const isNorwegianLanguage = /^(no|nb|nn)/i.test(acceptLanguage);
        
        if (isNorwegian || isNorwegianLanguage) {
            const url = new URL(pathname, "https://cheffmate.org");
            url.search = request.nextUrl.search;
            return NextResponse.redirect(url);
        }
    }
    
    // If on cheffmate.org, force Norwegian language and NOK currency
    if (hostname === "cheffmate.org" || hostname.includes("cheffmate.org")) {
        const response = NextResponse.next();
        // Set cookies for language and currency
        response.cookies.set("lang", "no", { 
            path: "/", 
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        });
        response.cookies.set("currency", "NOK", { 
            path: "/", 
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        });
        return response;
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
    ],
};
```

**Note:** Vercel automatically provides `x-vercel-ip-country` header, so no external API is needed. This is the most efficient method.

---

### Step 5.3: Update i18n Context for Domain Enforcement
**File:** `src/context/i18nContext.tsx`

**Changes:**
- Check if domain is cheffmate.org
- If yes, force language to "no" and prevent language switching
- Update initialization logic

**Code:**
```typescript
const isNorwegianDomain = typeof window !== "undefined" 
    && (window.location.hostname === "cheffmate.org" || window.location.hostname.includes("cheffmate.org"));

useEffect(() => {
    if (isNorwegianDomain) {
        setLangState("no");
        return;
    }
    // ... existing logic
}, []);
```

---

### Step 5.4: Update Currency Context for Domain Enforcement
**File:** `src/context/CurrencyContext.tsx`

**Changes:**
- Check if domain is cheffmate.org
- If yes, force currency to "NOK" and prevent currency switching
- Update initialization logic

**Code:**
```typescript
const isNorwegianDomain = typeof window !== "undefined" 
    && (window.location.hostname === "cheffmate.org" || window.location.hostname.includes("cheffmate.org"));

const [currency, setCurrency] = useState<Currency>(() => {
    if (isNorwegianDomain) return "NOK";
    // ... existing logic
});
```

---

### Step 5.5: Hide Language Selector on cheffmate.org
**File:** `src/components/widgets/language-switch/LanguageSwitch.tsx`

**Changes:**
- Check if domain is cheffmate.org
- If yes, don't render the selector (or render it disabled with "Norwegian" only)

**Code:**
```typescript
const isNorwegianDomain = typeof window !== "undefined" 
    && (window.location.hostname === "cheffmate.org" || window.location.hostname.includes("cheffmate.org"));

if (isNorwegianDomain) {
    return <span className={styles.norwegianOnly}>Norsk</span>;
}
```

---

### Step 5.6: Hide Currency Selector on cheffmate.org
**File:** `src/components/widgets/currency-switch/CurrencySwitch.tsx`

**Changes:**
- Check if domain is cheffmate.org
- If yes, don't render the selector (or render it disabled with "NOK" only)

**Code:**
```typescript
const isNorwegianDomain = typeof window !== "undefined" 
    && (window.location.hostname === "cheffmate.org" || window.location.hostname.includes("cheffmate.org"));

if (isNorwegianDomain) {
    return <span className={styles.norwegianOnly}>NOK</span>;
}
```

---

## Phase 6: Update Environment Configuration

### Step 6.1: Update Environment Variables
**File:** `.env` and `.env.example`

**Add:**
```env
NEXT_PUBLIC_DOMAIN=cheffmate.co.uk
NEXT_PUBLIC_NORWEGIAN_DOMAIN=cheffmate.org
```

---

### Step 6.2: Update Next.js Config for Multi-Domain (Vercel)
**File:** `next.config.ts`

**Changes:**
- Vercel automatically handles multiple domains
- Ensure CORS and headers work for both domains
- No special configuration needed - Vercel handles domain routing
- Both domains should be added in Vercel project settings

**Vercel Setup:**
- Add both domains in Vercel project settings: Domains → Add Domain
- cheffmate.co.uk (primary)
- cheffmate.org (secondary)
- Both should point to the same deployment

---

## Phase 7: Testing Checklist

### Step 7.1: Language Testing
- [ ] Language selector appears in header (shows only EN/NO, no Swedish)
- [ ] Language selector works in drawer menu
- [ ] Switching language updates all content
- [ ] Language persists in localStorage
- [ ] Browser language detection works (Norwegian → "no", others → "en")
- [ ] All pages display Norwegian content correctly
- [ ] **No Swedish language options appear anywhere**
- [ ] **All Swedish schemas removed from codebase**

### Step 7.2: Currency Testing
- [ ] NOK appears in currency selector
- [ ] Prices convert correctly to NOK
- [ ] Token calculations remain accurate
- [ ] Currency persists in localStorage
- [ ] All pricing components show NOK correctly

### Step 7.3: Domain Routing Testing
- [ ] Norwegian visitor (IP from Norway) on cheffmate.co.uk redirects to cheffmate.org
- [ ] IP geolocation detection works correctly (test with VPN or Vercel preview)
- [ ] cheffmate.org forces Norwegian language
- [ ] cheffmate.org forces NOK currency
- [ ] Language selector hidden/disabled on cheffmate.org
- [ ] Currency selector hidden/disabled on cheffmate.org
- [ ] Non-Norwegian visitors on cheffmate.co.uk work normally
- [ ] Vercel's x-vercel-ip-country header is being used correctly

### Step 7.4: Translation Testing
- [ ] **ALL page schemas have Norwegian versions** (no exceptions)
- [ ] **No Swedish schemas remain in codebase**
- [ ] All component text is translated to Norwegian
- [ ] Form labels and buttons are translated to Norwegian
- [ ] Error messages are translated to Norwegian
- [ ] Metadata (SEO) is translated to Norwegian
- [ ] **Every single page has both English and Norwegian versions**

### Step 7.5: Integration Testing
- [ ] Checkout flow works with NOK
- [ ] Order creation works with Norwegian language
- [ ] PDF generation works with Norwegian content
- [ ] Email notifications work (if applicable)

---

## Phase 8: Documentation Updates

### Step 8.1: Update README
**File:** `README.md`

**Add:**
- Documentation about Norwegian language support
- Domain routing explanation
- Currency conversion information

---

## Implementation Order

1. **Phase 1** - Remove Swedish, Add Norwegian language support (foundation)
   - **CRITICAL:** Remove all Swedish references first
   - Then add Norwegian support
2. **Phase 2** - Create language selector component (English/Norwegian only)
3. **Phase 3** - Add NOK currency support
4. **Phase 4** - Translate all content to Norwegian (no exceptions)
   - **CRITICAL:** Every page must have Norwegian translation
   - Remove Swedish schemas from all pages
5. **Phase 5** - Domain-based routing and enforcement
6. **Phase 6** - Environment configuration
7. **Phase 7** - Testing
8. **Phase 8** - Documentation

---

## Notes & Considerations

1. **Exchange Rates:** 
   - **Confirmed rate: 1 GBP = 12.85 NOK**
   - Consider API integration for automatic updates in the future
   - For now, hardcode the rate as specified

2. **IP Geolocation:** 
   - **Using Vercel's built-in `x-vercel-ip-country` header** (no external API needed)
   - This header is automatically available on Vercel deployments
   - Fallback to Accept-Language header if country header unavailable
   - Most efficient and reliable method for Norwegian visitor detection

3. **Translation Quality:** 
   - **Use AI translation but take time to ensure accuracy**
   - **Review translations carefully - do not rush**
   - **Think about context and meaning, ensure natural Norwegian**
   - Legal pages (Terms, Privacy, Refund) should be translated but don't need legal review

4. **Vercel Hosting:**
   - Both domains (cheffmate.co.uk and cheffmate.org) should be configured in Vercel
   - Ensure both domains point to the same project
   - Vercel automatically provides IP geolocation headers

5. **SEO:** Ensure Norwegian pages have proper hreflang tags

6. **Performance:** Cache translations appropriately

7. **Accessibility:** Ensure language selector is keyboard accessible

---

## Implementation Details Confirmed

1. **Exchange Rate:** ✅ **1 GBP = 12.85 NOK** (confirmed)
2. **Translation:** ✅ **AI translation with careful review** - take time, ensure accuracy
3. **Domain Setup:** ✅ **Vercel hosting** - both domains configured
4. **IP Detection:** ✅ **IP geolocation using Vercel's x-vercel-ip-country header**
5. **Legal Pages:** ✅ **Translate to Norwegian** - no legal review needed

---

## Estimated Timeline

- Phase 1-2: 2-3 hours (Language support + selector)
- Phase 3: 1-2 hours (NOK currency)
- Phase 4: 8-12 hours (Translations - can be parallelized)
- Phase 5: 3-4 hours (Domain routing)
- Phase 6: 1 hour (Config)
- Phase 7: 4-6 hours (Testing)
- Phase 8: 1 hour (Documentation)

**Total:** ~20-30 hours

---

## Files Summary

### New Files to Create:
- `src/components/widgets/language-switch/LanguageSwitch.tsx`
- `src/components/widgets/language-switch/LanguageSwitch.module.scss`
- `src/utils/domainDetection.ts`
- `middleware.ts` (Next.js middleware file in project root, NOT in src/)
- `src/pageSchemas/home/homePage.no.ts`
- `src/pageSchemas/about/aboutPage.no.ts`
- `src/pageSchemas/services/servicesPage.no.ts`
- `src/pageSchemas/pricing/pricingPage.no.ts`
- `src/pageSchemas/faq/faqPage.no.ts`
- `src/pageSchemas/contact-us/contactUsSchema.no.ts`
- `src/pageSchemas/terms-and-conditions/termsAndConditions.no.ts`
- `src/pageSchemas/privacy-policy/privacyPage.no.ts`
- `src/pageSchemas/cookie-policy/cookiePolicy.no.ts`
- `src/pageSchemas/refund-policy/refundPage.no.ts`
- `src/pageSchemas/get-started/getStarted.page.no.ts`

### Files to Modify:
- `src/context/i18nContext.tsx`
- `src/context/CurrencyContext.tsx`
- `src/components/layout/header/Header.tsx`
- `src/components/widgets/currency-switch/CurrencySwitch.tsx`
- `src/components/constructor/pricing-card/PricingCard.tsx`
- All page components in `src/app/` (to add Norwegian schemas)
- `next.config.ts`
- `.env`

---

**END OF PLAN**
