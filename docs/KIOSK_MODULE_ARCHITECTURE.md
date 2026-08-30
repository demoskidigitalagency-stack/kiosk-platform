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
- Build — Framework
- Funnels — Structured
- Marketing & Growth — Structured
- Inbox & Communications — Structured
- Customer Service — Structured
- Team — Structured
- HR — Structured
- Operations — Structured
- Finance & Accounting — Framework
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

Catalog owns products/inventory; Purchasing owns supply; Build owns visual storefront/page construction; CRM owns relationships.

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

Lifecycle: Contact → Lead → Qualify → Deal → Quote → Order → Payment → Customer → Retention

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
Venture owns business/product discovery, offer creation and launch preparation. Venture Forge is the branded AI workspace inside Venture.
- Venture Overview
- Venture Forge
- Discover: Niche Finder, Market Research, Competitor Research, Opportunity Finder
- Offer: Offer Builder, Customer Persona, Value Proposition, Pricing Strategy, Offer Stack
- Products: Product Ideas, Digital Product Generator, Digital Product Library
- Funnel Generator
- Launch Center: Launch Plan, Checklist, Calendar, Channel Strategy
- Ads & Social Content
- Export Center

Handoffs: generated products → Catalog; funnels → Funnels; campaigns/content → Marketing; websites/pages → Build.

Venture lifecycle: Niche → Offer → Product → Funnel → Content → Launch → Catalog → Commerce → CRM → Revenue

## 7. Build
Build owns general customer-facing construction infrastructure.
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

Funnels may use the same page/form builder engine without creating duplicate editors.

## 8. Funnels
Funnels owns conversion journeys built from reusable pages/forms.
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

Flow: Traffic → Landing Page → Form / Checkout → Contact → Lead → Deal / Order → Customer

## 9. Marketing & Growth
Marketing owns acquisition, campaigns, broadcasts, promotions, retention and advertising execution.
- Marketing Overview
- Campaigns: All, New, Draft, Scheduled, Active, Completed, Analytics
- Broadcasts: Email, SMS, WhatsApp, Telegram, Multi-channel
- Audience & Targeting: CRM Segments, Smart Lists, Campaign Audiences
- Templates & Content: Email, SMS, WhatsApp, Campaign Templates
- Promotions: Discounts, Coupons, Promotion Rules
- Loyalty & Rewards: Loyalty Program, Points, Rewards, Customer Rewards
- Recovery: Abandoned Carts, Recovery Campaigns, Win-back Campaigns
- Experimentation: A/B Tests, Campaign Tests, Creative Tests
- Advertising: Ad Campaigns, Ad Creative, Ad Research / Competitor Research, Meta Ads, Google Ads, Campaign Performance

Gift Cards are optional/regional and are not a primary KIOSK feature for the current target market.

## 10. Inbox & Communications
Inbox owns conversations and channel connectivity; it does not own marketing campaigns.
- Inbox Overview
- All Conversations
- My Conversations
- Unassigned
- Pinned
- Channels: WhatsApp, Email, SMS, Facebook Messenger, Instagram DM, Telegram, Web Chat
- Channel Setup: Connected Channels, WhatsApp Cloud API, QR Gateway, Connected Numbers, Email/SMS/Messenger/Instagram/Telegram/Web Chat setup
- Conversation Management: Assignment, Teams/Agents, Tags, Internal Notes, Status, Contact Linking
- Message Templates: WhatsApp Templates, Email Templates, SMS Templates, Saved Replies
- Communication Analytics

WhatsApp Inbox lives here; WhatsApp broadcasts live in Marketing. Authorized APIs/webhooks are required for external messaging/social channels.

## 11. Customer Service
Customer Service owns support cases and resolution workflows.
- Service Overview
- Tickets & Helpdesk
- Complaints
- Knowledge Base
- Customer Portal
- Service Workspace
- Service Reports

Inbox owns the conversation/channel; Customer Service owns the ticket/complaint/SLA/resolution case.

## 12. Team
Team owns workspace membership, organization and access.
- Team Overview
- People: Users/Staff, Invite User, User Profile, Active/Inactive, Invitations
- Teams & Departments
- Roles & Permissions
- Locations & Assignment: Staff Assignment, Delivery Agents, Location Access
- Performance: Staff/Sales Performance, Goals, Leaderboard
- Team Communication: Team Chat, Announcements, Internal Updates

## 13. HR
HR owns the employee lifecycle.
- HR Overview
- Employee Directory
- Attendance: Clock In/Out, Time Entries, Timesheets
- Shifts & Scheduling
- Leave & Time Off
- Payroll & Compensation: Compensation, Commissions, Bonuses, History
- Performance Reviews
- Documents & Policies
- Onboarding
- Offboarding

