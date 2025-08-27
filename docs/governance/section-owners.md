title: Section Owners
status: draft
lastReviewed: 2025-08-27
---

Mapping of repository areas to responsible owners (teams or individuals). Update when ownership changes.

| Area / Path | Owner | Notes |
|-------------|-------|-------|
| `backend/` | TBD Backend Lead | Service/API implementation |
| `frontend/` | TBD Frontend Lead | UI/UX implementation |
| `shared/` | TBD Platform | Cross-cutting libs & types |
| `docs/` | Docs Guild | Documentation quality & structure |
| `docs/adr/` | Architecture Group | ADR authorship & lifecycle |
| `.github/workflows/` | DevEx | CI/CD integrity & security gates |
| `infrastructure/` | DevOps/SRE | Deployment & infra as code |
| `SECURITY.md` / security processes | Security Champion | Vuln triage & disclosure |
| `feature-flags` (policy + expiry) | Product + Engineering Leads | Ensure clean-up & observability |

Escalation Order: Owner → Backup (to be defined) → Engineering Director.

Planned Enhancements:
1. CODEOWNERS alignment (auto-reviewers).
2. Automated drift detection (paths missing owners).
3. Dashboard summarizing stale ownership (> 6 months without review).
