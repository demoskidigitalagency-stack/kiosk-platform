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
- Reports & Analytics — Framework
- Automation — Structured
- AI Studio — Structured
- Integrations — Framework
- Settings — Structured; Appearance implemented with local persistence

## 1. Overview
- Dashboard
- Today
- Activity

## 2. Commerce
Commerce owns selling transactions and post-sale flow.
- Commerce Overview
- Sell: Point of Sale, Orders, Quotes & Contracts
- Revenue: Invoices, Payments, Returns & Refunds
- Conversion: Carts & Checkout, Abandoned Carts, Discounts
- Fulfillment: Order Assignment, Shipping & Delivery
- Store: Storefront

## 3. CRM & Customers
CRM owns contact identity, prospects, customers, companies, opportunities, attribution and relationship activity.
- CRM Overview
- Contacts: All Contacts, Contact Center, New Contact, Segments, Smart Lists, Tags, Imports, Duplicate Manager
- Contact Capture & Enrichment: Sources, Captured Contacts, Attribution, Capture Rules, Capture History, Review Queue
- Customers: Customer List, Customer Center, New Customer
- Leads: Lead List, New Lead, Lead Sources, Lead Qualification
- Companies: Company List, New Company, Company Profile
- Deals & Pipeline: Deals, Pipeline Board, Deal Stages
- Activities & Follow-ups: Tasks, Follow-ups, Calls, Notes, Reminders
- Meetings: Meetings, Schedule Meeting, Meeting History
- CRM Intelligence: Forecast, Pipeline Forecast, Lead & Deal Insights, Source & Campaign Attribution, Conversion Insights
- Data & Customization: Custom Fields, Custom Objects, Merge Records, Data Cleanup Rules, Import Mapping

## 4. Catalog
Catalog is the canonical sellable-product and stock system.
- Catalog Overview
- Products: All Products, New Product, Physical, Digital, Services, Bundles, Variants & Options, Collections & Categories, Price Books
- Inventory: Overview, Stock Levels, Adjustments, Transfers, Physical Inventory, Low-Stock Alerts, Reorder Signals, History, Warehouses
- Product Data & Imports: Bulk/CSV Import, Export, Dropship Import, Mapping, History, Barcode Tools, Cleanup, Backup/Export
- Sales Channels: Online Store, POS, Website, Sales/Order Forms, Connected Stores

## 5. Purchasing
- Purchasing Overview
- Suppliers
- Purchase Orders
- Receiving
- Supplier Returns
- Procurement
- Purchasing History

Supply flow: Low Stock → Reorder Suggestion → Purchase Request → Purchase Order → Supplier → Receive → Inventory

## 6. Venture
Venture owns business/product discovery, offer creation and launch preparation.
- Venture Overview
- Venture Forge
- Discover: Niche Finder, Market Research, Competitor Research, Opportunity Finder
- Offer: Offer Builder, Customer Persona, Value Proposition, Pricing Strategy, Offer Stack
- Products: Product Ideas, Digital Product Generator, Digital Product Library
- Funnel Generator
- Launch Center
- Ads & Social Content
- Export Center

Venture can hand selected opportunities to Planning & Strategy for formal business planning and modelling.

## 7. Planning & Strategy
Planning & Strategy owns forward-looking business planning, strategic analysis, financial modelling and execution roadmaps. Finance & Accounting remains the source of actual financial performance.

### Strategy Overview
- Active Plans
- Strategic Goals
- KPIs
- Milestones
- Risks
- Progress
- Upcoming Strategic Activities

### Business Planning
- Business Plan
- Executive Summary
- Company Overview
- Products & Services
- Target Market
- Business Objectives
- Financial Plan
- Business Plan Templates

### Market & Competitive Analysis
- Market Analysis
- Competitor Analysis
- SWOT Analysis
- Gap Analysis
- Market Opportunity
- Customer Analysis

Venture may generate research or an opportunity; Planning & Strategy formalizes the selected direction without duplicating Venture discovery tools.

