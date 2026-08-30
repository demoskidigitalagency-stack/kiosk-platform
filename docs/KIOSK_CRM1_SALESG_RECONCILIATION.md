# KIOSK CRM 1 + SalesG Reconciliation

This document reconciles the supplied Kiosk CRM 1 inventory and the user-described SalesG application against the KIOSK master architecture. The objective is to preserve useful capabilities while consolidating duplicate systems into one canonical home.

> SalesG is not currently represented by a source repository in the KIOSK repo set. SalesG items below are therefore captured from the supplied product inventory as requirements/reference concepts, not verified source-code implementation.

## Kiosk CRM 1 — already covered

### Dashboard
- Dashboard → Overview → Dashboard

### Inbox & Communications
- All Conversations
- WhatsApp
- Email
- SMS
- Messenger
- Instagram
- Telegram
- Web Chat
- Assigned to Me
- Unassigned
- Pinned

Canonical home: Inbox & Communications. Provider authorization/setup remains Integrations → Communication Connectors.

### Contacts
- All Contacts
- Segments
- Smart Lists
- Tags
- Custom Fields
- Import
- Export
- Duplicate Manager

Canonical home: CRM & Customers → Contacts / Data & Customization.

### CRM
- Leads
- Deals & Pipeline
- Companies / Company Stats
- Meetings
- Forecast
- Custom Objects

Canonical home: CRM & Customers. Company Stats and Forecast are contextual CRM intelligence; cross-business reporting rolls up to Reports & Analytics.

### E-commerce
- Overview
- Products
- Orders
- Cart & Checkout
- Payments
- Shipping
- Discounts

Canonical split:
- Commerce → Overview, Orders, Cart & Checkout, Payments workflow, Shipping, Discounts
- Catalog → Products
- Finance & Accounting → canonical payment/accounting records
- Integrations → payment/shipping providers

### Campaigns
- Email
- SMS
- WhatsApp
- Telegram Broadcast
- Multi-channel
- Templates
- Drafts
- Scheduling
- A/B Testing

Canonical home: Marketing & Growth → Campaigns / Broadcasts / Templates / Experimentation. Inbox owns conversations; campaign delivery connections live in Integrations.

### Automation
- Workflows
- Triggers
- Workflow Library
- Workflow Templates
- Active / Paused
- Run Logs

Canonical home: Automation.

### Venture / Growth Tools
- Niche Finder
- Offer Builder
- Funnel Generator
- Launch Center
- Digital Product Library
- Ads & Social Content / Experiments
- Export Center

Canonical home: Venture. Kiosk CRM 1 exposes some of these twice under Venture and Growth Tools; KIOSK keeps one canonical Venture capability with contextual shortcuts from Marketing & Growth where useful.

### Funnels
- All Funnels
- Funnel Builder
- Steps & Pages
- Funnel Analytics

Canonical home: Funnels.

### Forms & Pages
- Forms
- Landing Pages
- Funnels
- Pop-ups
- Page Templates

Canonical split:
- Build → reusable page/form/pop-up/template creation infrastructure
- Funnels → funnel-owned landing pages, forms, steps and conversion analytics

Do not create duplicate page/form builders.

### Learning
- Courses
- Students
- Certificates
- Course Analytics
- "Athletes" supplied in inventory is preserved as an unresolved label until source intent is confirmed; if it means Affiliates, it maps to the reusable Affiliate Engine with a Learning contextual view.

Canonical home: Learning & Academy.

### Analytics
- Overview
- Campaign Reports
- Channel Reports
- Team Performance
- Revenue Attribution
- Funnel Reports

Canonical home: Reports & Analytics, with contextual analytics in Marketing, Inbox, Team and Funnels.

### Integrations / Marketplace
- Directory
- Connected Apps
- Marketplace
- API Integration
- Template Store
- Webhooks
- Sync Log

Canonical home: Integrations. API Keys/API Explorer remain Settings → Developer. Marketplace remains nested under Integrations.

### Team / Settings
- Users & Roles
- Teams & Departments
- Permissions
- API Keys
- Custom Branding
- Workspace
- Audit Logs
- Notification Preferences
- Security
- 2FA

