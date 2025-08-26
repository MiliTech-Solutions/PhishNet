# PhishNet

Infrastructure foundation (Part 2) – application code TBD.

## Structure

```
frontend/            # Future UI
backend/             # Future API services
shared/              # Cross-cutting libs/types
db/migrations/       # Database migration files
infrastructure/      # Infra as code / deployment artifacts
docs/adr/            # Architecture Decision Records
scripts/             # Automation scripts
.github/             # Workflows, templates, CODEOWNERS
```

## Workflow
Trunk-based with only `main` long-lived.
Branches: `type/PHN-###-short-slug` (feat, fix, chore, docs, refactor, test, ci, build).
Squash merge via PR; required checks (once workflows run): lint, typecheck, unit-tests, integration-tests (PR), build-frontend, build-backend, coverage-report.

### Required Status Checks (Initial)
CI jobs: lint, typecheck, unit-tests, integration-tests, build-frontend, build-backend, coverage-report
Other: PR Title Check, CodeQL Analyze, Commitlint
Advisory (non-blocking): Size Labels

## ADRs
- ADR-0001 PostgreSQL
- ADR-0002 Trunk-Based Mono-Repo
- ADR-0003 Secrets Management Strategy
- ADR-0004 CI Pipeline & Required Checks
- ADR-0005 Jira Workflow & Issue Taxonomy

See `docs/adr/` for placeholders.

## Contributing
Read `CONTRIBUTING.md`. Add Jira key (PHN-###) in PR title.

## Security
See `SECURITY.md` for reporting. No secrets in repo. Use `.env.example` template.

## License
MIT – see `LICENSE`.# PhishNet

Initial bootstrap commit. More files incoming.
