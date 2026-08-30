# AGENTS.md

## Purpose
Instructions for AI coding agents working on KIOSK Platform.

## Read first
Before editing, read `README.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `DESIGN_SYSTEM.md`, `SECURITY.md`, `TESTING.md`, and `DEPLOYMENT.md`.

## Product rules
- KIOSK is a clean implementation; reference repositories are for concepts and proven workflows only.
- Preserve the modular product architecture: POS, CRM, inventory, purchasing, employees, reporting, alerts, settings, and customization.
- Do not duplicate components or business logic unnecessarily.
- Keep business-type differences configurable rather than forking the entire product.

## Engineering rules
- Current frontend stack: Vite + React + TypeScript.
- Prefer reusable React components and typed domain models.
- Never commit secrets or real `.env` values.
- Authorization must be enforced in backend/data rules, not only by hiding UI.
- Document schema, auth, or architecture changes.
- Prefer small, reversible changes.
- Keep responsive behavior intact.

## Definition of done
- Requirement implemented
- TypeScript/build checks pass
- Critical flow verified
- Permissions reviewed when relevant
- No obvious regression
- Documentation updated when architecture or product behavior changes
