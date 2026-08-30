# KIOSK Master Module Architecture

KIOSK is an e-commerce operating system for sellers. This document is the working frontend information architecture and module map.

> Current implementation phase: frontend architecture, UI, and mock/local data only. No backend is connected yet.

## Status

- Overview — Structured
- Commerce — Structured
- CRM & Customers — Structured
- Catalog — Structured
- Purchasing — Framework
- Build — Framework
- Marketing & Growth — Framework
- Inbox & Communications — Framework
- Customer Service — Structured
- Finance & Accounting — Framework
- Team & HR — Framework
- Operations — Framework
- Reports & Analytics — Framework
- Automation & AI — Framework
- Integrations — Framework
- Settings — Framework; Appearance started

## 1. Overview
- Dashboard
- Today
- Activity

## 2. Commerce
Commerce owns the selling transaction and post-sale operational flow.

### Commerce Overview
Seller command center for sales, orders, conversion, abandoned carts, average order value, fulfillment, returns, and top-product signals.

### Sell
- Point of Sale
- Orders
- Quotes & Contracts

### Revenue
- Invoices
- Payments
- Returns & Refunds

### Conversion
- Carts & Checkout
- Abandoned Carts
- Discounts

### Fulfillment
- Order Assignment
- Shipping & Delivery

### Store
- Storefront

### Commerce boundaries
- Deals & Pipeline belong to CRM; a won deal can convert into a Quote or Order.
- Products, Collections, Variants, Price Books and Inventory belong to Catalog.
- Suppliers, Purchase Orders and Receiving belong to Purchasing.
- Storefront operations are managed from Commerce; Storefront Builder and visual design belong to Build.
- Order/Sales Forms are designed in Build and can be launched contextually from Commerce.
- Commerce consumes Catalog products rather than maintaining a second product system.

## 3. CRM & Customers

CRM owns people and organization records, prospects, customer relationships, opportunities, attribution and sales relationship activity. A person should not be duplicated simply because they progress from contact to lead to customer.

### CRM Overview
Command center for contacts, lead volume, customer growth, pipeline value, follow-ups, conversion, forecast, source attribution and recent CRM activity.

### Contacts
Contacts are the master people directory and identity layer for CRM.

- All Contacts
- Contact Profile / Contact Center
- New Contact
- Segments
- Smart Lists
- Tags
- Imports
- Duplicate Manager

A Contact can later be classified or converted into a Lead or Customer and can be associated with one or more Companies, Deals, Campaigns and Conversations without creating unnecessary duplicate person records.

### Contact Capture & Enrichment
Contact Capture & Enrichment is the CRM ingestion and attribution workspace. It is designed for first-party data and authorized connected sources.

#### Sources
- Website forms
- Landing pages
- Sales / order forms
- Storefront and checkout
- Web chat
- WhatsApp conversations
- Authorized Facebook / Instagram conversations
- Authorized Facebook / Instagram lead forms
- Authorized page/post interactions where connected platform APIs expose the data
- Email
- CSV imports
- Connected third-party applications
- Manual entry
- API / Webhook

#### Capture workspace
- Sources
- Captured Contacts
- Attribution
- Capture Rules
- Capture History
- Review Queue

#### Attribution fields
Captured interactions can retain:
- Source
- Channel
- Campaign
- Ad Set
- Ad / Creative
- Post
- Form
- Conversation
- Landing Page
- First Interaction
- Last Interaction
- Interaction Type
- Contact Owner
- Lead / Customer Status

Campaign attribution should support the lifecycle:
Campaign → Contacts → Leads → Deals → Orders → Revenue

Marketing can expose Campaign Contacts contextually, but CRM remains the canonical owner of contact identity and relationship records.

### Customers
- Customer List
- Customer Center
- New Customer

Customer Center is the 360-degree customer workspace. Contextual views can include Overview, Orders, Payments, Invoices, Conversations, Activities, Tasks, Meetings, Deals, Loyalty, Notes and Files.

### Leads
- Lead List
- New Lead
- Lead Sources
- Lead Qualification

### Companies
- Company List
- New Company
- Company Profile

Company Profile can surface Contacts, Deals, Orders, Quotes, Activities, Meetings, Notes and Files contextually.

### Deals & Pipeline
- Deals
- Pipeline Board
- Deal Stages

### Activities & Follow-ups
- Tasks
- Follow-ups
- Calls
- Notes
- Reminders

