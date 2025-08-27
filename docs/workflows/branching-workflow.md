---
title: Branching Workflow
status: draft
lastReviewed: 2025-08-27
---

Trunk-based model: only `main` is long-lived.

Short-lived branches per change:
`type/PHN-###-short-slug`

Types (normalized): feat, fix, chore, docs, refactor, test, ci, build.
Use `feat` (not `feature`).

Examples:
`feat/PHN-104-rbac-middleware`
`fix/PHN-42-null-deref`

Lifecycle:
1. Create branch from up-to-date `main`.
2. Commit small, logical changes (commitlint enforced on push via commit-msg hook once hooks enabled).
3. Open PR early (draft acceptable).
4. Ensure required checks green; squash merge.

Future Enhancements (deferred):
- Automated branch name lint job.
- Pre-push hook for fast unit tests.
- Automatic Jira transition.
