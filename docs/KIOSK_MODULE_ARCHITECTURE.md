# KIOSK Master Module Architecture

KIOSK is an e-commerce operating system for sellers. This document is the working frontend information architecture and module map.

> Current implementation phase: frontend architecture, UI, and mock/local data only. No backend is connected yet.

## Status
1. Overview — Structured
2. Commerce — Structured
3. CRM & Customers — Structured
4. Catalog — Structured
5. Purchasing — Framework
6. Venture — Structured
7. Planning & Strategy — Structured
8. Build — Framework
9. Funnels — Structured
10. Marketing & Growth — Structured
11. Inbox & Communications — Structured
12. Customer Service — Structured
13. Team — Structured
14. HR — Structured
15. Operations — Structured
16. Finance & Accounting — Structured
17. Reports & Analytics — Structured
18. Notifications — Structured
19. Automation — Structured
20. AI Studio — Structured
21. Integrations — Structured
22. Learning & Academy — Structured
23. Settings — Structured; Appearance implemented with local persistence

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
- Reports Overview
- Analytics
- Reports
- Financial & Strategic Intelligence
- Custom Reporting
- Dashboards

## 18. Notifications
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
- Integration Overview
- Apps & Integrations
- Marketplace: Apps, Plugins, Extensions, Templates, AI Skills
- Commerce Connectors
- Marketing & Advertising Connectors
- Communication Connectors
- Business Connectors
- Webhooks
- Sync Activity

Integrations owns external connectivity. Settings → Developer owns API keys/API Explorer. Settings → Audit & Compliance owns the permanent audit trail.

## 22. Learning & Academy
Learning & Academy consolidates Sync CRM Academy, Kiosk CRM 2 Learning/Course/My Learning, and Kiosk CRM 1 Courses/Students/Certificates/Affiliates/Course Analytics into one learning-management capability.

### Learning Overview
- Academy Dashboard
- Active Courses
- Total Students
- Enrollments
- Completion Rate
- Certificates Issued
- Course Revenue
- Recent Learning Activity

### Academy
- Academy Home
- Course Catalog
- Categories
- Featured Courses
- Search
- Instructor Profiles
- Student Portal
- My Learning
- Certificates

### Courses
- All Courses
- New Course
- Draft Courses
- Published Courses
- Archived Courses
- Course Categories
- Course Bundles
- Course Pricing
- Course Settings

### Course Builder
- Curriculum
- Modules
- Lessons
- Video Lessons
- Text Lessons
- Downloads / Resources
- Quizzes
- Assignments
- Drip Content
- Course Prerequisites
- Completion Rules

### Students
- All Students
- Student Profiles
- Enrollments
- Progress
- Completed Courses
- Incomplete Courses
- Student Activity
- Student Notes
- Cohorts / Groups

Identity flow: CRM Contact → Student Profile → Enrollment → Course Progress

### My Learning
- My Courses
- Continue Learning
- Completed Courses
- Saved Courses
- Learning Progress
- My Certificates
- Learning History

### Certificates
- Certificate Templates
- Issued Certificates
- Pending Certificates
- Certificate Verification
- Revoke Certificate
- Certificate History

### Affiliates
- Affiliates
- Affiliate Applications
- Referral Links
- Course Commissions
- Referral Sales
- Payouts
- Affiliate Performance

### Learning Analytics
- Course Performance
- Enrollment Trends
- Completion Rate
- Drop-off
- Student Engagement
- Quiz / Assignment Performance
- Course Revenue
- Certificate Issuance
- Affiliate Performance

## 23. Settings
Settings is the canonical configuration layer for the KIOSK workspace. It consolidates Sync CRM Store Information / Channel / WordPress / Template / Brand, Kiosk CRM 2 Organization / Website / CMS, Kiosk CRM 1 Themes & Settings, and the KIOSK settings architecture already defined.

Settings must configure other modules without duplicating their operational systems. For example, WordPress connectivity belongs to Integrations; website creation belongs to Build; communication channels belong to Inbox & Communications; Settings stores defaults, policies and shortcuts.