### Business Model
- Business Model Canvas
- Value Proposition
- Customer Segments
- Revenue Streams
- Cost Structure
- Channels
- Key Activities
- Key Resources
- Key Partners

### Financial Models
- Financial Model Overview
- 5-Year Projection
- Revenue Forecast
- Expense Forecast
- Cash Flow Projection
- Profit Projection
- Break-even Analysis
- Discounted Cash Flow (DCF)
- Scenario Planning
- Burn Rate & Runway

### Business-Specific Models
- E-commerce Model
- SaaS Model
- Subscription Model
- Retail Model
- Service Business Model
- Custom Model

### KPI Dashboard
KPIs adapt to the business model rather than forcing irrelevant metrics on every seller.
- Revenue Growth
- Gross Margin
- Net Margin
- Customer Acquisition Cost (CAC)
- Lifetime Value (LTV)
- Average Order Value (AOV)
- Conversion Rate
- Churn
- Monthly / Annual Recurring Revenue (MRR / ARR)
- Burn Rate
- Runway

### Execution Planning
- Strategic Roadmap
- Delivery Roadmap
- Goals / Objectives
- Initiatives
- Milestones
- Dependencies
- Risks
- Project Charter

Project Charter defines why and what should be executed; an approved charter can create/link to Operations → Projects for execution.

### Planning boundaries
- Actual transactions, balances and accounting records belong to Finance & Accounting.
- Venture discovers/generates opportunities; Planning formalizes selected opportunities.
- Projects and tasks are executed in Operations.
- Content Calendar belongs to Marketing & Growth, not general strategy planning.

Planning lifecycle: Opportunity → Business Plan → Market Analysis → Business Model → Financial Model → Roadmap → Project Charter → Operations Project → Actual Results

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
Marketing owns acquisition, campaigns, broadcasts, promotions, retention, advertising and content execution.
- Marketing Overview
- Campaigns
- Broadcasts: Email, SMS, WhatsApp, Telegram, Multi-channel
- Audience & Targeting
- Templates & Content
- Content: Content Calendar, Social Content, Email Content, Campaign Content, Scheduled Content, Content Library, Content Performance
- Promotions: Discounts, Coupons, Promotion Rules
- Loyalty & Rewards
- Recovery: Abandoned Carts, Recovery Campaigns, Win-back Campaigns
- Experimentation: A/B Tests, Campaign Tests, Creative Tests
- Advertising: Ad Campaigns, Ad Creative, Ad Research / Competitor Research, Meta Ads, Google Ads, Campaign Performance

Gift Cards remain optional/regional rather than a primary feature.

## 11. Inbox & Communications
- Inbox Overview
- All Conversations
- My Conversations
- Unassigned
- Pinned
- Channels: WhatsApp, Email, SMS, Facebook Messenger, Instagram DM, Telegram, Web Chat
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
- Team Communication: Team Chat, Announcements, Internal Updates

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
Operations owns cross-business human work execution.
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
Finance & Accounting owns actual business money, accounting records, cash movement and financial reporting. It records what actually happened; Planning & Strategy models what is expected to happen.

### Finance Overview
- Revenue
- Expenses
- Profit / Net Income
- Cash Position
- Outstanding Invoices
- Payments Received
- Receivables / Payables
- Recent Transactions

### Sales Finance
- Revenue
- Invoices
- Receipts
- Payments
- Refunds
- Credit Notes
- Payment History

Commerce may create or surface invoices/payments operationally, but Finance & Accounting is the canonical financial record and reporting layer.

### Expenses
- All Expenses
- New Expense
- Expense Categories
- Recurring Expenses
- Expense Attachments / Receipts
- Expense History

### Accounts & Wallets
Designed for flexible payment environments including African markets.
- Cash Accounts
- Bank Accounts
- Mobile Money
- Wallets
- Account Balances
- Transfers
- Transaction History

### Accounting
- Chart of Accounts
- General Ledger
- Journal Entries
- Accounts Receivable
- Accounts Payable
- Reconciliation
- Opening Balances
- Accounting Periods

