---
title: Branch Naming
status: draft
lastReviewed: 2025-08-27
---

Pattern: `type/PHN-###-short-slug`

Types (Conventional Commit subset):
- feat
- fix
- chore
- docs
- refactor
- test
- ci
- build

Rules:
1. Jira key required (PHN-###).
2. Lowercase; hyphen words.
3. Keep slug short (< 5 words).
4. Prefer present-tense describing change.

Rationale: Enables automation (regex), traceability, and consistent commit messages.

See also: `docs/workflows/branching-workflow.md`.