### Meetings
- Meetings
- Schedule Meeting
- Meeting History

### CRM Intelligence
- Forecast
- Pipeline Forecast
- Lead & Deal Insights
- Source & Campaign Attribution
- Conversion Insights

### Data & Customization
- Custom Fields
- Custom Objects
- Merge Records
- Data Cleanup Rules
- Import Mapping

### CRM lifecycle
Contact → Lead → Qualify → Deal → Pipeline Stage → Quote → Order → Payment → Customer → Retention

### CRM attribution lifecycle
Source → Campaign → Interaction → Contact → Lead → Deal → Customer → Order → Revenue

## 4. Catalog

Catalog is the canonical home for everything the business can sell and the product data required by every sales channel. Commerce, POS, Storefront, Build and Marketing reference Catalog products rather than maintaining duplicate product records.

### Catalog Overview
Catalog command center for:
- Total products
- Active / inactive products
- Low-stock and out-of-stock items
- Inventory value
- Recently added products
- Best sellers
- Products requiring attention
- Channel availability

### Products
- All Products
- New Product
- Physical Products
- Digital Products
- Services
- Product Bundles
- Variants & Options
- Collections & Categories
- Price Books

Product records can contain identity, SKU, barcode, pricing, cost, tax class, media, description, variants, inventory rules, sales-channel availability and fulfillment metadata.

### Inventory
- Inventory Overview
- Stock Levels
- Stock Adjustments
- Stock Transfers
- Physical Inventory
- Low-Stock Alerts
- Reorder Signals
- Inventory History
- Warehouses

### Product Data & Imports
- Bulk Import
- CSV Import
- CSV Export
- Dropship Import
- Import Mapping
- Import History
- Barcode Tools
- Product Data Cleanup
- Backup / Export Tools

Dropship Import is an ingestion workflow. It does not create a separate dropshipping product database; imported products become normal Catalog records with supplier/source metadata.

### Sales Channels
Sales Channels controls where a Catalog product is available without duplicating the owning system.

- Online Store availability
- POS availability
- Website availability
- Sales / Order Form availability
- Connected Store availability
- Channel status and publishing state

Examples:
Product → enable on Storefront
Product → enable in POS
Product → include on Website
Product → include in Sales Form

The actual Storefront remains under Commerce and the visual Website / Storefront / Form builders remain under Build.

### Catalog boundaries
- Orders, checkout, payments and returns belong to Commerce.
- Storefront transaction operations belong to Commerce; Storefront Builder belongs to Build.
- Business Website and page design belong to Build.
- Suppliers, Purchase Orders and Receiving belong to Purchasing.
- Catalog Inventory owns stock records; Purchasing increases stock through receiving and Commerce decreases stock through sales/returns rules.
- Product promotions and campaign execution belong to Marketing & Growth.
- Product sales and inventory analytics can surface in Reports & Analytics.

### Product lifecycle
Create / Import → Configure → Price → Stock → Publish to Channels → Sell → Fulfill → Analyze

### Inventory movement lifecycle
Supplier / Adjustment / Transfer / Return → Inventory Ledger → Available Stock → Sale / Fulfillment → Updated Stock

## 5. Purchasing
- Suppliers
- Purchase Orders
- Receiving
- Supplier Returns
- Procurement History

## 6. Build
- AI Builder
- Website Builder
- Pages
- Navigation
- Domains
- AI Page Builder
- Landing Page Builder
- Landing Library
- Templates
- Order Forms
- Sales Forms
- Lead Forms
- Storefront Builder
- Store Themes
- Theme Marketplace

## 7. Marketing & Growth
- Campaigns
- Email
- SMS
- WhatsApp
- Promotions
- Coupons
- Loyalty & Rewards
- Reviews & Reputation
- Recovery Campaigns
- A/B Tests

## 8. Inbox & Communications
- Unified Inbox
- WhatsApp
- Email
- SMS
- Instagram / Facebook
- Web Chat
- Internal Notes
- Assigned Conversations

## 9. Customer Service

Customer Service is the canonical home for support operations. It consolidates Helpdesk, Tickets, Knowledge Base, Customer Portal, Customer Service and Complaints into one service system.

### Service Overview
Command center for:
- Open tickets
- Unassigned tickets
- Overdue / SLA-risk cases
- Open complaints
- Average first-response time
- Average resolution time
- Resolution rate
- Customer satisfaction
- Recent escalations