### Cash Management
- Cash In
- Cash Out
- Cash Drawer
- Payouts
- Daily Close
- Opening / Closing Balance
- Cash Variance

### Taxes
- Tax Rates
- Tax Rules
- Tax Summary
- Tax Reports

### Financial Reports
- Profit & Loss
- Balance Sheet
- Cash Flow
- Revenue Report
- Expense Report
- Payment Report
- Receivables
- Payables
- Daily Sales / Close Report

Finance flow: Order → Invoice → Payment → Receipt → Account / Wallet → Reconciliation → Accounting → Financial Report
Expense flow: Expense → Payment → Account / Wallet → Accounting Entry → Financial Report

## 17. Reports & Analytics
- Sales
- Orders
- Products
- Inventory
- Customers
- Marketing
- Funnels
- Communications
- Team / Staff
- HR
- Finance
- Planning vs Actual
- Fulfillment
- Customer Service
- Projects / Tasks
- Automation
- Custom Reports

## 18. Automation
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

## 19. AI Studio
- AI Overview
- AI Assistant
- Content Generator
- Image Generator
- Reply Suggestions
- Sentiment & Insights
- AI Voice
- AI Settings
- AI History / Generations

## 20. Integrations
- Connected Apps
- WooCommerce
- WordPress
- Meta / Google
- Payment Gateways
- Shipping Providers
- API Connections
- Webhooks
- Import / Export Connections

## 21. Settings
Settings owns workspace configuration, governance, preferences, security and KIOSK account billing.
- Business & Workspace: Business Profile, Workspace, Location Configuration, Currency, Locale, Date/Time Defaults
- Appearance & Branding: Appearance, Theme, Color Mode, Accent, Typography, Density, Layout, Surface Pattern, Custom Branding, Logo/Assets
- Notifications
- Security: 2FA, Login Policies, Sessions/Devices, Authentication Controls
- Developer: API Keys, Webhook Configuration, Developer Settings, API Access Policies
- Audit & Compliance
- Preferences
- System Configuration
- Plans & Billing: Current Plan, Subscription, Usage, Billing History, KIOSK Invoices, Payment Method, Upgrade/Downgrade, Cancel Subscription

Plans & Billing represents what the KIOSK customer pays KIOSK for the software. It must remain separate from the customer's own Finance & Accounting records.

Appearance is already implemented in the frontend with local persistence and remains the canonical visual-system configuration area.

## Canonical ownership rules
- Planning & Strategy = future plans, projections, business models and strategic roadmaps.
- Finance & Accounting = actual money, balances, accounting and financial reporting.
- Venture = opportunity and offer discovery/generation.
- Operations = execution through projects/tasks/approvals/documents.
- Marketing = campaigns, broadcasts, content calendar, promotions and advertising.
- Inbox = conversations/channels.
- Funnels = conversion journeys.
- Automation = triggers/actions/orchestration.
- AI Studio = reusable AI capabilities.
- CRM = contact/customer identity and relationship history.
- Commerce = selling transaction.
- Catalog = products and stock truth.
- Purchasing = procurement and receiving.
- Settings = configuration, governance, security and KIOSK subscription billing.

A capability has one canonical home but may have contextual entry points elsewhere. Do not create duplicate systems merely because a capability participates in several workflows.

## Operating model
Strategy-to-results: Venture → Planning & Strategy → Operations / Build / Funnels / Marketing → CRM → Commerce → Finance → Reports
Planning-to-execution: Business Plan → Financial Model → Roadmap → Project Charter → Operations Project → Actual Results → Plan vs Actual
Finance: Transaction → Invoice/Expense → Payment → Account/Wallet → Accounting → Reconciliation → Financial Report
Customer/revenue: Acquire → CRM → Sell → Pay → Fulfill → Account → Retain
Product/revenue: Venture/Create → Catalog → Publish → Commerce → Order → Payment → Fulfillment → Revenue

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Replace temporary DOM navigation bridges with direct React navigation/router
- Pin dependency versions and repository hygiene
