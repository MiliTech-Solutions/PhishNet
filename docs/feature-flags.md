title: Feature Flags
status: draft
lastReviewed: 2025-08-27
---

Purpose: Track experimental or phased rollout features and their lifecycle.

| Flag Key | Description | Owner | Status | Introduced (Commit/Tag) | Target Removal | Notes |
|----------|-------------|-------|--------|-------------------------|----------------|-------|
| (none)   |             |       |        |                         |                |       |

Lifecycle expectations:
1. Add with clear owner & removal/expiry date (<= 90 days preferred).
2. Add monitoring/metrics if impacting user flows.
3. Remove code paths & flag promptly after graduation or cancellation.

Future Automation: `feature-flag-expiry.yml` workflow will parse metadata (TBD format) and warn on nearing/overdue flags.
