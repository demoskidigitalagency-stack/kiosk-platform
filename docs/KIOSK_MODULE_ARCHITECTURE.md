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
- Team — Structured
- HR — Structured
- Operations — Structured
- Reports & Analytics — Framework
- Automation & AI — Framework
- Integrations — Framework
- Settings — Structured; Appearance implemented with local persistence

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
- All Contacts
- Contact Profile / Contact Center
- New Contact
- Segments
- Smart Lists
- Tags
- Imports
- Duplicate Manager

### Contact Capture & Enrichment
- Sources
- Captured Contacts
- Attribution
- Capture Rules
- Capture History
- Review Queue

Authorized sources can include website forms, landing pages, sales/order forms, storefront/checkout, web chat, WhatsApp, authorized Facebook/Instagram interactions and lead forms, email, CSV, connected apps, manual entry, APIs and webhooks.

### Customers
- Customer List
- Customer Center
- New Customer

### Leads
- Lead List
- New Lead
- Lead Sources
- Lead Qualification

### Companies
- Company List
- New Company
- Company Profile

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

### Sales Channels
- Online Store availability
- POS availability
- Website availability
- Sales / Order Form availability
- Connected Store availability
- Channel status and publishing state

### Catalog boundaries
- Orders, checkout, payments and returns belong to Commerce.
- Storefront transaction operations belong to Commerce; Storefront Builder belongs to Build.
- Business Website and page design belong to Build.
- Suppliers, Purchase Orders and Receiving belong to Purchasing.
- Catalog Inventory owns stock records; Purchasing increases stock through receiving and Commerce decreases stock through sales/returns rules.
- Product promotions and campaign execution belong to Marketing & Growth.

### Product lifecycle
Create / Import → Configure → Price → Stock → Publish to Channels → Sell → Fulfill → Analyze

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
- Open tickets
- Unassigned tickets
- Overdue / SLA-risk cases
- Open complaints
- First-response time
- Resolution time
- Resolution rate
- Customer satisfaction
- Recent escalations

### Tickets & Helpdesk
- All Tickets
- My Tickets
- Assigned Tickets
- Unassigned Tickets
- Open / Pending / Resolved / Closed
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
- Submit Ticket
- Track Ticket
- Submit Complaint
- View Service History
- View Orders / Service Records
- Search Knowledge Base
- Manage Profile / Account

### Service Workspace
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
Inbox & Communications owns the conversation/channel. Customer Service owns the case requiring resolution. CRM owns customer identity. Commerce owns transactional returns/refunds and orders. These records can be surfaced contextually without creating duplicate systems.

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

## 11. Team
Team owns workspace membership, organizational structure, operational assignment and application access. It answers who works in the KIOSK workspace, where they belong and what they can access.

### Team Overview
Command center for active users, invitations, teams, locations, roles, access issues, performance signals and recent team activity.

### People
- All Users / Staff
- Invite User
- User Profile
- Active Users
- Inactive Users
- Pending Invitations

### Teams & Departments
- Teams
- Departments
- Team Members
- Managers
- Team Structure

### Roles & Permissions
- Roles
- Permission Sets
- Role Assignment
- User Access
- Module Access
- Location Access

### Locations & Assignment
- Store / Business Locations
- Staff Assignment
- Delivery Agents
- Location Access
- Assignment History

Business/location configuration remains under Settings; Team owns who is assigned to each location.

### Performance
- Staff Performance
- Sales Performance
- Goals / Targets
- Leaderboard
- Performance History

### Team Communication
- Team Chat
- Announcements
- Internal Updates

### Team boundaries
- Employment lifecycle, attendance, leave, payroll and employee documents belong to HR.
- Meetings and organization-wide Calendar belong canonically to Operations and can surface contextually on Team profiles.
- Approvals belong canonically to Operations; Team and HR can initiate approval requests.
- Audit Log belongs to Settings → Audit & Compliance.
- A Team User can link to an HR Employee record without creating duplicate identities.

### Team access lifecycle
Invite → Activate User → Assign Team / Department → Assign Role → Assign Location → Work → Review Access → Deactivate

## 12. HR
HR owns employee lifecycle and workforce administration. It answers how an employee is hired, scheduled, compensated, reviewed and eventually offboarded.

