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
20. AI Studio — Structured; platform-wide AI Copilot architecture defined
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
AI Studio is the full workspace for KIOSK AI capabilities. The AI Assistant also exists as a platform-wide popup/drawer so users can ask KIOSK to work across the application without navigating to AI Studio first.

### AI Overview
- Usage Summary
- Recent Conversations
- Recent AI Actions
- Suggested Workflows
- Installed Skills

### AI Assistant
- Full Assistant
- Conversation History
- Saved Conversations
- Suggested Actions
- Recent AI Actions

### Platform Copilot
- Global AI Popup / Drawer
- Current Page Context
- Selected Record Context
- Quick Commands
- Ask KIOSK
- Command Palette
- Expand to AI Studio
- Voice Input later

The Copilot should be available from every KIOSK module and understand the current page/record where permissions allow.

### AI Actions
- Search
- Create
- Update
- Analyze
- Summarize
- Autofill
- Generate
- Coordinate Cross-Module Work

AI actions must use a controlled KIOSK Action Layer rather than arbitrary database manipulation. Each action should declare required inputs, permissions, risk level, confirmation requirements, affected records and audit metadata.

### AI Autofill
Reusable throughout KIOSK forms:
- Fill with AI
- Complete Missing Fields
- Improve with AI
- Generate Description
- Extract Information
- Suggest Category
- Summarize
- Generate from Business Data

Applicable to products, CRM records, messages, documents, campaigns, courses, business plans, websites/pages and other supported forms.

### AI Research & Context
The assistant may gather context from:
- Internal KIOSK Data
- Current Page / Selected Record
- Authorized Connected Apps
- Uploaded Files / Documents
- External / Public Research when required and allowed
- Research Sources / Provenance
- Research History

Resolution order for missing information: current context → KIOSK records → authorized integrations → user files → external/public research where appropriate → ask user. Required business values must not be invented.

### AI Content Tools
- Content Generator
- Image Generator
- Reply Suggestions
- Sentiment & Insights
- AI Voice

### AI Skills
- Installed Skills
- Skill Permissions
- Skill Configuration
- Skill Updates

AI skills are discovered/installed through Integrations → Marketplace → AI Skills and used/managed through AI Studio.

### AI Activity
- AI Action History
- Pending Approvals
- Failed Actions
- Usage
- Contextual AI Audit Trail

Permanent organization-wide audit records remain Settings → Audit & Compliance → Audit Log.

### AI Settings
- Assistant Preferences
- Allowed Data Sources
- External Research Preferences
- Confirmation Preferences within policy boundaries
- Voice Settings
- Privacy / Data Controls
- Model / Provider Configuration later

### AI permission and execution model
AI inherits the user's KIOSK permissions and must never bypass role restrictions.

Low-risk work such as search, summarization, analysis, drafting and previews can generally proceed within permission. High-impact actions such as sending external messages, publishing campaigns/websites, issuing refunds, deleting records, bulk changes, sensitive financial changes, permission/security changes and consequential integration actions require appropriate permission and explicit confirmation.

Execution lifecycle: Read → Draft → Preview → Confirm when required → Execute → Verify → Audit

### AI / Automation boundary
AI Assistant handles conversational reasoning and ad-hoc intelligent work. Automation owns persistent event-driven workflows. When a user asks for recurring behavior, AI can prepare an Automation workflow for review rather than keeping hidden recurring behavior inside the assistant conversation.

Detailed architecture: `docs/KIOSK_AI_ASSISTANT_ARCHITECTURE.md`.

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
Settings is the canonical configuration layer for the KIOSK workspace. The detailed Settings consolidation is maintained in `docs/KIOSK_SETTINGS_ARCHITECTURE.md`.

Primary groups:
- Organization & Locations
- Users & Access
- Business & Financial
- Documents & Receipts
- Brand & Appearance
- Notifications
- Integrations
- Developer
- Audit, Backup & Recovery
- System
- Plans & Billing

Appearance is currently the implemented Settings workspace. Other settings groups are architecture/frontend framework until their dedicated UI and backend capabilities are built.

## Canonical ownership rules
- AI Assistant = platform-wide conversational intelligence and orchestration through approved KIOSK actions.
- AI Studio = full AI workspace, AI tools, installed skills, research/history/settings.
- KIOSK modules = canonical business systems; AI does not replace module ownership.
- Automation = persistent event-driven workflows; AI may prepare automations.
- Integrations = external service/app/platform connections used by KIOSK and approved AI actions.
- Settings → Audit & Compliance = permanent organization-wide audit trail, including executed AI actions.
- Settings = workspace configuration, defaults, governance and preferences.
- Learning & Academy = courses, curriculum, enrollment, progress and certificates.
- CRM = canonical person/contact identity.
- Commerce = checkout/order/payment processing.
- Build = customer-facing page/site/form builders.
- Reports & Analytics = cross-business BI.
- Notifications = internal alerts/reminders.
- Inbox = conversations with people.
- Marketing = campaigns/content/promotions/advertising.
- Planning & Strategy = future plans/projections/roadmaps.
- Finance & Accounting = actual money/accounting.
- Venture = opportunity/offer discovery.
- Operations = human execution.
- Catalog = products/stock truth.
- Purchasing = procurement/receiving.

A capability has one canonical home but may have contextual entry points elsewhere.

## Operating model
AI task: User Request → Current Context → Internal Data / Integrations / Files / External Research → AI Plan → Approved KIOSK Actions → Preview/Confirmation → Execute → Verify → Audit
AI recurring task: User Request → AI Drafts Workflow → User Review → Automation → Future Executions → Audit
Learning: CRM Contact → Enrollment → Course → Progress → Completion → Certificate
Integration: Discover App → Install → Authorize → Configure → Connect → Sync → Monitor
Strategy-to-results: Venture → Planning & Strategy → Operations / Build / Funnels / Marketing → CRM → Commerce → Finance → Reports

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Build global AI popup/drawer frontend and contextual mock states
- Define reusable AI Autofill UI component/pattern
- Build KIOSK Action Registry/backend permission enforcement later
- Build AI approval/confirmation UI and audit integration
- External research/source-provenance service later
- Build remaining Settings panels; Appearance is currently implemented
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
