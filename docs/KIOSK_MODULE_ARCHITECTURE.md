# KIOSK Master Module Architecture

KIOSK is an e-commerce operating system for sellers. This document is the working frontend information architecture and module map.

> Current implementation phase: frontend architecture, UI, and mock/local data only. No backend is connected yet.

## Status

- Overview — Structured
- Commerce — Structured
- CRM & Customers — Framework
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

### Today workspace

Today is the default operational workspace and can surface Orders, Follow-ups, Tasks, Calendar events, and Reminders. Date controls include Yesterday, Today, Tomorrow, Last 7 Days, Next 7 Days, Custom Date, and previous/next day navigation.

## 2. Commerce

Commerce is one of the deepest KIOSK modules. It owns the selling transaction and post-sale operational flow, while catalog, inventory, purchasing, CRM, builders, marketing, and accounting remain separate connected domains.

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
- Reviews are contextual to products/orders/customers and can later be managed through Marketing & Growth as Reviews & Reputation.
- Auto Order Assignment belongs under Fulfillment / Assignment Rules and can later connect to Automation.

## 3. CRM & Customers

- Customers
- Leads
- Companies
- Deals & Pipeline
- Activities
- Follow-ups
- Segments
- Customer Timeline

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

### AI Builder

Unified creation entry point for websites, storefronts, landing pages, sales pages, and forms.

### Website

- Website Builder
- Pages
- Navigation
- Domains

### Landing Pages

- AI Page Builder
- Landing Page Builder
- Landing Library
- Templates

### Forms

- Order Forms
- Sales Forms
- Lead Forms

### Store Design

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

A capability has one canonical home but may have contextual entry points elsewhere. KIOSK should not create duplicate systems simply because a capability participates in several workflows.

Examples:

- Products live in Catalog & Inventory but are selectable from POS.
- Payments are operationally visible in Commerce while reconciliation/accounting live in Finance.
- Storefront operations live in Commerce while storefront design lives in Build.
- Deals live in CRM and can convert to Commerce transactions.
- Discounts are commerce capabilities and can be activated from Marketing campaigns.

## Deferred enhancement backlog

Keep these suggestions for later implementation after the core framework is established:

- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Unified AI Builder
- Reviews & Reputation system
- Advanced auto-order assignment rules
- Backend persistence/auth/data integrations
