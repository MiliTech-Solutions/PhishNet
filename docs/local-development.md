# Local Development (Structure Only)

This document defines the structural decisions for local dev; no implementation yet.

## Toolchain
- Node LTS (see `.nvmrc`, `.node-version`)
- pnpm workspaces (root orchestrates sub-packages)
- TypeScript everywhere
- Vitest for tests (fast, ESM-friendly)
- ESLint + Prettier (formatting via Prettier)
- Husky + commitlint (to be added later) – CI authoritative

## Workspaces
- `backend` → Express/API (future)
- `frontend` → React/Vite (framework deferred)
- `shared` → Types/utilities only; no downstream deps

## Commands (Conceptual)
See root `package.json` placeholder scripts; all echo for now.

## Env Files
`.env.example`, `.env.test.example`; local `.env` ignored.
Prefixes: FRONTEND_, BACKEND_, (rare) SHARED_.

## Containers
`docker-compose.yml` provides Postgres (db). Others commented placeholders.

## TypeScript Layout
Project references: root references shared and backend (frontend later).
Path aliases: `@shared/*`, `@backend/*`, `@frontend/*`.

## Testing
Vitest config placeholder at root. Coverage thresholds (60%) baseline.
Integration tests will target running Postgres (db service).

## Hooks
Planned: pre-commit (lint-staged), commit-msg (commitlint), optional pre-push (unit tests).

## Onboarding Flow
1. Install Node (nvm use)
2. `pnpm install`
3. Copy `.env.example` → `.env`
4. `docker compose up -d db`
5. `pnpm dev` (future actual command)
6. Create branch `feat/PHN-123-short-slug`

## Future Enhancements
- Turborepo/Nx for caching
- OpenAPI generation & drift check
- Config validation layer (zod) at runtime