### Settings Overview
- Workspace Status
- Business Profile Completion
- Connected Services Summary
- Branding Status
- Website / Domain Status
- Security Status
- Billing Status
- Recent Configuration Changes

### Organization & Business
Canonical home for Sync Store Information and Kiosk CRM 2 Organization.
- Organization Profile
- Business / Store Information
- Legal Business Name
- Display Name
- Business Type
- Contact Information
- Business Address
- Logo / Business Assets
- Locations / Branches
- Default Location
- Currency
- Locale / Language
- Time Zone
- Date / Time Format
- Tax Identity / Registration Fields

Location configuration lives here. Operational branch activity remains Operations, staff assignment remains Team, and warehouse stock remains Catalog.

### Brand & Appearance
Consolidates Sync Brand, Kiosk CRM 1 Themes, and the Appearance system already implemented in KIOSK.

#### Brand
- Brand Name
- Logo
- Icon / Favicon
- Brand Colors
- Brand Assets
- Email Branding
- Document Branding
- Storefront Branding Defaults
- Social / Sharing Assets

#### Appearance — already implemented with local persistence
- Color Themes
- Theme Style
- Typography
- Text Scale
- Density
- App Layout
- Surface Pattern
- Light / Dark Mode
- Accent Color

Brand and Appearance are related but distinct: Brand defines the business identity presented to customers; Appearance controls how the KIOSK application workspace looks to its users.

### Website & CMS
Consolidates Kiosk CRM 2 Website / CMS and relevant Sync settings without duplicating Build.
- Website Settings
- Primary Website
- Storefront URL
- Domain Defaults
- SEO Defaults
- Site Metadata
- Social Sharing Defaults
- CMS Preferences
- Content Defaults
- Navigation Defaults
- Homepage Assignment
- Maintenance / Visibility Settings

Boundary: Build owns Website Builder, Pages, Navigation, Storefront Builder, Templates and visual page editing. Settings → Website & CMS owns defaults, publishing configuration and workspace-level website preferences.

### Channels
Consolidates Sync CRM Channel settings while avoiding duplication with Inbox & Communications and Integrations.
- Default Communication Channel
- Channel Preferences
- Business Contact Channels
- Sender Identity Defaults
- Customer Reply Routing
- Channel Availability by Team / Location
- Quiet Hours / Sending Windows
- Channel Policy Defaults
- Open Channel Setup

Connection setup and provider authorization live in Integrations / Inbox Channel Setup. Settings controls workspace defaults and routing policy.

### WordPress & External Store Settings
WordPress must not become a second integration manager inside Settings.
- WordPress Shortcut
- WooCommerce Shortcut
- Connected Store Summary
- Default Sync Preferences
- Store Mapping Defaults
- Open Integration Settings

Canonical connection ownership: Integrations → Commerce Connectors → WordPress / WooCommerce.

### Templates & Defaults
Consolidates Sync Template and Kiosk CRM 1 template/settings concepts at the workspace-default level.
- Template Defaults
- Document Templates
- Invoice / Receipt Defaults
- Email Template Defaults
- Message Template Defaults
- Sales / Order Form Defaults
- Course / Certificate Defaults
- Workflow Template Defaults
- Naming / Numbering Sequences
- Business Default Content

Module-specific template libraries remain in their canonical modules. Settings stores defaults and organization-wide template policy rather than duplicating every template editor.

### Notification Preferences
- In-app
- Email
- SMS
- WhatsApp / Configured Channels
- Priority Preferences
- Delivery Preferences
- Quiet Hours
- Digest Preferences

The standalone Notifications module owns actual alerts, reminders and notification rules.

### Integrations Shortcut
Links to the standalone Integrations module without duplicating connection management.
- Connected Apps Summary
- Connection Health Summary
- Open Integrations
- Open Marketplace

### Developer
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

### Security
- Security Settings
- 2FA
- Login Policies
- Sessions / Devices
- Authentication Controls
- Password / Access Policies

### Preferences
- Personal Preferences
- Language
- Date / Time
- Display Preferences
- Default Landing Page
- Personal Work Defaults

