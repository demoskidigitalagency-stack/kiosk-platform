# KIOSK Master Module Architecture

KIOSK is an e-commerce operating system for sellers. This document is the working frontend information architecture and module map.

> Current implementation phase: frontend architecture, UI, and mock/local data only. No backend is connected yet.

## Status

- Overview — Structured
- Commerce — Structured
- CRM & Customers — Structured
- Catalog & Inventory — Framework
- Purchasing — Framework
- Build — Framework
- Marketing & Growth — Framework
- Inbox & Communications — Framework
- Customer Service — Framework
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
- Products, Collections, Price Books, Inventory, and Warehouses belong to Catalog & Inventory.
- Suppliers, Purchase Orders, and Receiving belong to Purchasing.
- Storefront is managed from Commerce; Storefront Builder and visual design belong to Build.
- Order/Sales Forms are designed in Build and can be launched contextually from Commerce.

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

CRM-related tasks can surface here and in Overview / Today while the broader task system remains canonically owned by Operations.

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

Duplicate Manager is surfaced from Contacts because it is primarily a people-data workflow, while merge rules and broader data-quality configuration live in Data & Customization.

### CRM boundaries
- Quotes & Contracts are canonically owned by Commerce → Sell. CRM exposes them contextually from deals, customers and companies.
- Form Builder is canonically owned by Build → Forms. Lead forms can create CRM leads.
- Loyalty & Reward Manager are canonically owned by Marketing & Growth → Loyalty & Rewards. Customer Center can display loyalty status and history.
- General Tasks are canonically owned by Operations. CRM surfaces relationship-specific tasks and follow-ups.
- Organization-wide Calendar remains connected to Operations while CRM provides contextual Meetings.
- Campaign configuration belongs to Marketing & Growth; CRM owns the resulting contact identity, relationship record and attribution history.
- Connected social and messaging sources must use authorized APIs, webhooks or business-accessible data rather than bypassing platform access controls.

### CRM lifecycle
Contact → Lead → Qualify → Deal → Pipeline Stage → Quote → Order → Payment → Customer → Retention

### CRM attribution lifecycle
Source → Campaign → Interaction → Contact → Lead → Deal → Customer → Order → Revenue

## 4. Catalog & Inventory
- Products
- Collections / Categories
- Variants
- Price Books
- Inventory
- Stock Adjustments
- Stock Transfers
- Warehouses
- Physical Inventory
- Low-Stock Alerts

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
- Tickets
- Complaints
- Knowledge Base
- Customer Portal
- Returns Support
- Service History

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

Supply flow:
Supplier → Purchase → Receive → Inventory → Product → Storefront/POS → Order

## Architecture rule
A capability has one canonical home but may have contextual entry points elsewhere. KIOSK should not create duplicate systems simply because a capability participates in several workflows. Any useful unplaced feature discovered during source review must remain recorded until assigned a canonical module.

## Deferred enhancement backlog
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Unified AI Builder
- Reviews & Reputation system
- Advanced auto-order assignment rules
- Backend persistence/auth/data integrations
