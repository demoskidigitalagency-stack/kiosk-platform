# SniperCRM Reconciliation

This document reconciles the supplied SniperCRM screenshots into the KIOSK master architecture. SniperCRM is a reference source only; KIOSK should preserve useful capabilities without copying its flat sidebar or creating duplicate systems.

## Screenshot inventory

### Core
- Dashboard
- Users
- Product Categories
- Products
- Forms
- Webhooks
- Suppliers
- Agents
- Inventory
- Expenses
- Today's Deliveries
- Today's Followups
- Orders
- Accounting

### Marketing and communications
- WhatsApp Marketing
  - Setup
  - Broadcast Speed
  - Templates
  - Marketing
  - Automation
  - ChatBot
  - Reports
- SMS Marketing
- Email Marketing

### Finance, integrations and people
- Payment Gateways
- Integrations
- My Earnings
- Staff Earnings
- Salary For Life
- Customer Support
- Support Tickets
- Purchase History

## Canonical KIOSK placement

### Overview
- Dashboard → Overview → Dashboard
- Today's Deliveries → Overview → Today → Deliveries, with canonical fulfillment records in Commerce
- Today's Followups → Overview → Today → Follow-ups, with canonical activity records in CRM / Operations

### Team / Settings
- Users → Team → People / Users; access governance remains Settings → Users & Access

### Catalog
- Product Categories → Catalog → Collections & Categories
- Products → Catalog → Products
- Inventory → Catalog → Inventory

### Build / Funnels
- Forms → Build → Forms Builder as reusable infrastructure; lead/conversion forms surface contextually in Funnels and CRM

### Integrations / Developer
- Webhooks → Integrations → Webhooks for operational external connections; developer webhook tooling remains Settings → Developer
- Payment Gateways → Integrations → Payment Connectors
- Integrations → standalone Integrations module

### Purchasing
- Suppliers → Purchasing → Suppliers
- Purchase History → Purchasing → Purchasing History when it represents stock/procurement purchases. Customer purchase history instead belongs contextually to CRM Customer 360 / Commerce Orders. The source label is therefore preserved but requires record-context verification before implementation.

### Team / Sales Agents
- Agents → Team → Sales & Delivery Agents
- Agent assignment surfaces contextually in CRM, Commerce Fulfillment and Operations
- Agent performance → Reports & Analytics / Team Performance
- Agent earnings → Finance & Accounting → Commissions & Earnings

### Finance & Accounting
- Expenses → Finance & Accounting → Expenses
- Accounting → Finance & Accounting → Accounting
- My Earnings → Finance & Accounting → Earnings / Commissions
- Staff Earnings → Finance & Accounting → Payroll / Staff Earnings, with employee context in HR
- Salary For Life → preserve as Pending Placement until its actual business meaning is verified. Do not infer that it is ordinary payroll merely from the label.

### Commerce
- Orders → Commerce → Orders
- Today's Deliveries → Commerce → Fulfillment → Delivery Schedule, surfaced in Overview → Today

### CRM / Operations
- Today's Followups → CRM → Activities & Follow-ups, surfaced in Overview → Today

### Customer Service
- Customer Support → Customer Service → Service Workspace
- Support Tickets → Customer Service → Tickets & Helpdesk

## WhatsApp Marketing consolidation
SniperCRM gives WhatsApp Marketing its own large operational section. KIOSK should preserve the capabilities while splitting them according to canonical ownership.

### Integrations → Communication Connectors → WhatsApp
- Setup
- Connected account / number configuration
- Provider credentials
- Gateway configuration
- Connection health

### Marketing & Growth → WhatsApp Marketing
- WhatsApp Campaigns
- Broadcasts
- Audience selection
- Scheduling
- Broadcast Speed / Throttling Policy
- Campaign performance entry points

### Inbox & Communications → WhatsApp
- Customer conversations
- Replies
- Assignment
- Conversation history

### Marketing & Growth → Templates & Content
- WhatsApp Message Templates
- Template status
- Campaign template selection

### Automation
- WhatsApp Automation
- Triggered messages
- Workflow actions
- Follow-up sequences

### AI Studio / Automation
- ChatBot → conversational bot/AI agent capability in AI Studio when intelligent; deterministic bot flows in Automation
- Bot actions must use approved KIOSK Action Layer permissions

### Reports & Analytics
- WhatsApp Reports
- Broadcast performance
- Delivery/read/reply metrics when provider data supports them
- Conversion attribution where trackable

This avoids creating a second standalone WhatsApp system while retaining the complete SniperCRM workflow.

## SMS and Email Marketing

### Marketing & Growth
- SMS Campaigns / Broadcasts
- Email Campaigns / Broadcasts
- Templates
- Scheduling
- Audience selection
- Campaign analytics entry points

### Integrations
- SMS provider connection
- Email provider connection

### Inbox & Communications
- Two-way SMS/email conversations where supported

### Automation
- Triggered SMS/email sequences

### Reports & Analytics
- Channel reports and attribution

## Capabilities worth adding explicitly to KIOSK

### Broadcast Delivery Controls
SniperCRM exposes Broadcast Speed. KIOSK should generalize this as campaign delivery controls rather than a WhatsApp-only architectural primitive.

Marketing & Growth → Campaign Delivery:
- Send immediately
- Scheduled send
- Batch size
- Send rate / throttling
- Sending window
- Quiet hours
- Retry policy
- Provider/channel limits

Actual limits depend on the connected provider and must be enforced by integrations/backend later.

### Earnings & Commissions
The repeated My Earnings / Staff Earnings / agent concepts across source apps justify an explicit reusable earnings model.

Finance & Accounting → Earnings & Commissions:
- My Earnings
- Staff Earnings
- Agent Commissions
- Affiliate Earnings
- Commission Rules
- Pending Earnings
- Approved Earnings
- Paid Earnings
- Adjustments
- Payout History

Canonical identity remains Team/HR/Marketing depending on earner type; Finance owns the monetary ledger and payout state.

### Sales & Delivery Agents
Team → Agents:
- Agent List
- Agent Profile
- Agent Type: Sales / Delivery / Hybrid
- Assignment
- Territory / Location
- Availability
- Performance
- Commission Plan

Commerce and CRM consume the agent directory rather than maintaining duplicate agent records.

## Do not copy as standalone top-level modules
The following SniperCRM labels are useful entry points but should not become new KIOSK top-level modules:
- Product Categories
- Forms
- Webhooks
- Suppliers
- Agents
- Expenses
- Today's Deliveries
- Today's Followups
- Accounting
- WhatsApp Marketing
- SMS Marketing
- Email Marketing
- Payment Gateways
- My Earnings
- Staff Earnings
- Support Tickets
- Purchase History

They already belong to stronger canonical KIOSK domains.

## Pending clarification
- Salary For Life — preserve label/concept until actual source behavior is understood.
- Purchase History — distinguish procurement purchase history from customer purchase history during implementation.

## Result
The screenshots add useful detail but do not require another top-level KIOSK module. The strongest additions are Broadcast Delivery Controls, explicit Earnings & Commissions, and a reusable Sales & Delivery Agent model. WhatsApp/SMS/Email capabilities remain distributed across Integrations, Inbox, Marketing, Automation, AI Studio and Reports according to responsibility.