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
- Integrations — Framework
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
- Contacts: All Contacts, Contact Center, New Contact, Segments, Smart Lists, Tags, Imports, Duplicate Manager
- Contact Capture & Enrichment: Sources, Captured Contacts, Attribution, Capture Rules, Capture History, Review Queue
- Customers: Customer List, Customer Center, New Customer
- Leads: Lead List, New Lead, Lead Sources, Lead Qualification
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
Planning owns future-facing strategy and models; Finance owns actual financial records.
- Strategy Overview
- Business Planning
- Market & Competitive Analysis
- Business Model
- Financial Models: 5-Year Projection, Forecasts, DCF, Break-even, Scenario Planning, Burn Rate & Runway
- Business-Specific Models: E-commerce, SaaS, Subscription, Retail, Service, Custom
- KPI Dashboard
- Execution Planning: Strategic/Delivery Roadmap, Initiatives, Milestones, Dependencies, Risks, Project Charter

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
- Content: Content Calendar, Social, Email, Campaign, Scheduled Content, Library, Performance
- Promotions: Discounts, Coupons, Promotion Rules
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
- Channels: WhatsApp, Email, SMS, Messenger, Instagram DM, Telegram, Web Chat
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
Finance records what actually happened financially.
- Finance Overview
- Sales Finance: Revenue, Invoices, Receipts, Payments, Refunds, Credit Notes, Payment History
- Expenses
- Accounts & Wallets: Cash, Bank, Mobile Money, Wallets, Balances, Transfers, History
- Accounting: Chart of Accounts, Ledger, Journal Entries, AR/AP, Reconciliation, Opening Balances, Periods
- Cash Management: Cash In/Out, Cash Drawer, Payouts, Daily Close, Opening/Closing Balance, Variance
- Taxes
- Financial Reports

## 17. Reports & Analytics
Reports & Analytics is the canonical cross-business intelligence layer. Sync CRM Insights and Kiosk CRM Reports/Analytics consolidate here.

### Reports Overview
- Executive Summary
- Key KPIs
- Performance Snapshot
- Trends
- Recent Reports
- Saved Reports
- Scheduled Reports

### Analytics
- Sales Analytics
- Commerce Analytics
- Customer Analytics
- CRM Analytics
- Funnel Analytics
- Marketing Analytics
- Campaign Analytics
- Product Analytics
- Inventory Analytics
- Purchasing Analytics
- Finance Analytics
- Customer Service Analytics
- Team / Staff Analytics
- HR Analytics
- Operations / Project Analytics
- Communication Analytics
- Automation Analytics

### Reports
- Sales Reports
- Order Reports
- Product Reports
- Inventory Reports
- Customer Reports
- CRM / Pipeline Reports
- Marketing Reports
- Funnel Reports
- Finance Reports
- Expense Reports
- Purchasing Reports
- Fulfillment Reports
- Customer Service Reports
- Team Reports
- HR Reports
- Project / Task Reports
- Automation Reports

### Financial & Strategic Intelligence
- Planning vs Actual
- Budget vs Actual
- Forecast vs Actual
- Revenue Trends
- Profitability
- Cash Flow Trends
- KPI Performance
- Business Health

### Custom Reporting
- Report Builder
- Custom Reports
- Saved Reports
- Report Templates
- Filters
- Date Ranges
- Grouping
- Comparisons
- Export

### Dashboards
- Executive Dashboard
- Sales Dashboard
- Marketing Dashboard
- Finance Dashboard
- Operations Dashboard
- Custom Dashboards

Individual modules may show contextual analytics, but cross-business reporting and BI remain canonical here.

## 18. Notifications
Notifications is the canonical internal alert and reminder center for KIOSK users.

### Notification Center
- All Notifications
- Unread
- Read
- Mentions
- Assigned to Me
- Important
- Archived

### Business Alerts
- New Orders
- Payment Alerts
- Failed Payments
- Refunds
- Low Stock / Out of Stock
- Purchase / Receiving Alerts
- New Leads
- Deal Updates
- Customer Service Escalations
- Overdue Tasks
- Approval Requests
- Signature Requests

### System Alerts
- Integration Issues
- Automation Failures
- Security Alerts
- Login Alerts
- API / Webhook Issues
- Import / Export Issues
- System Updates

### Reminders
- Follow-up Reminders
- Task Reminders
- Meeting Reminders
- Invoice Reminders
- Payment Reminders
- Subscription / Renewal Reminders
- Custom Reminders

### Notification Rules
- Event
- Condition
- Recipient
- Channel
- Timing
- Priority

Example: Inventory < threshold → Notify Inventory Manager → In-app + Email.
Example: High-value order → Notify Owner → In-app + configured channel.
Example: Invoice overdue → Notify Finance + optionally create Operations task through Automation.

Notifications are internal alerts. Inbox owns conversations with people; Marketing owns campaigns/broadcasts; Automation owns event-driven orchestration. Settings retains each user's Notification Preferences and delivery preferences.

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
- AI Overview
- AI Assistant
- Content Generator
- Image Generator
- Reply Suggestions
- Sentiment & Insights
- AI Voice
- AI Settings
- AI History / Generations

## 21. Integrations
- Connected Apps
- WooCommerce
- WordPress
- Meta / Google
- Payment Gateways
- Shipping Providers
- API Connections
- Webhooks
- Import / Export Connections

## 22. Settings
Settings owns configuration, governance, security, preferences and KIOSK subscription billing.
- Business & Workspace
- Appearance & Branding
- Notification Preferences: In-app, Email, SMS, WhatsApp/other configured channels, priority and delivery preferences
- Security
- Developer
- Audit & Compliance
- Preferences
- System Configuration
- Plans & Billing

Notification Preferences controls how a user receives alerts; the Notifications module contains the actual alerts, reminders and notification rules.

## Canonical ownership rules
- Reports & Analytics = cross-business intelligence, reports, dashboards and plan-vs-actual analysis.
- Notifications = internal alerts/reminders for KIOSK users.
- Settings → Notification Preferences = user delivery preferences, not the notification center.
- Inbox = conversations with people.
- Marketing = campaigns/broadcasts/content/promotions/advertising.
- Automation = triggers/actions/orchestration.
- Planning & Strategy = future plans/projections/roadmaps.
- Finance & Accounting = actual money/accounting/reporting source data.
- Venture = opportunity/offer discovery.
- Operations = human execution.
- CRM = identity/relationship history.
- Commerce = selling transaction.
- Catalog = products/stock truth.
- Purchasing = procurement/receiving.
- AI Studio = reusable AI capabilities.

A capability has one canonical home but may have contextual entry points elsewhere.

## Operating model
Insight: Operational Data → Module Analytics → Reports & Analytics → Dashboard / Report → Decision
Notification: Business/System Event → Rule/Automation → Notification → Notification Center → User
Preference: User → Settings → Notification Preferences → Delivery Channels
Strategy-to-results: Venture → Planning & Strategy → Operations / Build / Funnels / Marketing → CRM → Commerce → Finance → Reports
Planning-to-execution: Business Plan → Financial Model → Roadmap → Project Charter → Operations Project → Actual Results → Plan vs Actual
Finance: Transaction → Invoice/Expense → Payment → Account/Wallet → Accounting → Reconciliation → Financial Report

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Replace temporary DOM navigation bridges with direct React navigation/router
- Pin dependency versions and repository hygiene
