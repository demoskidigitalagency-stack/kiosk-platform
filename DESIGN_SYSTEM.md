# KIOSK Platform — Design System

## Brand tokens
- Primary purple: `#7C3AED`
- Deep purple: `#5B21B6`
- Blue: `#2563EB`
- Deep blue: `#1E40AF`
- Success: `#10B981`
- Warning: `#F59E0B`
- Danger: `#EF4444`
- Slate: `#64748B`
- Light surface: `#F1F5F9`
- Typography: Inter

## UI principles
- Clear hierarchy over decoration
- Fast, operational workflows
- Consistent spacing and controls
- Reuse shared components
- Responsive on desktop, tablet, and mobile
- Keyboard-accessible controls
- Visible focus states
- Clear loading, empty, success, error, and permission-denied states

## Core components
Maintain shared versions of:
- App shell
- Sidebar/navigation
- Header
- Buttons
- Inputs
- Selects
- Search
- Tables
- Cards
- Dialogs
- Drawers
- Tabs
- Status badges
- Toasts/alerts
- Pagination
- Empty states
- Loading states

## POS-specific UX
- Primary checkout actions must remain highly visible.
- Avoid unnecessary confirmation steps during normal sale flow.
- Require confirmation for destructive/refund/payout actions.
- Prioritize barcode/search speed and keyboard operation.
- Totals, taxes, discounts, tender, and change must be visually unambiguous.