## 14. Operations
Operations owns cross-business human work execution.
- Operations Overview
- Projects: Projects, Workspace, Status, Milestones, Members, Timeline, Files, Activity
- Tasks: All, My, Assigned, Board, Priorities, Due Dates, Recurring, Completed, History
- Calendar
- Meetings
- Approvals
- Operational Workflows / Checklists
- Documents & E-Signature: Documents, Templates, Signature Requests, Awaiting Signature, Signed, Declined/Expired, Signers, History, Audit Trail
- Locations / Branch Operations

Automation owns event-driven machine workflows; Operations owns human/business process execution.

## 15. Finance & Accounting
- Accounting
- Revenue
- Expenses
- Cash Flow
- Accounts
- Daily Close
- Taxes
- Financial Statements
- Reconciliation

## 16. Reports & Analytics
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
- Fulfillment
- Customer Service
- Projects / Tasks
- Automation
- Custom Reports

## 17. Automation
Automation owns event-driven orchestration used across KIOSK.
- Automation Overview
- Workflows: All, Active, Paused, Drafts
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

Example: Abandoned Cart → Wait → WhatsApp → Wait → Email → CRM Task.
Example: New Lead → Assign Owner → Welcome Message → Follow-up Task → Pipeline Update.

Operations can expose human workflows; Marketing, CRM, Commerce, HR and Customer Service can launch automations contextually while this remains the single automation engine.

## 18. AI Studio
AI Studio owns reusable AI capabilities available contextually across every module.
- AI Overview
- AI Assistant
- Content Generator
- Image Generator
- Reply Suggestions
- Sentiment & Insights
- AI Voice
- AI Settings
- AI History / Generations

Examples: CRM summarizes a customer; Inbox suggests a reply; Marketing generates campaign content; Venture generates an offer; Funnels generates landing-page content; Customer Service summarizes a ticket. These are contextual entry points into the same AI capability.

## 19. Integrations
- Connected Apps
- WooCommerce
- WordPress
- Meta / Google
- Payment Gateways
- Shipping Providers
- API Connections
- Webhooks
- Import / Export Connections

## 20. Settings
Settings owns workspace configuration, governance, preferences and security.
- Business & Workspace: Business Profile, Workspace, Location Configuration, Currency, Locale, Date/Time Defaults
- Appearance & Branding: Appearance, Theme, Color Mode, Accent, Typography, Density, Layout, Surface Pattern, Custom Branding, Logo/Assets
- Notifications: Notification, Email, SMS, Push/In-app Preferences and Rules
- Security: Security Settings, 2FA, Login Policies, Sessions/Devices, Authentication Controls
- Developer: API Keys, Webhook Configuration, Developer Settings, API Access Policies
- Audit & Compliance: Audit Log, Login History, Security Events, Data Activity, Administrative Changes
- Preferences: Personal Preferences, Language, Date/Time, Display Preferences
- System Configuration: Templates, Commerce Settings, Tax, Currency Rules, Numbering/Document Sequences, Business Defaults

Appearance is already implemented in the frontend with local persistence and remains the canonical visual-system configuration area.

## Canonical ownership rules
- Inbox = conversations/channels.
- Marketing = campaigns/broadcasts/promotions/advertising.
- Funnels = conversion journeys.
- Automation = triggers/actions/orchestration.
- Venture = opportunity, offer, product and launch ideation/preparation.
- Build = reusable customer-facing construction tools.
- AI Studio = reusable AI capabilities.
- CRM = contact/customer identity and relationship history.
- Commerce = selling transaction.
- Catalog = products and stock truth.
- Purchasing = procurement and receiving.
- Operations = human work/projects/tasks/documents/approvals.
- Settings = configuration/governance/security.

A capability has one canonical home but may have contextual entry points elsewhere. Do not create duplicate systems merely because a capability participates in several workflows.

## Operating model
Customer/revenue: Acquire → CRM → Sell → Pay → Fulfill → Account → Retain
Product/revenue: Venture/Create → Catalog → Publish → Commerce → Order → Payment → Fulfillment → Revenue
Growth: Discover → Offer → Funnel → Campaign → Conversation/Lead → CRM → Order → Revenue
Communication: Channel → Conversation → Contact → Campaign/Service/Sales Context → Outcome
Automation: Trigger → Conditions → Actions → Logs → Analytics
People/access: Invite → Team/Department → Role → Location → Access Review → Deactivate
Employee: Hire → Onboard → Schedule → Attendance → Performance → Compensation → Offboard

## Pending / regional placement
- Gift Cards — optional regional Commerce/Marketing feature; not primary for current target market.

## Deferred enhancement backlog
- Role-based customizable dashboard presets
- Commerce Command Center refinement
- Reviews & Reputation refinement
- Backend persistence/auth/data integrations
- Replace temporary DOM navigation bridges with direct React navigation/router
- Pin dependency versions and repository hygiene
