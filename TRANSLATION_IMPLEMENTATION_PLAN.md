# Translation Implementation Plan - Remaining Pages

## Overview
This document outlines the implementation plan for translating the remaining pages and components to Norwegian. All pages should support both English (`en`) and Norwegian (`no`) languages.

## Pages and Components to Translate

### 1. `/extra/chefs` - Chefs Listing Page
**File**: `src/app/extra/chefs/page.tsx`

**Current Hardcoded Text:**
- Hero title: "Choose your personal chef and learn with confidence"
- Hero description: "Browse professional chefs by cuisine, experience, and teaching style..."
- Filter bar placeholder: "Search by chef name or specialty..."
- Filter selectors: "Cuisine", "Expertise"
- Filter options: "Beginner", "Intermediate", "Advanced"
- Popular cuisines tags: "Italian", "French", "Japanese", "Plant Based"

**Components to Update:**
- `src/app/extra/chefs/page.tsx` - Main page component
- `src/components/extra/experts/expert-filter-bar/ExpertFilterBar.tsx` - Filter bar component

**Translation Keys Needed:**
```typescript
chefs: {
    hero: {
        title: "Choose your personal chef and learn with confidence",
        titleHighlight: "personal chef",
        description: "Browse professional chefs..."
    },
    filter: {
        searchPlaceholder: "Search by chef name or specialty...",
        cuisineLabel: "Cuisine",
        expertiseLabel: "Expertise",
        expertiseOptions: {
            beginner: "Beginner",
            intermediate: "Intermediate",
            advanced: "Advanced"
        },
        popularCuisines: ["Italian", "French", "Japanese", "Plant Based"]
    }
}
```

---

### 2. `/extra/chefs/[slug]` - Chef Profile Page
**File**: `src/app/extra/chefs/[slug]/page.tsx`

**Component**: `src/components/extra/experts/expert-profile/ExpertProfile.tsx`

**Current Hardcoded Text:**
- Role label: "Executive Chef"
- Meta labels: "⭐ Rating", "⏱ Experience", "🎓 Education"
- Button text: "Book a Course" (likely)
- Section titles: "About", "Specialties", "Courses" (likely)

**Translation Keys Needed:**
```typescript
chefProfile: {
    role: "Executive Chef",
    meta: {
        rating: "⭐ Rating",
        experience: "⏱ Experience",
        education: "🎓 Education"
    },
    buttons: {
        bookCourse: "Book a Course"
    },
    sections: {
        about: "About",
        specialties: "Specialties",
        courses: "Courses"
    }
}
```

---

### 3. `/join-team` - Join Team Page
**File**: `src/app/join-team/page.tsx`

**Current Hardcoded Text:**
- Hero title: "Join our global collective"
- Hero title highlight: "global collective"
- Hero description: "We're building a distributed team..."
- Primary CTA: "Apply now"
- Promo cards: "Independent Professionals", "Experts in Their Field"
- Values section: "Our values", "These principles guide every collaboration."
- Values items: "Transparency", "Flexibility", "Professionalism", "Mutual Respect"
- CTA section: "Ready to join?", "Fill out the form below..."
- Button: "Go to application form"

**Components to Update:**
- `src/app/join-team/page.tsx` - Main page component
- `src/components/widgets/join-team-form/JoinTeamForm.tsx` - Form component

**Translation Keys Needed:**
```typescript
joinTeam: {
    hero: {
        title: "Join our global collective",
        titleHighlight: "global collective",
        description: "We're building a distributed team...",
        primaryCta: "Apply now"
    },
    promoCards: [
        {
            title: "Independent Professionals",
            description: "You manage your own time..."
        },
        {
            title: "Experts in Their Field",
            description: "Whether you're a developer..."
        }
    ],
    values: {
        title: "Our values",
        description: "These principles guide every collaboration.",
        items: [
            { title: "Transparency", description: "Clear communication..." },
            { title: "Flexibility", description: "You choose when..." },
            { title: "Professionalism", description: "We work with people..." },
            { title: "Mutual Respect", description: "We value people..." }
        ]
    },
    cta: {
        title: "Ready to join?",
        description: "Fill out the form below...",
        buttonText: "Go to application form"
    },
    form: {
        label: "Join the team",
        title: "Work with us. Grow with us.",
        description: "We collaborate with independent professionals...",
        extraItems: [
            "Remote-first global team",
            "Flexible workload & schedule"
        ],
        // Form field labels and placeholders
        fields: {
            firstName: "First name",
            lastName: "Last name",
            email: "Email",
            // ... other fields
        }
    }
}
```

---

### 4. `/sign-in` - Sign In Page
**File**: `src/app/sign-in/page.tsx`
**Component**: `src/components/widgets/sign-in/SignIn.tsx`

**Current Hardcoded Text:**
- Title: "Login to Your Kitchen"
- Description: "Continue your culinary journey with AI and master chefs."
- Submit label: "Sign In to Dashboard"
- Field placeholders: "Email address", "Password"

