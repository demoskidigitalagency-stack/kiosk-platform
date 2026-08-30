# KIOSK Master Module Architecture

KIOSK is an e-commerce operating system for sellers. This document is the working frontend information architecture and module map.

> Current implementation phase: frontend architecture, UI, and mock/local data only. No backend is connected yet.

## Status
- Overview — Structured
- Commerce — Structured
- CRM & Customers — Structured
- Catalog — Structured
- Purchasing — Framework
- Venture — Structured
- Planning & Strategy — Structured
- Build — Framework
- Funnels — Structured
- Marketing & Growth — Structured
- Inbox & Communications — Structured
- Customer Service — Structured
- Team — Structured
- HR — Structured
- Operations — Structured
- Finance & Accounting — Structured
- Reports & Analytics — Structured
- Notifications — Structured
- Automation — Structured
- AI Studio — Structured
- Integrations — Structured
- Settings — Structured; Appearance implemented with local persistence

## 1. Overview
- Dashboard
- Today
- Activity

## 2. Commerce
- Commerce Overview
- Sell: Point of Sale, Orders, Quotes & Contracts
- Revenue: Invoices, Payments, Returns & Refunds
- Conversion: Carts & Checkout, Abandoned Carts, Discounts
- Fulfillment: Order Assignment, Shipping & Delivery
- Store: Storefront

## 3. CRM & Customers
- CRM Overview
- Contacts
- Contact Capture & Enrichment
- Customers
- Leads
- Companies
- Deals & Pipeline
- Activities & Follow-ups
- Meetings
- CRM Intelligence
- Data & Customization

## 4. Catalog
- Catalog Overview
- Products
- Inventory
- Product Data & Imports
- Sales Channels

## 5. Purchasing
- Purchasing Overview
- Suppliers
- Purchase Orders
- Receiving
- Supplier Returns
- Procurement
- Purchasing History

## 6. Venture
- Venture Overview
- Venture Forge
- Discover
- Offer
- Products
- Funnel Generator
- Launch Center
- Ads & Social Content
- Export Center

## 7. Planning & Strategy
- Strategy Overview
- Business Planning
- Market & Competitive Analysis
- Business Model
- Financial Models
- Business-Specific Models
- KPI Dashboard
- Execution Planning

## 8. Build
- Website Builder
- Storefront Builder
- Pages
- Navigation
- Domains
- AI Page Builder
- Landing Page editing infrastructure
- Forms Builder
- Order Forms
- Sales Forms
- Lead Forms
- Sales Page Builder
- Templates
- Store Themes
- Theme Marketplace

## 9. Funnels
- Funnel Overview
- All Funnels
- Funnel Builder
- Funnel Templates
- Steps & Pages
- Landing Pages
- Forms
- Split Tests
- Funnel Analytics
- Leads & Conversions
- Funnel Settings

## 10. Marketing & Growth
- Marketing Overview
- Campaigns
- Broadcasts
- Audience & Targeting
- Templates & Content
- Content Calendar and Content Management
- Promotions
- Loyalty & Rewards
- Recovery
- Experimentation
- Advertising

## 11. Inbox & Communications
- Inbox Overview
- All Conversations
- My Conversations
- Unassigned
- Pinned
- Channels
- Channel Setup
- Conversation Management
- Message Templates
- Communication Analytics

## 12. Customer Service
- Service Overview
- Tickets & Helpdesk
- Complaints
- Knowledge Base
- Customer Portal
- Service Workspace
- Service Reports

## 13. Team
- Team Overview
- People
- Teams & Departments
- Roles & Permissions
- Locations & Assignment
- Performance
- Team Communication

## 14. HR
- HR Overview
- Employee Directory
- Attendance
- Shifts & Scheduling
- Leave & Time Off
- Payroll & Compensation
- Performance Reviews
- Documents & Policies
- Onboarding
- Offboarding

## 15. Operations
- Operations Overview
- Projects
- Tasks
- Calendar
- Meetings
- Approvals
- Operational Workflows / Checklists
- Documents & E-Signature
- Locations / Branch Operations

## 16. Finance & Accounting
- Finance Overview
- Sales Finance
- Expenses
- Accounts & Wallets
- Accounting
- Cash Management
- Taxes
- Financial Reports

## 17. Reports & Analytics
Reports & Analytics is the canonical cross-business intelligence layer. Sync CRM Insights and Kiosk CRM Reports/Analytics consolidate here.
- Reports Overview
- Analytics
- Reports
- Financial & Strategic Intelligence
- Custom Reporting
- Dashboards

## 18. Notifications
Notifications is the canonical internal alert and reminder center.
- Notification Center
- Business Alerts
- System Alerts
- Reminders
- Notification Rules

## 19. Automation
- Automation Overview
- Workflows
- Workflow Builder
- Trigger Library
- Action Library
- Workflow Templates / Library
- Conditions & Branches
- Scheduled Automations
- Run History
- Run Logs
- Errors / Failed Runs
- Automation Analytics

## 20. AI Studio
AI Studio owns reusable AI capabilities and is also the runtime home for installed AI skills.
- AI Overview
- AI Assistant
- Content Generator
- Image Generator
- Reply Suggestions
- Sentiment & Insights
- AI Voice
- Installed AI Skills
- AI Settings
- AI History / Generations

## 21. Integrations
Integrations is the canonical top-level home for connecting KIOSK to external services, apps, platforms and extensions. It consolidates Sync CRM marketplace/connectors/extensions and both Kiosk CRM integration systems.

### Integration Overview
- Connected Apps
- Available Integrations
- Connection Health
- Recent Sync Activity
- Integration Errors

