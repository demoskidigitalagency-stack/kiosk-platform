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
Academy is the branded learner-facing portal rather than a separate learning engine.
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
Students are learning profiles linked to the canonical CRM person/contact rather than a duplicate contact database.
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
Learner-facing workspace.
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

Certificate flow: Course Completion → Eligibility Check → Generate Certificate → Student Access → Verification

### Affiliates
Course-focused affiliate sales live here initially, but the underlying affiliate capability should be reusable later for broader Commerce/Marketing use.
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

Learning exposes contextual analytics, while Reports & Analytics remains the canonical cross-business BI layer and receives Learning Analytics as a reporting domain.

### Learning boundaries and handoffs
- CRM owns canonical contact identity; Learning owns student/enrollment/progress state.
- Build owns public course/academy page-building infrastructure.
- Commerce owns checkout, order and payment transaction processing.
- Learning owns curriculum, enrollment, learning progress and certificates.
- Marketing & Growth owns course promotion and campaigns.
- Finance & Accounting records actual course revenue, affiliate payouts and related transactions.
- Reports & Analytics consolidates course performance with other business intelligence.

Learning lifecycle: Create Course → Build Curriculum → Publish → Enroll Student → Learn → Track Progress → Complete → Certificate → Analytics
Commercial lifecycle: Visitor → Course Page → Checkout → Order/Payment → Student Enrollment → Learning → Certificate

## 23. Settings
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
Controls delivery preferences; Notifications owns the actual notification center.

### Integrations Shortcut
Links to the standalone Integrations module without duplicating it.

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
- Learning & Academy = courses, curriculum, enrollment, progress, certificates and learner experience.
- CRM = canonical person/contact identity; student is a linked learning role/profile.
- Commerce = course checkout/order/payment processing.
- Build = course/academy public page building.
- Reports & Analytics = cross-business BI, including consolidated learning analytics.
- Integrations = external service/app/platform connections.
- Integrations → Marketplace = discover/install plugins/extensions/templates/AI skills.
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
Learning: CRM Contact → Enrollment → Course → Progress → Completion → Certificate
Course sale: Build Course Page → Commerce Checkout → Payment → Enrollment → Learning → Finance → Reports
Affiliate course sale: Affiliate Referral → Course Checkout → Payment → Commission → Finance/Payout → Analytics
Integration: Discover App → Install → Authorize → Configure → Connect → Sync → Monitor
Strategy-to-results: Venture → Planning & Strategy → Operations / Build / Funnels / Marketing → CRM → Commerce → Finance → Reports

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Generalize affiliate engine if Commerce/Marketing needs platform-wide affiliate selling
- Real LMS media delivery, assessment grading and certificate verification backend
- Real marketplace/plugin permission model and extension sandboxing
- Backend integration credential storage and OAuth flows
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Replace temporary DOM navigation bridges with direct React navigation/router
- Pin dependency versions and repository hygiene