Canonical split:
- Team → people, teams/departments and operational assignment
- Settings → Users & Access for governance, Brand & Appearance, Workspace/Organization, Audit/Backup/Recovery, Notifications preferences, Security/2FA, Developer/API Keys

## Kiosk CRM 1 — capabilities requiring explicit refinement

### Voice
Kiosk CRM 1 confirms that voice is a first-class communication capability.

Canonical home: Inbox & Communications → Voice & Calling
- Call Log
- Phone Numbers
- IVR Flows
- Recordings
- Voice Analytics
- AI Voice Agent

Supporting ownership:
- Integrations → telephony/voice provider connection
- AI Studio → AI Voice / Voice Agents intelligence and configuration
- CRM → contextual call activity on contact/customer/company
- Reports & Analytics → cross-business call reporting

Voice recordings require explicit storage, retention, access and compliance controls when backend implementation begins.

### WhatsApp Operations
Kiosk CRM 1 has a richer dedicated WhatsApp administration surface:
- Connected Numbers
- Cloud API Setup
- QR Code Gateway
- Message Templates
- Broadcast
- WhatsApp Analytics

Canonical split:
- Integrations → WhatsApp connection, Cloud API, gateway, connected numbers
- Inbox & Communications → WhatsApp conversations
- Marketing & Growth → WhatsApp broadcasts/campaigns
- Settings → channel defaults/policies
- Reports & Analytics / contextual Inbox analytics → WhatsApp performance

### AI Studio additions
Kiosk CRM 1 adds:
- Product Suggestions
- Brand Voice

Canonical AI Studio additions:
- Product Intelligence / Product Suggestions
- Brand Voice

Product Suggestions should consume Catalog, Commerce and authorized external research/context rather than create a separate product database. Brand Voice should reference Settings → Brand & Appearance as the canonical business-brand configuration.

## SalesG — supplied requirements/reference concepts

### My Store
SalesG groups seller operations under My Store:
- Storefront
- Products
- Checkout
- Stock & Inventory
- Product Analytics
- Buy Stock
- Stock Records
- Agents
- Agent List
- Agent Performance

KIOSK should preserve the capabilities but not create a duplicate My Store data silo.

Canonical split:
- Commerce → Storefront, Checkout
- Catalog → Products, Stock & Inventory, Stock Records
- Purchasing → Buy Stock / procurement / receiving
- Reports & Analytics → Product Analytics
- Team / Sales Operations → Agents and Agent Performance

A contextual "My Store" command-center view may later aggregate these modules without owning duplicate records.

### Sales Agents
SalesG explicitly introduces seller/sales-agent operations.

Recommended canonical structure:
Team → Sales Agents
- Agent List
- Agent Profile
- Assignment
- Territory / Location
- Agent Status
- Agent Performance
- Agent Sales
- Agent Commission / Earnings context

Finance owns payable earnings/commission accounting. Reports owns cross-agent analytics. Commerce/CRM can assign orders/leads to agents.

### Finance
SalesG includes:
- Income
- Expenses
- Order Manifest
- "Stock Works" supplied label

Canonical split:
- Finance & Accounting → Income / Revenue, Expenses
- Commerce / Fulfillment → Order Manifest
- Catalog / Purchasing → stock-related operational records

"Stock Works" remains Pending Placement until its exact SalesG meaning is clarified; it must not be silently discarded.

### Marketing
- Campaign Manager
- Email Marketing
- WhatsApp Automation
- SMS Automation

Canonical split:
- Marketing & Growth → Campaign Manager, Email/WhatsApp/SMS marketing
- Automation → persistent automated workflows
- Integrations → provider connections
- Inbox → one-to-one conversations

### Staff Management
- Staff List
- Roles & Permissions
- Staff Performance
- Staff Earnings

Canonical split:
- Team → Staff List, roles/permissions operational view, performance
- HR → employee lifecycle where staff are employees
- Settings → Users & Access governance
- Finance → Staff Earnings / payable compensation records

### Connections
SalesG includes:
- Sales Form
- WooCommerce
- Elementor Form

Canonical split:
- Build → Sales Form creation
- Integrations → WooCommerce connection
- Integrations → Elementor Form connection/import adapter
- CRM → leads/contacts captured by connected forms
- Commerce → orders captured by sales/order forms where applicable