### System Configuration
- Commerce Settings
- Tax / Currency Rules
- Numbering / Document Sequences
- Business Defaults
- Data / Import Defaults
- Feature Configuration

### Plans & Billing
- Current Plan
- Subscription
- Usage
- Billing History
- KIOSK Invoices
- Payment Method
- Upgrade / Downgrade
- Cancel Subscription

Plans & Billing is what the KIOSK customer pays KIOSK for the software and stays separate from the customer's business Finance & Accounting records.

### Settings source consolidation
- Sync CRM Store Information → Settings → Organization & Business
- Sync CRM Channel → Settings → Channels, with connection management in Inbox / Integrations
- Sync CRM WordPress → Integrations → Commerce Connectors, with Settings shortcut/defaults
- Sync CRM Template → Settings → Templates & Defaults, while module template editors remain canonical in their modules
- Sync CRM Brand → Settings → Brand & Appearance → Brand
- Kiosk CRM 2 Organization → Settings → Organization & Business
- Kiosk CRM 2 Website → Settings → Website & CMS, with Build owning site creation/editing
- Kiosk CRM 2 CMS → Settings → Website & CMS, with Build/content modules owning actual content editing
- Kiosk CRM 1 Themes → Settings → Brand & Appearance → Appearance
- Kiosk CRM 1 Settings → consolidated into the structured Settings module above

## Canonical ownership rules
- Settings = workspace configuration, defaults, governance and preferences.
- Settings → Organization & Business = business/store/organization identity and workspace defaults.
- Settings → Brand & Appearance = brand identity plus KIOSK workspace appearance.
- Settings → Website & CMS = website/CMS defaults and publishing configuration; Build owns creation/editing.
- Settings → Channels = communication defaults/routing policy; Inbox and Integrations own channel operation/connectivity.
- WordPress/WooCommerce connectivity = Integrations, not a second Settings integration system.
- Settings → Templates & Defaults = organization-wide defaults; module-specific template editors remain with their modules.
- Learning & Academy = courses, curriculum, enrollment, progress and certificates.
- CRM = canonical person/contact identity.
- Commerce = checkout/order/payment processing.
- Build = customer-facing page/site/form builders.
- Reports & Analytics = cross-business BI.
- Integrations = external service/app/platform connections.
- Settings → Developer = API keys/API Explorer/technical tooling.
- Settings → Audit & Compliance = permanent organization-wide audit trail.
- AI Studio = reusable AI capabilities.
- Notifications = internal alerts/reminders.
- Inbox = conversations with people.
- Marketing = campaigns/content/promotions/advertising.
- Automation = triggers/actions/orchestration.
- Planning & Strategy = future plans/projections/roadmaps.
- Finance & Accounting = actual money/accounting.
- Venture = opportunity/offer discovery.
- Operations = human execution.
- Catalog = products/stock truth.
- Purchasing = procurement/receiving.

A capability has one canonical home but may have contextual entry points elsewhere.

## Operating model
Settings: Organization → Brand → Website/CMS Defaults → Channels → Templates → Security → Preferences
Website: Settings Defaults → Build Website/Storefront → Publish → Commerce/CRM
Channel: Settings Policy → Integration Connection → Inbox Conversation / Marketing Broadcast
WordPress: Settings Shortcut → Integrations → WordPress/WooCommerce Connection → Sync → Catalog/Commerce
Learning: CRM Contact → Enrollment → Course → Progress → Completion → Certificate
Integration: Discover App → Install → Authorize → Configure → Connect → Sync → Monitor
Strategy-to-results: Venture → Planning & Strategy → Operations / Build / Funnels / Marketing → CRM → Commerce → Finance → Reports

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Build the remaining Settings panels as real React workspaces; Appearance is currently the only implemented Settings panel
- Replace temporary DOM navigation bridges with direct React navigation/router
- Generalize affiliate engine if Commerce/Marketing needs platform-wide affiliate selling
- Real LMS media delivery, assessment grading and certificate verification backend
- Real marketplace/plugin permission model and extension sandboxing
- Backend integration credential storage and OAuth flows
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Pin dependency versions and repository hygiene
