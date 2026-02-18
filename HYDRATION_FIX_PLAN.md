# Hydration Error Fix Plan

## Problem
Hydration mismatch error caused by `toLocaleString()` producing different output on server vs client:
- Server renders: `5000`
- Client renders: `5 000` (Norwegian locale formatting with space separator)

## Root Cause
`toLocaleString()` without a locale parameter uses the browser's locale, which can differ between server (default) and client (user's browser locale). When a Norwegian user visits, their browser uses Norwegian number formatting, causing a mismatch.

## Affected Files
1. `src/components/constructor/pricing-card/PricingCard.tsx` (line 109, 140)
2. `src/components/widgets/checkout/Checkout.tsx` (line 101)

## Solution
Use a consistent locale for all number formatting to ensure server and client render the same output.

### Option 1: Specify locale explicitly (Recommended)
Use `toLocaleString('en-US')` for all number formatting to ensure consistent formatting regardless of user's browser locale.

### Option 2: Create utility function
Create a `formatNumber` utility function that always uses a consistent locale.

## Implementation Steps

### Step 1: Fix PricingCard Component
**File:** `src/components/constructor/pricing-card/PricingCard.tsx`

**Change line 109:**
```typescript
// Before:
{tokens.toLocaleString()} tokens

// After:
{tokens.toLocaleString('en-US')} tokens
```

**Change line 140:**
```typescript
// Before:
<span>{calculatedTokens.toLocaleString()}</span>

// After:
<span>{calculatedTokens.toLocaleString('en-US')}</span>
```

### Step 2: Fix Checkout Component
**File:** `src/components/widgets/checkout/Checkout.tsx`

**Change line 101:**
```typescript
// Before:
{activePlan.tokens.toLocaleString()} tokens

// After:
{activePlan.tokens.toLocaleString('en-US')} tokens
```

### Step 3: Verify No Other Issues
Check for any other uses of `toLocaleString()` without locale parameter that might cause similar issues.

## Alternative: Create Number Formatting Utility (Optional)
If we want more control or need to format numbers differently based on currency/language in the future:

**File:** `src/utils/numberFormat.ts` (NEW)
```typescript
/**
 * Format number with consistent locale to avoid hydration mismatches
 * @param num - Number to format
 * @param locale - Locale to use (default: 'en-US')
 * @returns Formatted number string
 */
export function formatNumber(num: number, locale: string = 'en-US'): string {
    return num.toLocaleString(locale);
}
```

Then use:
```typescript
import { formatNumber } from '@/utils/numberFormat';
// ...
{formatNumber(tokens)} tokens
```

## Testing
After fix:
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Check browser console - hydration error should be gone
4. Verify numbers display correctly (should show "5000" not "5 000")
5. Test with different browser locales to ensure consistency

## Notes
- Using 'en-US' ensures consistent formatting: `5000` (no spaces)
- This is acceptable since we're displaying token counts, not currency amounts
- Currency amounts are already handled separately with proper formatting via CurrencyContext

---

## Quick Fix Summary
Replace all instances of `.toLocaleString()` with `.toLocaleString('en-US')` in:
1. PricingCard.tsx (2 places)
2. Checkout.tsx (1 place)

This ensures server and client always render the same number format.
