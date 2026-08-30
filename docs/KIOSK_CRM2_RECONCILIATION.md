# KIOSK CRM 2 Reconciliation

This document reconciles the Kiosk CRM 2 menu/features against the KIOSK master architecture. The goal is feature preservation without duplicating canonical systems.

## Verified as already covered
- Workspace Dashboard → Overview → Dashboard
- Workspace Calendar → Operations → Calendar, with Today contextual calendar
- Workspace Contacts → CRM → Contacts
- Inbox / All Conversations / Channel Setup → Inbox & Communications
- Leads / Contacts / Customers / Companies / Deals / Pipeline / Quotes / Segments / Smart Lists / Duplicate Manager / Meetings / Forecast / Custom Fields → CRM & Customers
- Orders / Invoices / POS / Shipping & Delivery / Returns / Storefront → Commerce
- Products / Collections / Inventory / Warehouses → Catalog
- Suppliers / Purchase Orders → Purchasing
- Website Builder → Build
- Campaigns / Broadcasts / Coupons / Loyalty / Rewards / Abandoned Cart / A/B Testing → Marketing & Growth
- Workflows → Automation
- AI Assistant / Content & Image Studio → AI Studio
- Landing Pages / Forms → Funnels, with Build providing reusable page/form editing infrastructure
- Venture Forge / Product Library / Export Center → Venture
- Tickets / Knowledge Base → Customer Service
- Employees / Attendance / Leave → HR
- Revenue / Expenses / Payments → Finance & Accounting
- Projects → Operations
- Analytics / Reports Overview → Reports & Analytics
- Courses / My Learning → Learning & Academy
- Apps & Integrations / Webhooks → Integrations
- API Playground / API Keys → Settings → Developer
- Users & Invites / Roles & Permissions → Team operationally, Settings → Users & Access for governance
- Audit Log → Settings → Audit, Backup & Recovery / Audit & Compliance
- Settings → consolidated KIOSK Settings architecture

## Features requiring explicit preservation or refinement

### Voice & Calling
Kiosk CRM 2 includes voice/calling capabilities that were not explicit enough in the master architecture.

Canonical home: Inbox & Communications → Voice & Calling
- Calls
- Phone Numbers
- Call Routing
- IVR
- Call Queue
- Call History
- Call Recording metadata
- Voicemail
- Call Coaching
- Call Notes
- Call Disposition
- Call Analytics

Connections/providers belong to Integrations → Communication Connectors. Phone/channel defaults belong to Settings → Channels. Customer call history should surface contextually in CRM Activities.

### Verification
Canonical placement depends on verification type, but it must not be discarded.

Settings → Security & Verification:
- Email verification
- Phone verification
- Identity/account verification where required
- Verification policies
- Verification status

Communication-provider/business verification remains contextual to Integrations. Payment/KYC verification remains with the relevant payment provider/integration. Verification is therefore a shared capability with Settings as the governance home.

### AI Agent
AI Agent is preserved inside AI Studio, not created as another top-level module.

AI Studio → AI Agents:
- Agent Library
- Create Agent
- Agent Instructions
- Allowed KIOSK Actions
- Data Sources
- Connected Skills
- Permissions
- Approval Policy
- Test Agent
- Agent Runs
- Run History
- Failed Runs
- Agent Analytics

Agents use the KIOSK Action Layer and inherit user/workspace permissions. Persistent scheduled/event behavior is handed to Automation rather than hidden inside an agent chat.

### Projects: Board and Timeline
Interpret the stated "tax board" as Task Board unless source verification proves a different feature.

Operations → Projects:
- All Projects
- Project Overview
- Task Board / Kanban
- List View
- Timeline
- Milestones
- Project Calendar
- Project Files
- Project Activity
- Project Analytics

Cross-business project analytics can also roll up to Reports & Analytics without creating a duplicate analytics engine.

### Reviews
Reviews should not disappear inside Commerce.

Canonical operational home: Commerce → Reviews
- Product Reviews
- Store Reviews
- Review Moderation
- Review Requests
- Review Status
- Ratings

Marketing & Growth may surface Reviews & Reputation contextually for acquisition/reputation campaigns. Catalog products can display their review summary.

### Billing, Wallet, Credits & Usage
Kiosk CRM 2 mixes software subscription billing with business finance. KIOSK separates them.

Settings → Plans & Billing (customer pays KIOSK):
- Subscription
- Plans
- KIOSK Billing Invoices
- Usage
- Platform Credits
- Credit History
- Payment Method
- Billing History
- Upgrade / Downgrade / Cancel

Finance & Accounting (merchant's own business money):
- Revenue
- Expenses
- Customer Payments
- Business Accounts / Wallets
- Payment Reconciliation

Do not mix KIOSK subscription credits with merchant business wallets.

### Payment Gateways
Canonical home: Integrations → Business / Payment Connectors
- Payment Gateways
- Connected Gateways
- Gateway Configuration
- Connection Health
- Transaction Sync

Settings → Business & Financial may choose the default/allowed payment methods. Commerce uses gateways at checkout/POS. Finance receives canonical transaction/accounting records.

### Affiliate & Earnings
Kiosk CRM 2 affiliate/earnings must be preserved without colliding with course affiliates.

Create a reusable platform Affiliate Engine with contextual surfaces:
- Marketing & Growth → Affiliates: program setup, affiliates, referral links, campaigns, commissions, performance
- Learning & Academy → Affiliates: course-specific affiliate view
- Finance & Accounting → Affiliate Earnings & Payouts: accrued commissions, approved earnings, payouts, reconciliation
- Reports & Analytics → Affiliate Analytics

This replaces the earlier assumption that affiliates are only course-focused.

### Connect to CRM
If "Connect to CRM" is a channel/contact synchronization action, canonical home is Integrations with contextual access from Inbox and CRM. It should not become a second CRM system.

## Updated canonical boundaries
- Inbox & Communications owns conversations and calls.
- Integrations owns provider connections, telephony providers, payment gateways and external CRM/channel connections.
- CRM owns people, companies, opportunities, activities and relationship intelligence.
- Commerce owns selling, fulfillment, returns, storefront and review operations.
- Catalog owns products and stock truth.
- Purchasing owns suppliers and procurement.
- Marketing & Growth owns campaigns, promotions, loyalty, recovery, experimentation and the reusable affiliate program.
- Finance owns merchant money and affiliate payout accounting.
- Settings → Plans & Billing owns what the KIOSK customer pays KIOSK, including platform credits and usage.
- AI Studio owns AI Assistant, content/image tools and AI Agents.
- Automation owns persistent workflows.
- Operations owns project execution, board and timeline.
- Reports & Analytics owns cross-business intelligence.

## Items now explicitly captured from Kiosk CRM 2
Voice, Calls, Phone Numbers, Routing, IVR, Call Coaching, Verification, AI Agents, Task Board/Kanban, Project Timeline, Reviews, Platform Credits, Usage, Payment Gateways, Affiliate Earnings and Payouts.

No feature in the supplied Kiosk CRM 2 inventory should be discarded solely because KIOSK groups it differently.