**Translation Keys Needed:**
```typescript
signIn: {
    title: "Login to Your Kitchen",
    description: "Continue your culinary journey...",
    submitLabel: "Sign In to Dashboard",
    fields: {
        email: "Email address",
        password: "Password"
    }
}
```

---

### 5. `/sign-up` - Sign Up Page
**File**: `src/app/sign-up/page.tsx`
**Component**: `src/components/widgets/sign-up/SignUp.tsx`

**Current Hardcoded Text:**
- Title: "Create Account"
- Description: "Start your journey toward culinary excellence today."
- Submit label: "Create My Account"
- Field placeholders: "First name", "Last name", "Email address", "Password", "Phone number", "Date of birth", "Street", "City", "Country", "Postal code"

**Translation Keys Needed:**
```typescript
signUp: {
    title: "Create Account",
    description: "Start your journey toward culinary excellence today.",
    submitLabel: "Create My Account",
    fields: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        password: "Password",
        phone: "Phone number",
        birthDate: "Date of birth",
        addressStreet: "Street",
        addressCity: "City",
        addressCountry: "Country",
        addressZip: "Postal code"
    }
}
```

---

### 6. Header - Sign In/Sign Up Buttons
**Component**: `src/components/widgets/auth-buttons/AuthButtons.tsx`

**Current Hardcoded Text:**
- Button text: "Sign In"
- Button text: "Sign Up"

**Translation Keys Needed:**
```typescript
auth: {
    signIn: "Sign In",
    signUp: "Sign Up"
}
```

**Note**: These should be added to `src/resources/translations.ts` under a new `auth` section.

---

### 7. Footer - Copyright Text
**Component**: `src/components/layout/footer/Footer.tsx`

**Current Hardcoded Text:**
- Line 330: `© {new Date().getFullYear()} All rights reserved.`

**Translation Keys Needed:**
```typescript
footer: {
    copyright: "All rights reserved."
}
```

**Note**: This should be added to `src/resources/translations.ts` under the existing `footer` section.

---

### 8. `/contact-us` - Contact Us Page
**File**: `src/app/contact-us/page.tsx`

**Current Hardcoded Text:**
- "Login required"
- "You must log in to request this SEO service."
- Form title: "Request {service}"
- Form description: "Submitting this request will deduct {tokens} tokens from your balance."

**Components to Check:**
- `src/components/widgets/contact-form/ContactForm.tsx`
- `src/components/extra/seo/seo-form/SeoForm.tsx`

**Translation Keys Needed:**
```typescript
contactUs: {
    loginRequired: "Login required",
    loginRequiredMessage: "You must log in to request this SEO service.",
    requestTitle: "Request {service}",
    requestDescription: "Submitting this request will deduct {tokens} tokens from your balance."
}
```

---

### 9. `/profile` - Profile Page
**File**: `src/app/profile/page.tsx`
**Component**: `src/components/widgets/profile/Profile.tsx`

**Sub-Components with Hardcoded Text:**

#### 9.1 ProfileHead Component
**File**: `src/components/features/profile-head/ProfileHead.tsx`

**Current Hardcoded Text:**
- "Welcome back, {firstName} {lastName}!"
- "Member since: {date}"

**Translation Keys Needed:**
```typescript
profile: {
    head: {
        welcomeBack: "Welcome back, {firstName} {lastName}!",
        memberSince: "Member since: {date}"
    }
}
```

#### 9.2 BalanceCard Component
**File**: `src/components/features/balance-card/BalanceCard.tsx`

**Current Hardcoded Text:**
- Label: "CULINARY CREDITS"
- Description: "Unlock premium chef-led masterclasses and AI recipe generations."
- Button: "Top-Up Tokens"
- Token label: "{amount} Tokens"

**Translation Keys Needed:**
```typescript
profile: {
    balance: {
        label: "CULINARY CREDITS",
        description: "Unlock premium chef-led masterclasses and AI recipe generations.",
        buttonText: "Top-Up Tokens",
        tokensLabel: "{amount} Tokens"
    }
}
```

#### 9.3 Dashboard Component
**File**: `src/components/features/dashboard/Dashboard.tsx`

**Current Hardcoded Text:**
- Tab labels: "Orders", "Transactions"

**Translation Keys Needed:**
```typescript
profile: {
    dashboard: {
        tabs: {
            orders: "Orders",
            transactions: "Transactions"
        }
    }
}
```

**Note**: Also check `AllOrders` and `TransactionHistory` components for additional hardcoded text.

---

## Implementation Steps

### Phase 1: Extend Translation System
1. **Update `src/resources/translations.ts`**
   - Add `auth` section with `signIn` and `signUp` keys
   - Add `copyright` to `footer` section

2. **Create `src/resources/pageTranslations.ts` extensions**
   - Add `chefs` section
   - Add `chefProfile` section
   - Add `joinTeam` section (extend existing)
   - Add `signIn` section
   - Add `signUp` section
   - Add `contactUs` section
   - Add `profile` section (after analyzing sub-components)

### Phase 2: Update Components