### HR Overview
- Headcount
- Attendance Today
- Staff on Leave
- Upcoming Shifts
- Pending HR Approvals
- Payroll / Compensation Status
- New Hires
- Upcoming Reviews

### Employee Directory
- All Employees
- Employee Profile
- Employment Status
- Job Title
- Department
- Manager
- Work Location
- Employment History

### Attendance
- Attendance Overview
- Clock In / Out
- Attendance History
- Late / Absent Records
- Time Entries
- Timesheets

### Shifts & Scheduling
- Shift Calendar
- Shift Templates
- Assign Shifts
- Schedule Changes
- Shift History

### Leave & Time Off
- Leave Requests
- Leave Balances
- Leave Calendar
- Time-off Policies
- Approval Status

### Payroll & Compensation
- Payroll Overview
- Compensation
- Commissions
- Bonuses / Adjustments
- Payroll History

### Performance Reviews
- Review Cycles
- Employee Reviews
- Goals
- Manager Feedback
- Review History

### Documents & Policies
- Employee Documents
- Contracts
- HR Policies
- Acknowledgements
- Document History

### Onboarding
- New Hire Checklist
- Account / Role Request
- Documents
- Orientation Tasks
- Equipment / Access

### Offboarding
- Offboarding Checklist
- Access Removal Request
- Asset Return
- Final Documents
- Exit Notes

### HR boundaries
- Team owns workspace users, roles, departments and access permissions.
- Operations owns the canonical approval engine, meetings and organization-wide calendar.
- Finance owns accounting and financial ledger treatment; HR owns employee compensation/payroll workflow.
- Employee documents can surface from Operations → Documents & E-Signature while HR remains the canonical owner of HR-specific records and context.

### Employee lifecycle
Hire → Onboard → Schedule → Attend → Perform → Compensate → Develop → Leave / Change → Offboard

## 13. Operations
Operations owns cross-business work execution: projects, tasks, calendars, meetings, approvals, workflows, operational documents, e-signature and branch-level execution.

### Operations Overview
Command center for active projects, overdue tasks, upcoming meetings, pending approvals, signature requests and cross-business operational activity.

### Projects
- All Projects
- New Project
- Project Workspace
- Project Status
- Milestones
- Project Members
- Project Timeline
- Project Files
- Project Activity

Projects organize related work without creating a second task system.

### Tasks
- All Tasks
- My Tasks
- Assigned Tasks
- Task Board
- Priorities
- Due Dates
- Recurring Tasks
- Completed Tasks
- Task History

Tasks are the canonical cross-business task records. CRM, Customer Service, HR, Purchasing and other modules may create or surface relevant tasks contextually.

### Calendar
- Organization Calendar
- My Calendar
- Team / Shared Calendar
- Events
- Deadlines
- Schedules

### Meetings
- All Meetings
- Schedule Meeting
- Meeting Agenda
- Attendees
- Meeting Notes
- Meeting History

### Approvals
- Approval Inbox
- My Requests
- Pending Approval
- Approved
- Rejected
- Approval Rules
- Approval History

The approval engine is shared across purchasing, HR, finance, operations and other modules without creating separate approval systems.

### Workflows
- Operational Workflows
- Workflow Templates
- Recurring Processes
- Checklists
- Process History

Automation rules and autonomous orchestration remain under Automation & AI; Operations owns the human/business process workspace.

### Documents & E-Signature
Documents & E-Signature is the canonical operational document workspace. Other modules can surface linked files without duplicating storage or signature records.

#### Documents
- All Documents
- Recent
- Shared With Me
- Folders
- Templates
- Uploaded Files
- Generated Documents
- Archived
- Document Activity

#### E-Signature
- Signature Requests
- Awaiting Signature
- Signed
- Declined / Expired
- Signers
- Signature Templates
- Signature History
- Audit Trail

Example cross-module workflow:
Quote / Contract → Generate Document → Send for Signature → Customer / Supplier / Employee Signs → Signed Copy Stored → Audit Trail → Related Record Updated

Commerce can launch signature requests from Quotes & Contracts, CRM can launch them from Deals/Customers, HR can use them for employment documents, and Purchasing can use them for supplier agreements while Operations remains the canonical document/signature system.

