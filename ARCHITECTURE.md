# KIOSK Platform — Architecture

## Current foundation
The repository currently uses Vite + React + TypeScript. Keep this frontend foundation until there is a documented reason to migrate frameworks.

## Target layers
1. UI shell and reusable components
2. Feature modules
3. Domain/business logic
4. Data access layer
5. Authentication and authorization
6. PostgreSQL-compatible database
7. Integrations (email, SMS, payments, etc.)
8. Reporting and audit events
9. Deployment and observability

## Feature boundaries
- `dashboard`
- `pos`
- `customers`
- `inventory`
- `pricing`
- `purchasing`
- `employees`
- `reports`
- `alerts`
- `settings`

Each module should own its UI, domain types, data operations, tests, and permission requirements where practical.

## Multi-business configuration
Business types should primarily alter enabled modules, terminology, workflows, receipt/configuration settings, and permissions. Avoid separate codebases per vertical.

## Data principles
- Use stable IDs.
- Preserve transaction history.
- Prefer auditable adjustments over silent overwrites for stock/cash-sensitive records.
- Use database constraints for integrity.
- Add indexes for real query patterns.
- Treat money carefully; avoid floating-point assumptions for financial values.

## Security boundary
The browser is untrusted. Protected actions require server/database authorization. Hiding a button is not permission enforcement.

## Architecture decisions
Record major changes with decision, rationale, alternatives, risks, and date before or alongside implementation.
