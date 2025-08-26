# Branch Protection (Manual Setup Guide)

To configure after first push:
1. Protect `main`.
2. Require pull request reviews: 1 (consider 2 later for critical paths).
3. Require status checks to pass before merging (initial set):
	- CI / lint
	- CI / typecheck
	- CI / unit-tests
	- CI / integration-tests (PR only)
	- CI / build-frontend
	- CI / build-backend
	- CI / coverage-report
	- PR Title Check
	- CodeQL / Analyze (javascript)
	- Commitlint
	- (Advisory, non-blocking): PR Size Labels
4. Require branches up to date (optional initially – can enable later).
5. Enforce administrators (recommended once stable).
6. Allow squash merges only; disable merge commits & rebase.
7. Require signed commits (optional – future enhancement).

Add CODEOWNERS paths already present for automatic reviewer assignment.