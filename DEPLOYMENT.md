# KIOSK Platform — Deployment

## Environments
- Local
- Vercel Preview
- Production

## Standard flow
1. Create a focused branch.
2. Implement and test locally.
3. Push to GitHub.
4. Review the Vercel preview deployment.
5. Verify the affected user journey in-browser.
6. Merge only after build/tests succeed.
7. Verify the production deployment.
8. Inspect logs for regressions.

## Current build
The repository currently uses Vite + TypeScript. The production build command is expected to remain `npm run build` unless the stack is intentionally changed and documented.

## Deployment rules
- GitHub is the source of truth.
- Do not commit `.env` files containing real secrets.
- Keep local, preview, and production environment variables separated.
- Review database migrations before production application.
- Do not knowingly promote a broken build.
- Preserve a rollback path for releases affecting sales, inventory, payments, authentication, or reporting.
