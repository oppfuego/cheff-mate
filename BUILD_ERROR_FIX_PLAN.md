# Build Error Fix Plan

## Error 1: EPERM Permission Error
**Error:** `EPERM: operation not permitted, open '.next\trace'`  
**Status:** Build compiled successfully but failed writing trace file

## Error 2: Invalid next.config.ts
**Warning:** `Unrecognized key(s) in object: 'turbo'`  
**Issue:** The `turbo` key is not valid in Next.js 15 config

---

## Fix Plan

### Step 1: Fix next.config.ts (Remove Invalid 'turbo' Key)

**File:** `next.config.ts`

**Change:**
```typescript
// REMOVE this section:
turbo: {
    enabled: true,
},
```

**Reason:** Next.js 15 doesn't use a `turbo` config key. Turbopack is enabled via the `--turbopack` flag in the build command, not via config.

---

### Step 2: Fix EPERM Error (Windows Permission Issue)

The build is trying to write to `.next/trace` but Windows is blocking it. This is typically caused by:
- File/folder locked by another process
- Permission issues on `.next` folder
- Antivirus blocking access

**Solution A: Clean Build Cache (Recommended)**
```powershell
# Stop any running dev server
# Delete .next folder
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Rebuild
npm run build
```

**Solution B: Fix Permissions**
```powershell
# Run PowerShell as Administrator
takeown /F .next /R /D Y
icacls .next /grant %USERNAME%:F /T
Remove-Item -Recurse -Force .next
npm run build
```

**Solution C: Disable Trace File (Temporary Workaround)**
Add to `next.config.ts`:
```typescript
experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    instrumentationHook: false, // Disable trace generation
},
```

**Solution D: Check for Locked Files**
- Close VS Code/Cursor
- Close all terminal windows
- Close file explorer windows showing `.next` folder
- Check Task Manager for Node.js processes
- Kill any Node processes: `Get-Process node | Stop-Process -Force`

---

## Implementation Order

1. **Fix next.config.ts** - Remove `turbo` key (immediate fix)
2. **Clean .next folder** - Delete and rebuild (most common solution)
3. **If still failing** - Try permission fixes or disable trace

---

## Verification

After fixes:
```powershell
npm run build
```

Should complete without errors.
