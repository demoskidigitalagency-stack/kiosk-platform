# KIOSK Platform — Security & Authorization

## Roles
Initial role model:
- Owner
- Admin
- Manager
- Cashier
- Inventory/Purchasing Staff
- Employee
- Viewer (optional)

## Core rules
- Enforce permissions server-side/database-side.
- Never rely on hidden UI as authorization.
- Apply least privilege.
- Never commit secrets or production credentials.
- Protect administrative, refund, payout, inventory-adjustment, employee, and financial-reporting actions.
- Log sensitive actions with actor, timestamp, entity, action, and relevant before/after context where appropriate.
- Verify webhook signatures.
- Rate-limit abuse-prone endpoints when backend APIs are added.
- Avoid verbose production error leakage.

## Sensitive operational events
Audit at minimum:
- Refunds/returns
- Payouts/cash adjustments
- Price changes
- Inventory quantity adjustments
- User/role changes
- End-of-day close/reopen
- Deleted or voided transactions
- Security setting changes

## Release security review
- Authentication flow
- Password/account recovery
- Role boundaries
- Cross-tenant/business data isolation if multi-tenant
- Database policies
- File uploads
- Environment variables
- API input validation
- Payment/webhook handling
- Dependency risks
