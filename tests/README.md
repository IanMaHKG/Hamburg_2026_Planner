# tests/ — Pre-Deployment Verification Suite

## pre_deployment_check.py

Headless Microsoft Edge + Chrome DevTools Protocol (CDP) end-to-end runtime verification suite.

**Requires a local HTTP server running first:**
```
python -m http.server 8000
```

Then in a second terminal:
```
python tests/pre_deployment_check.py
```

### What it checks
1. HTTP 200 response from `http://localhost:8000/`
2. Zero uncaught JavaScript runtime exceptions
3. Zero `console.error` calls during bootstrap
4. Full DOM hydration (all major UI sections rendered past skeleton)
5. Zero horizontal page overflow (`scrollWidth <= clientWidth`)

### Pass criteria
All 5 checks must pass with 0 errors before pushing to `main`.

---

## scratch_edge_profile/

This directory is auto-created by `pre_deployment_check.py` to store the headless Edge browser profile between runs. It is `.gitignore`d and never committed.

> **Before running a clean verification pass, delete this directory:**
>
> ```
> Remove-Item -Recurse -Force scratch_edge_profile   # Windows PowerShell
> rm -rf scratch_edge_profile                         # macOS / Linux
> ```
>
> Stale Edge cookies or a cached old Service Worker inside `scratch_edge_profile/` can cause the test to pass against old code. Deleting it forces a fresh browser session.

The directory will be recreated automatically on the next run.