### Locations / Branch Operations
- Branch Operational View
- Location Tasks
- Location Calendar
- Local Approvals
- Operational Status

Business location configuration belongs to Settings, Team owns staff/location assignment, Catalog owns warehouse/inventory records, and Operations owns branch-level execution views.

### Operations boundaries
- Announcements belong to Team → Team Communication.
- Employee-specific document context belongs to HR, but the shared document/e-signature infrastructure belongs here.
- Quotes & Contracts belong to Commerce; signed document artifacts can be stored here and linked back to Commerce.
- API keys and audit/security logs belong to Settings.
- Workflow automation rules belong to Automation & AI; Operations owns human-executed workflows and process tracking.

### Project execution lifecycle
Project → Milestone → Task → Assignee → Due Date → Completion → Project Activity

### Document authorization lifecycle
Create / Generate → Review → Send for Signature → Sign / Decline / Expire → Store Signed Record → Audit Trail

## 14. Reports & Analytics
- Sales
- Orders
- Products
- Inventory
- Customers
- Marketing
- Team / Staff
- HR
- Finance
- Fulfillment
- Customer Service
- Projects / Tasks
- Custom Reports

## 15. Automation & AI
- Workflows
- Triggers
- Automation Rules
- AI Assistant
- AI Agents
- Recommendations
- Automation Logs

## 16. Integrations
- Connected Apps
- WooCommerce
- WordPress
- Meta / Google
- Payment Gateways
- Shipping Providers
- API Connections
- Webhooks
- Import / Export Connections

## 17. Settings
Settings owns workspace configuration, governance, personal preferences and security. It does not replace Team for day-to-day user management or Integrations for connected-app operations.

### Business & Workspace
- Business Profile
- Workspace
- Location Configuration
- Currency
- Locale
- Date / Time Defaults

### Appearance & Branding
- Appearance
- Theme
- Color Mode
- Accent Color
- Typography
- Density
- Layout
- Surface Pattern
- Custom Branding
- Logo / Brand Assets

Appearance is already implemented in the frontend with local persistence and remains the canonical visual-system configuration area.

### Notifications
- Notification Preferences
- Email Preferences
- SMS Preferences
- Push / In-app Preferences
- Notification Rules

### Security
- Security Settings
- Two-Factor Authentication (2FA)
- Login Policies
- Sessions / Devices
- Password / Authentication Controls

### Developer
- API Keys
- Webhooks Configuration
- Developer Settings
- API Access Policies

Actual third-party connections remain under Integrations; Settings controls developer credentials and platform-level configuration.

### Audit & Compliance
- Audit Log
- Login History
- Security Events
- Data Activity
- Administrative Changes

### Preferences
- Personal Preferences
- Language
- Date / Time
- Display Preferences

### System Configuration
- Templates
- Commerce Settings
- Tax
- Currency Rules
- Numbering / Document Sequences
- Business Defaults

### Settings boundaries
- Users, teams, departments, roles and permissions belong to Team; Settings may expose administrative shortcuts only.
- Employee records belong to HR.
- Connected apps belong to Integrations; API keys and platform developer settings belong to Settings → Developer.
- Business location configuration belongs here; staff assignment belongs to Team and operational location usage can surface in Operations.
- Audit Log and security events belong here and can be filtered contextually from a User profile.

## Operating model
Customer/revenue flow:
Acquire → CRM → Sell → Pay → Fulfill → Account → Retain

Product/revenue flow:
Create / Import Product → Catalog → Publish to Channel → Commerce → Order → Payment → Fulfillment → Revenue

Supply flow:
Supplier → Purchase → Receive → Catalog Inventory → Product → Storefront/POS → Order

Service flow:
Conversation / Portal Request → Ticket / Complaint → Resolution → Customer Notification → Service History → Analytics

People/access flow:
Invite User → Team / Department → Role & Permissions → Location Assignment → Access Review → Deactivate

Employee flow:
Hire → Onboard → Schedule → Attendance → Performance → Compensation → Offboard

Work execution flow:
Project → Milestone → Task → Assignee → Completion → Activity / Reporting

Document flow:
Create / Generate → Review → Signature Request → Signed Record → Related Business Record → Audit Trail

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
- Replace temporary DOM navigation bridges with direct React navigation/router
