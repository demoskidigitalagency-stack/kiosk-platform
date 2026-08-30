# KIOSK Unified Shell & Shared Frontend Data Foundation

## Locked shell direction
KIOSK uses one application shell across all organization-level modules:
- collapsible left sidebar
- persistent top bar
- organization switcher
- global search / Ctrl+K command center
- KIOSK Credits / usage indicator
- dark/light mode toggle
- notifications
- profile menu
- persistent bottom-right KIOSK AI Assistant
- plan/usage card at the bottom of the sidebar

## Sidebar segmentation
The full hub is visually grouped rather than presenting every capability at equal hierarchy.

### Workspace
- Dashboard
- Today
- Inbox
- Notifications

### Sales
- CRM & Customers
- Commerce
- Catalog
- Purchasing
- Customer Service

### Growth
- Marketing & Growth
- Funnels
- Build
- Venture

Lead Generation is a major capability inside Marketing & Growth rather than another duplicate CRM.

### Operations
- Operations
- Team
- HR
- Learning & Academy

### Business Intelligence
- Finance & Accounting
- Reports & Analytics
- Planning & Strategy
- Automation
- AI Studio

### Platform
- Integrations
- Settings

## Account / organization hierarchy
Target model:
Account → Organization → Workspace → Locations / Branches

- Account = signed-in human identity.
- Organization = tenant/business entity.
- Workspace = brand, business unit, client environment or operational workspace inside an organization.
- Location/Branch = physical or operational location.

One account may belong to multiple organizations and switch between them from the top bar.

## Plans
Standard KIOSK plan names:
- Starter
- Growth
- Business
- Enterprise

The UI may show current plan, KIOSK Credits, contacts/usage and upgrade/review-plan actions.

## Credits
KIOSK presents one simple visible KIOSK Credits balance while the future billing engine may meter different underlying usage categories separately, such as:
- AI
- messaging
- voice
- lead enrichment/prospecting
- other metered platform services

## Profile menu
Recommended organization-app profile menu:
- My Profile
- Organization Settings
- Users & Access
- Keyboard Shortcuts
- Super Admin (only when platform permission exists)
- Help & Support
- Sign Out

## Super Admin
Super Admin is isolated from normal business modules and uses its own application area/layout.

Canonical platform areas:
- Organizations
- Plans
- Revenue
- Users
- Support Tickets
- Feature Flags
- System Settings
- Queues & Logs
- Broadcast Notices
- Maintenance Mode
- API Monitoring
- Backups

Organization Owner/Admin and KIOSK platform Super Admin are separate concepts.

## Command Center
Ctrl+K is both global search and command execution.

It should eventually support:
- pages/modules
- contacts/customers
- conversations
- products
- orders/invoices
- campaigns/workflows
- settings
- create actions
- navigation actions
- Ask KIOSK AI

## Appearance presets
KIOSK supports complete selectable application personalities rather than only a color picker.

### KIOSK Modern — default/recommended
- KIOSK purple/navy brand identity
- clean Sync CRM / KIOSK CRM 2-style SaaS shell
- compact professional tables/cards/drawers
- modern soft surfaces

### Sync Workspace
- deeper green/emerald workspace personality inspired by Sync CRM and related KIOSK CRM 2 patterns

### KIOSK CRM1 Clean
- bright blue/white, lighter workspace personality inspired by KIOSK CRM 1 / the retained HTML reference

After choosing a preset, users can continue editing mode and later typography, density, radius, accent, layout and other appearance details.

## Shared frontend dataset rule
Until a backend is connected, KIOSK should not behave as disconnected demo pages.

The application uses one coherent seeded business workspace dataset. The same entity IDs and relationships must be reused across modules.

Example:
Contact C-1001 → WhatsApp Conversation CON-201 → Product Interest Scar Cream → Lead stage Qualified → Order ORD-1052 → Payment / Revenue → Reports attribution

If a record changes in the shared frontend store, every module that consumes it should reflect the same relationship/state.

Do not create a different Adaeze Market, product, order count or revenue value per page merely to make a screen look populated.

## Language rule
The user-facing application should not constantly label the workspace as "mock", "practice" or "demo" data. It should feel like a coherent working business environment.

Internally, development documentation must remain truthful: there is currently no backend, durable remote database or real external write integration. Frontend seeded/local state is an implementation phase, not a user-facing product mode.

## Current implementation status
The unified React shell has started replacing the old temporary DOM-bridge architecture. The current shell includes:
- grouped sidebar navigation
- organization switcher
- plan/usage card
- global command palette
- dark/light mode
- notifications dropdown
- profile menu
- isolated Super Admin view
- persistent KIOSK AI Assistant drawer
- three appearance presets
- shared contacts/conversations/orders/activity records used across multiple module surfaces

Future work should deepen each module workspace and move the shared seeded records into a dedicated domain/store layer before backend persistence is introduced.