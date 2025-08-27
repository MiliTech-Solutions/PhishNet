# Contributing (Bootstrap Draft)

Trunk-based: only `main` is long-lived.

Branch naming: `type/PHN-###-short-slug`.

Types (normalized): feat, fix, chore, docs, refactor, test, ci, build (use `feat`, not `feature`).

PR title regex (enforced): `^(feat|fix|chore|docs|refactor|test|ci|build)(\([^)]*\))? PHN-\d+: .+`

Squash merges only. CI must be green. Include Jira key in the first line of description too.

Add or update tests for code changes. Keep PRs < 250 LOC when possible.

See also:
- `docs/workflows/branching-workflow.md`
- `docs/contributing/branch-naming.md`