### Apps & Integrations
- All Apps
- Connected Apps
- Available Apps
- Categories
- Installed Apps
- App Configuration

### Marketplace
Marketplace is a section inside Integrations rather than another top-level module.
- Marketplace Home
- Apps
- Plugins
- Extensions
- Templates
- AI Skills
- Categories
- Installed
- Updates

Extension lifecycle: Discover → Install → Authorize → Configure → Enable → Monitor → Update / Disable / Uninstall

The frontend may represent one-click installation now, but real extension installation, permissions and sandboxing require backend/security infrastructure later. Marketplace extensions must eventually use a controlled extension system rather than arbitrary code injection.

### Commerce Connectors
- WooCommerce
- WordPress
- Store Connections
- Product Sync
- Order Sync
- Customer Sync
- Inventory Sync

Commerce/Catalog remain the owners of orders/products/inventory; Integrations manages the external connection and synchronization.

### Marketing & Advertising Connectors
- Meta Suite
- Google Suite
- Other Marketing Platforms
- Advertising Connections
- Conversion / Tracking Connections

Marketing & Growth owns campaigns; Integrations owns credentials/connections/sync health.

### Communication Connectors
- WhatsApp
- Email Providers
- SMS Providers
- Facebook Messenger
- Instagram
- Telegram

Inbox & Communications owns conversations; Integrations owns provider connectivity.

### Business Connectors
- Accounting Providers
- Payment Gateways
- Shipping Providers
- CRM / Data Providers
- Storage
- Productivity
- Third-Party Services

### Webhooks
- Incoming Webhooks
- Outgoing Webhooks
- Webhook Events
- Endpoint Management
- Delivery Logs
- Failed Deliveries
- Retry

### Sync Activity
- Sync History
- Connection Health
- Sync Errors
- Failed Records
- Retry Queue
- Integration Logs

### Marketplace / AI boundary
- Integrations → Marketplace → AI Skills = discover and install AI capabilities.
- AI Studio → Installed AI Skills = use and manage installed AI capabilities.
- AI Studio remains the canonical AI runtime/capability layer.

## 22. Settings
Settings owns workspace configuration, governance, security, preferences, developer controls and KIOSK subscription billing.

### Business & Workspace
- Business Profile
- Workspace
- Locations
- Currency / Locale

### Appearance & Branding
- Appearance
- Branding
- Themes
- Layout

### Notification Preferences
Controls how users receive notifications; the standalone Notifications module owns the actual alert center.

### Integrations Shortcut
Settings may provide an Integrations shortcut/configuration entry that opens the standalone Integrations module. It must not create a second integration system.

### Developer
Developer owns technical workspace/API controls rather than external app discovery.
- Developer Overview
- API Keys
- API Explorer / Playground
- API Documentation
- Webhook Developer Tools
- OAuth Applications
- Access Tokens
- API Usage
- Rate Limits
- Developer Logs

Sync CRM API Explorer and Kiosk CRM API Playground consolidate into one capability named API Explorer. API Keys have one canonical home here. Integrations can link to or select credentials without maintaining a duplicate API-key store.

### Audit & Compliance
- Audit Log
- User Activity
- Login History
- Permission Changes
- Integration Changes
- API Key Activity
- Webhook Changes
- Data Changes
- Administrative Actions
- Security Events

Integrations may show contextual Integration Activity, but the organization-wide permanent audit trail remains here.

### Security
- Security Settings
- 2FA
- Login Policies
- Sessions / Devices
- Authentication Controls

### Preferences
- Personal Preferences
- Language
- Date / Time
- Display Preferences

### System Configuration
- Templates
- Commerce Settings
- Tax / Currency Rules
- Numbering / Document Sequences
- Business Defaults

### Plans & Billing
- Current Plan
- Subscription
- Usage
- Billing History
- KIOSK Invoices
- Payment Method
- Upgrade / Downgrade
- Cancel Subscription

## Canonical ownership rules
- Integrations = external service/app/platform connections and synchronization.
- Integrations → Marketplace = discover/install plugins, extensions, templates and AI skills.
- Settings → Developer = API keys, API Explorer, OAuth/access tokens and technical workspace tooling.
- Settings → Audit & Compliance = permanent organization-wide audit trail.
- AI Studio = use/manage reusable AI capabilities and installed AI skills.
- Settings may link to Integrations but must not duplicate it.
- Reports & Analytics = cross-business intelligence.
- Notifications = internal alerts/reminders.
- Inbox = conversations with people.
- Marketing = campaigns/broadcasts/content/promotions/advertising.
- Automation = triggers/actions/orchestration.
- Planning & Strategy = future plans/projections/roadmaps.
- Finance & Accounting = actual money/accounting.
- Venture = opportunity/offer discovery.
- Operations = human execution.
- CRM = identity/relationship history.
- Commerce = selling transactions.
- Catalog = products/stock truth.
- Purchasing = procurement/receiving.

A capability has one canonical home but may have contextual entry points elsewhere.

## Operating model
Integration: Discover App → Install → Authorize → Configure → Connect → Sync → Monitor
Developer: Create API Key / OAuth App → Test in API Explorer → Integrate → Monitor Usage → Audit
AI Skill: Marketplace → Install AI Skill → AI Studio → Use Skill
Commerce connection: External Store → Integration → Sync → Catalog / Commerce → Reports
Marketing connection: Meta/Google → Integration → Marketing Campaigns → Attribution → Reports
Audit: User/System Action → Audit Event → Settings / Audit & Compliance

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Real marketplace/plugin permission model and extension sandboxing
- Backend integration credential storage and OAuth flows
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Replace temporary DOM navigation bridges with direct React navigation/router
- Pin dependency versions and repository hygiene
