# Secrets Management

Phase 1 (current): GitHub Actions encrypted secrets (.env locally via `.env.example`).
Phase 2: External secret store (AWS SSM Parameter Store or Secrets Manager) accessed by deployment jobs.
Phase 3: Runtime secret rotation & audit (out of scope now).

Rules:
- Never commit real secrets.
- Rotate immediately if exposed.
- Scope least privilege IAM roles for CI when moving to cloud.