### Tickets & Helpdesk
- All Tickets
- My Tickets
- Assigned Tickets
- Unassigned Tickets
- Open
- Pending
- Resolved
- Closed
- Priority & Categories
- Assignment
- SLA & Escalation

### Complaints
- All Complaints
- New Complaint
- Investigation Queue
- Escalated Complaints
- Resolved Complaints
- Complaint Categories
- Complaint History

### Knowledge Base
- All Articles
- Categories
- Drafts
- Published Articles
- FAQs
- Internal Articles
- Customer-facing Articles

### Customer Portal
Customer-facing self-service area for:
- Submit Ticket
- Track Ticket
- Submit Complaint
- View Service History
- View Orders / Service Records
- Search Knowledge Base
- Manage Profile / Account

### Service Workspace
Unified agent workspace that can surface the same underlying records contextually:
- Customer Profile
- Conversation
- Ticket / Complaint
- Orders
- Payments
- Notes
- Activities
- Files
- Resolution History

### Service Reports
- Ticket Volume
- First-response Time
- Resolution Time
- SLA Performance
- Agent Performance
- Complaint Trends
- Customer Satisfaction
- Escalation Trends

### Customer Service boundaries
- Inbox & Communications owns channels and conversations such as WhatsApp, Email, SMS, Facebook / Instagram and Web Chat.
- Customer Service owns the case requiring resolution: Ticket, Complaint, escalation, SLA and resolution workflow.
- A conversation can create or link to a Ticket / Complaint without creating a duplicate conversation system.
- Customer Service may surface Orders, Payments, Returns and Customer records contextually, while those remain canonically owned by Commerce, Finance and CRM.
- Returns Support handles the service case around a return; the financial / transaction return remains under Commerce → Returns & Refunds.
- Knowledge Base can be exposed through Customer Portal and contextual agent assistance without creating separate article databases.

### Service workflow
Incoming Conversation / Portal Request → Create or Link Ticket → Assign → Investigate → Escalate if Needed → Resolve → Notify Customer → Close → Report

### Complaint workflow
Complaint Received → Customer / Order Context → Investigation → Resolution / Escalation → Customer Notification → Close → History / Analytics

## 10. Finance & Accounting
- Accounting
- Revenue
- Expenses
- Cash Flow
- Accounts
- Daily Close
- Taxes
- Financial Statements
- Reconciliation

## 11. Team & HR
- Employees
- Roles & Permissions
- Attendance
- Clock In / Out
- Shifts
- Leave
- Performance
- Commissions

## 12. Operations
- Tasks
- Calendar
- Meetings
- Approvals
- Workflows
- Locations / Branches
- Announcements
- Documents

## 13. Reports & Analytics
- Sales
- Orders
- Products
- Inventory
- Customers
- Marketing
- Staff
- Finance
- Fulfillment
- Customer Service
- Custom Reports

## 14. Automation & AI
- Workflows
- Triggers
- Automation Rules
- AI Assistant
- AI Agents
- Recommendations
- Automation Logs

## 15. Integrations
- Connected Apps
- WooCommerce
- WordPress
- Meta / Google
- Payment Gateways
- Shipping Providers
- API
- Webhooks
- Import / Export

## 16. Settings
- Business
- Locations
- Users
- Appearance
- Branding
- Notifications
- Templates
- Commerce Settings
- Tax
- Currency
- Security

## Operating model
Customer/revenue flow:
Acquire → CRM → Sell → Pay → Fulfill → Account → Retain

Product/revenue flow:
Create / Import Product → Catalog → Publish to Channel → Commerce → Order → Payment → Fulfillment → Revenue

Supply flow:
Supplier → Purchase → Receive → Catalog Inventory → Product → Storefront/POS → Order

Service flow:
Conversation / Portal Request → Ticket / Complaint → Resolution → Customer Notification → Service History → Analytics

## Architecture rule
A capability has one canonical home but may have contextual entry points elsewhere. KIOSK should not create duplicate systems simply because a capability participates in several workflows. Any useful unplaced feature discovered during source review must remain recorded until assigned a canonical module.

## Deferred enhancement backlog
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Venture / Venture Forge module structure
- Unified AI Builder
- Reviews & Reputation system
- Advanced auto-order assignment rules
- Backend persistence/auth/data integrations