This produces a clean ingestion flow:
Sales Form / Elementor / WooCommerce → Integration or Build → CRM / Commerce → Automation → Reports

### Customer Service
Canonical home: Customer Service. Preserve as support/helpdesk/customer-resolution capability rather than mixing it into Inbox.

### SalesG Settings additions
Supplied SalesG settings include:
- Business Preferences
- Admin / CRM Login and assignments
- Restore Points
- Reset Store Data
- Email Notification Preferences
- Notification event/status preferences
- Store Currency Preferences

Canonical placement:
- Settings → Organization & Locations / Preferences → Business Preferences
- Settings → Users & Access → Admin/CRM access and assignments governance
- Settings → Audit, Backup & Recovery → Restore Points
- Settings → System → Reset Store Data (high-impact, confirmation required)
- Settings → Notifications → Email and event/status preferences
- Settings → Business & Financial → Store Currency

Reset Store Data is a destructive administrative action and should require elevated permission, explicit confirmation and audit logging when implemented.

## Billing consolidation across Kiosk CRM 1 / CRM 2 / SalesG

Kiosk CRM 1 includes subscription plan, invoices, credits, wallets, payments, coupons and affiliate program. Preserve the distinction between KIOSK SaaS billing and merchant finance.

Settings → Plans & Billing:
- Subscription
- Plans
- KIOSK Billing Invoices
- Platform Credits
- Usage
- Billing Payment Method
- Billing History
- KIOSK Plan Coupons / Promotional Credits where applicable

Finance & Accounting:
- Merchant Revenue
- Merchant Expenses
- Customer Payments
- Business Accounts / Wallets
- Reconciliation
- Affiliate/Agent/Staff payable earnings where applicable

Marketing & Growth → Affiliate Engine:
- Affiliate Program
- Affiliates
- Referral Links
- Commissions
- Campaigns
- Performance

Finance → Affiliate Earnings & Payouts.
Learning → course-specific affiliate context.
Reports → affiliate analytics.

Do not mix KIOSK subscription credits/wallet with the merchant's operational cash/accounts.

## Cross-source consolidation decisions

1. Inbox is one omnichannel conversation system: WhatsApp, Email, SMS, Messenger, Instagram, Telegram, Web Chat and Voice.
2. WhatsApp has one provider/configuration system in Integrations, one conversation surface in Inbox, one broadcast surface in Marketing and contextual analytics in Reports.
3. Voice has one communication system in Inbox; AI voice intelligence lives in AI Studio; provider setup lives in Integrations.
4. Contacts/Leads/Customers/Companies/Deals remain one CRM identity/opportunity system.
5. Products/stock remain Catalog; Commerce consumes them; Purchasing brings stock in.
6. Build owns reusable forms/pages/pop-ups; Funnels owns conversion journeys using those building capabilities.
7. Venture owns Niche Finder/Offer Builder/Funnel Generator/Launch Center/Digital Product Library/Ads & Social/Export Center even if source apps expose them under multiple menus.
8. AI Studio gains Product Suggestions and Brand Voice in addition to the platform Copilot/AI Agents architecture.
9. Sales Agents are preserved as a Team/Sales Operations capability with CRM/Commerce assignment and Finance earnings integration.
10. Restore Points and Reset Store Data are explicit Settings capabilities under Backup & Recovery/System.
11. WooCommerce and Elementor are Integrations; Sales Forms are built in Build and feed CRM/Commerce.
12. KIOSK SaaS billing remains separate from merchant finance.

## Pending Placement / terminology verification
- "Athletes" under Course — preserve until confirmed; likely source-label/voice-transcription ambiguity. If Affiliates, use Affiliate Engine + Learning context.
- "Stock Works" in SalesG Finance — preserve until exact behavior is known.
- Any source menu label whose behavior differs from the canonical interpretation remains Pending Placement rather than being discarded.

## Implementation status
This reconciliation updates architecture/requirements only. It does not imply that these capabilities have backend implementation. Voice, WhatsApp provider setup, AI agents, external integrations, restore/reset, agent earnings and other connected capabilities require later backend/service work. Frontend shells/mock workspaces can be implemented before those services.
