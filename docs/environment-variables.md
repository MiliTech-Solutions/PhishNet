# Environment Variables (Structure)

| Scope | Prefix | Notes |
|-------|--------|-------|
| Frontend | FRONTEND_ | Injected at build time only |
| Backend | BACKEND_ | Server-only, runtime loaded |
| Shared (rare) | SHARED_ | Avoid unless absolutely needed |

Examples (placeholders):
- BACKEND_PORT
- BACKEND_DB_URL
- BACKEND_LOG_LEVEL
- FRONTEND_API_BASE_URL

Validation: future startup schema validation (e.g., zod) failing fast on missing/invalid.