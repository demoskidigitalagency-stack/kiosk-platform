# KIOSK Platform — Testing

## Required checks
- TypeScript compile/build
- Unit tests for critical business logic
- Integration tests for data/API boundaries once backend is introduced
- End-to-end tests for critical user journeys
- Browser verification after meaningful UI changes

## Critical journeys
- Sign in / sign out
- Role/permission boundaries
- Product search and selection
- Add/remove/update cart items
- Discount/tax calculation
- Complete sale
- Receipt/history lookup
- Return/refund flow
- Inventory quantity adjustment
- Price update
- Customer creation/edit
- Purchasing/receiving
- Employee clock in/out
- End-of-day close
- Reports loading with correct access

## UI states
Every major screen should handle:
- Loading
- Empty
- Success
- Validation error
- Server/data error
- Permission denied

## Release gate
Do not call a feature release-ready unless build checks pass and the critical affected workflow has been verified end to end.