#### 2.1 Header/Footer Components
- [ ] Update `src/components/widgets/auth-buttons/AuthButtons.tsx` to use translations
- [ ] Update `src/components/layout/footer/Footer.tsx` to use translations for copyright

#### 2.2 Authentication Pages
- [ ] Update `src/components/widgets/sign-in/SignIn.tsx` to use translations
- [ ] Update `src/components/widgets/sign-up/SignUp.tsx` to use translations

#### 2.3 Chefs Pages
- [ ] Update `src/app/extra/chefs/page.tsx` to use translations
- [ ] Update `src/components/extra/experts/expert-filter-bar/ExpertFilterBar.tsx` to use translations
- [ ] Update `src/components/extra/experts/expert-profile/ExpertProfile.tsx` to use translations

#### 2.4 Join Team Page
- [ ] Update `src/app/join-team/page.tsx` to use translations
- [ ] Update `src/components/widgets/join-team-form/JoinTeamForm.tsx` to use translations

#### 2.5 Contact Us Page
- [ ] Update `src/app/contact-us/page.tsx` to use translations
- [ ] Check and update `src/components/widgets/contact-form/ContactForm.tsx` if needed
- [ ] Check and update `src/components/extra/seo/seo-form/SeoForm.tsx` if needed

#### 2.6 Profile Page
- [ ] Analyze sub-components for hardcoded text
- [ ] Update `src/components/features/profile-head/ProfileHead.tsx` if needed
- [ ] Update `src/components/features/balance-card/BalanceCard.tsx` if needed
- [ ] Update `src/components/features/dashboard/Dashboard.tsx` if needed

### Phase 3: Testing
- [ ] Test all pages in English mode
- [ ] Test all pages in Norwegian mode
- [ ] Verify language switching works correctly
- [ ] Verify domain-based routing (cheffmate.org) forces Norwegian
- [ ] Check for any remaining hardcoded text

---

## File Structure

```
src/
├── resources/
│   ├── translations.ts (extend with auth, footer.copyright)
│   └── pageTranslations.ts (add new sections)
├── components/
│   ├── layout/
│   │   ├── footer/
│   │   │   └── Footer.tsx (update copyright)
│   │   └── header/
│   │       └── Header.tsx (already uses translations)
│   ├── widgets/
│   │   ├── auth-buttons/
│   │   │   └── AuthButtons.tsx (update Sign In/Sign Up buttons)
│   │   ├── sign-in/
│   │   │   └── SignIn.tsx (update form text)
│   │   ├── sign-up/
│   │   │   └── SignUp.tsx (update form text)
│   │   ├── join-team-form/
│   │   │   └── JoinTeamForm.tsx (update form text)
│   │   └── profile/
│   │       └── Profile.tsx (check sub-components)
│   └── extra/
│       └── experts/
│           ├── expert-filter-bar/
│           │   └── ExpertFilterBar.tsx (update filter text)
│           └── expert-profile/
│               └── ExpertProfile.tsx (update profile text)
└── app/
    ├── extra/
    │   └── chefs/
    │       ├── page.tsx (update hero text)
    │       └── [slug]/
    │           └── page.tsx (uses ExpertProfile component)
    ├── join-team/
    │   └── page.tsx (update all text)
    ├── sign-in/
    │   └── page.tsx (uses SignIn component)
    ├── sign-up/
    │   └── page.tsx (uses SignUp component)
    ├── contact-us/
    │   └── page.tsx (update conditional text)
    └── profile/
        └── page.tsx (uses Profile component)
```

---

## Translation Quality Guidelines

1. **Consistency**: Use consistent terminology across all pages
2. **Natural Language**: Translations should sound natural in Norwegian, not literal
3. **Context Awareness**: Consider context when translating (e.g., "Sign In" vs "Login")
4. **Cultural Adaptation**: Adapt cultural references where appropriate
5. **Length Consideration**: Norwegian text may be longer; ensure UI can accommodate

---

## Priority Order

1. **High Priority** (User-facing, frequently accessed):
   - Header Sign In/Sign Up buttons
   - Footer copyright
   - Sign In page
   - Sign Up page

2. **Medium Priority** (Important but less frequent):
   - Chefs listing page
   - Chef profile page
   - Join Team page

3. **Lower Priority** (Less frequently accessed):
   - Contact Us page
   - Profile page (depends on sub-components)

---

## Notes

- All pages should be client components (`"use client"`) if they use hooks like `useI18n`
- Ensure all components import and use `useI18n` hook from `@/context/i18nContext`
- Use `getPageTranslations(lang)` for page-specific translations
- Use `getTranslations(lang)` for general UI translations (header/footer)
- Test that domain-based routing (cheffmate.org) correctly forces Norwegian language

---

## Estimated Effort

- **Translation System Extension**: 1-2 hours
- **Component Updates**: 4-6 hours
- **Testing & Bug Fixes**: 2-3 hours
- **Total**: 7-11 hours

---

## Next Steps

1. Review and approve this implementation plan
2. Start with Phase 1: Extend translation system
3. Proceed with Phase 2: Update components in priority order
4. Complete Phase 3: Testing and verification
