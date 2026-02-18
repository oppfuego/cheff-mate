# Parsing Error Fix Plan

## Error Analysis
**Error Location**: `./src/app/page.tsx:135:17`
**Error Type**: Parsing ecmascript source code failed
**Error Message**: Expected '</', got ']'

## Root Causes

1. **Lines 111-135**: Malformed `.map()` function in `coreValues.values`
   - The `.map()` starts correctly but has extra objects after the first mapped object
   - Should return a single object per iteration, not multiple objects

2. **Lines 267-272**: Hardcoded description text instead of using translation
   - Still contains hardcoded English text in JSX fragment

3. **Lines 278-293**: Malformed `.map()` function in `joinTeam.steps`
   - Similar issue - extra objects after the mapped object
   - Should return a single object per iteration

## Fix Strategy

1. Fix `coreValues.values` mapping (lines 111-135)
   - Remove extra objects after the mapped object
   - Ensure `.map()` returns only one object per iteration: `{ icon, title, description }`

2. Fix `joinTeam.description` (lines 267-272)
   - Replace hardcoded text with `{t.joinTeam.description}`

3. Fix `joinTeam.steps` mapping (lines 278-293)
   - Remove extra objects after the mapped object
   - Ensure `.map()` returns only one object per iteration: `{ icon, title, description }`

## Implementation Steps

1. Replace lines 111-135 with correct `.map()` syntax
2. Replace lines 267-272 with translation reference
3. Replace lines 278-293 with correct `.map()` syntax
4. Verify no syntax errors remain
