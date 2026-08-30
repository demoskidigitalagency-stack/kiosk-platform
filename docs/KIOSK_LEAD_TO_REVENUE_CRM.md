# KIOSK Lead-to-Revenue CRM

## Product Positioning
KIOSK should be more than a contact database. It should operate as a lead-generation, funnel-generation and lead-conversion CRM that connects acquisition directly to conversations, sales activity, orders and revenue.

Core promise:

**Generate leads → capture every inquiry → know why each person contacted the business → convert conversations into customers → re-engage the right audience → attribute revenue back to acquisition.**

This capability is cross-module. It does not create a duplicate CRM, Inbox, Marketing or Commerce system.

## End-to-End Lifecycle

Acquisition Source → Attribution → Conversation/Form/Lead Capture → Contact Identity → Product/Service Interest → Lead → Qualification → Follow-up → Deal/Order → Payment → Customer → Retention/Reactivation → Revenue Attribution

## 1. Lead Generation
Canonical home: Marketing & Growth → Lead Generation

- Lead Generation Dashboard
- Google Maps Prospector
- Website Scraper
- Business Directory Prospector
- Scrape / Prospecting Jobs
- Lead Lists
- Enrichment
- Verification
- Saved Searches
- Import / Export
- Push to CRM
- Lead Generation Settings

Lead Generation discovers and prepares prospects. CRM becomes the canonical owner when a prospect is accepted as a lead/contact.

Job flow:
New Prospecting Job → Source → Search Criteria → Location / Filters → Field Selection → Run → Results → Clean / Deduplicate → Enrich → Verify → Review → Push to CRM

Public/external data collection must respect applicable provider terms, permissions and legal requirements. No access-control bypassing or unauthorized private-data collection belongs in the product architecture.

## 2. Funnel Generation and Capture
Canonical homes: Funnels + Build

### Funnels
- Funnel Builder
- Funnel Templates
- Steps & Pages
- Landing Pages
- Forms
- Split Tests
- Funnel Analytics
- Leads & Conversions

### Build
Reusable creation infrastructure:
- Landing Page Builder
- Forms Builder
- Sales Forms
- Order Forms
- Lead Forms
- Sales Page Builder
- Pop-ups
- Page Templates

Every captured lead should preserve funnel/page/form/source attribution where available.

## 3. Conversation Capture
Canonical home: Inbox & Communications

Channels may include:
- WhatsApp
- Email
- SMS
- Messenger
- Instagram
- Telegram
- Web Chat
- Voice / Calls

Incoming conversations should be linked automatically to a KIOSK Contact identity where possible. Users should not need to save a WhatsApp number to their personal phone before KIOSK can retain and work with the relationship.

Identity flow:
Incoming Channel Identity → Search Contact → Existing Contact: attach conversation/activity → No Contact: create/propose Contact → enrich relationship over time

## 4. Conversation Attribution
A conversation must retain why the person contacted the business whenever the source platform/integration makes that context available.

Attribution chain:
Source → Platform → Campaign → Ad Set → Ad / Creative → Funnel / Landing Page / Form → Product or Service Interest → Conversation → Contact → Lead → Deal / Order → Revenue

Useful attribution fields include:
- Source
- Platform
- Campaign
- Campaign ID
- Ad Set
- Ad Set ID
- Ad / Creative
- Ad ID
- Referral / click metadata where available
- Funnel
- Landing Page
- Form
- First-touch source
- Latest-touch source
- First interaction
- Latest interaction
- Product / Service Interest
- Assigned owner / agent

KIOSK should preserve both first-touch and latest-touch attribution rather than overwriting acquisition history.

## 5. Product & Service Interest
Product Interest is a first-class relationship object, not merely a contact tag.

One Contact may have many interests over time.

Example:
Contact → Scar Cream interest → WhatsApp inquiry → no purchase
Contact → Lipoma Cream interest → follow-up → order
Contact → Skincare Bundle interest → repeat purchase

Suggested Product Interest fields:
- Contact
- Product / Service
- Source
- Campaign / Ad
- Conversation
- First Interest Date
- Last Interest Date
- Interest Status
- Intent / Qualification
- Notes
- Assigned Owner
- Related Deal
- Related Order
- Converted / Not Converted

Catalog owns the canonical product/service record. CRM owns the relationship between a Contact and their interest in that offering.

## 6. Contact 360
Canonical home: CRM & Customers

A Contact 360 profile should unify:
- Identity and contact details
- WhatsApp / channel identities
- Contact source
- First-touch attribution
- Latest-touch attribution
- Product / Service Interests
- Conversation history
- Lead status
- Deal / pipeline history
- Tags
- Segments / Smart Lists
- Activities and follow-ups
- Assigned salesperson / agent
- Orders
- Purchases
- Total spend
- Support history
- Marketing eligibility / consent state
- Campaign engagement
- Notes

Identity principle:
**One person/contact → many conversations → many interests → many leads/opportunities if required → many orders.**

Avoid duplicate contacts merely because the same person enters through another campaign or channel.

## 7. Lead Conversion Workspace
Canonical home: CRM & Customers

CRM should make conversion operational rather than passive.

### Lead Workspace
- New Leads
- Unassigned Leads
- Assigned Leads
- Hot / Warm / Cold
- Follow-up Due
- Overdue Follow-ups
- Qualified
- Unqualified
- Converted
- Lost

### Lead Detail
- Contact identity
- Source / attribution
- Product interest
- Latest conversation
- Conversation summary
- Lead score / qualification
- Pipeline stage
- Owner
- Tasks / follow-ups
- Quotes
- Orders
- Notes
- AI suggestions

### Conversion Actions
- Assign Agent
- Add / Update Product Interest
- Qualify Lead
- Move Pipeline Stage
- Create Follow-up
- Create Task
- Create Quote
- Create Order
- Send Message
- Add to Segment / Smart List

## 8. Smart Lists and Audiences
CRM Smart Lists should bridge relationship data into Marketing without copying contacts.

Examples:
- Scar Cream Interested — No Purchase
- Lipoma Leads — Follow-up Overdue
- WhatsApp Leads — Last 30 Days
- Meta Ad Leads — Not Converted
- Repeat Customers — No Purchase in 60 Days
- High-value Customers
- Abandoned Checkout + WhatsApp Available
- Customers Interested in Product X

Smart List criteria may use:
- Product Interest
- Source / Campaign / Ad
- Channel
- Lead Stage
- Deal Stage
- Purchase Status
- Order History
- Last Activity
- Last Purchase
- Tags
- Location
- Owner
- Marketing eligibility / consent

Marketing & Growth consumes eligible audiences for campaigns/broadcasts. CRM remains the canonical relationship/contact store.

## 9. WhatsApp Lead Conversion
Example flow:

Meta Click-to-WhatsApp Ad → WhatsApp message → Inbox → identify/create Contact → capture available ad attribution → attach Product Interest → create/update Lead → assign agent → conversation → follow-up → order → payment → customer → revenue attribution

The same WhatsApp business number may serve many ads/products. Product interest should be determined from available referral/ad/funnel context and conversation data, not from the receiving phone number alone.

Inbox conversation panel should surface:
- Contact
- Product / Service Interest
- Source
- Campaign / Ad
- Lead stage
- Owner
- Tags / Smart Lists
- Previous conversations
- Orders / total spend
- Follow-up status

Quick actions:
- Create / Update Lead
- Add Product Interest
- Create Order
- Add Tag
- Add to Smart List
- Schedule Follow-up
- Assign Agent

## 10. Broadcast and Re-engagement
Marketing & Growth consumes CRM audiences while respecting channel eligibility and provider rules.

Flow:
Smart List / Segment → Channel Eligibility → Campaign / Broadcast → Template / Content → Schedule / Delivery Controls → Send through Connected Provider → Engagement → CRM Activity → Conversion / Revenue Attribution

KIOSK should track marketing eligibility/consent and provider/template restrictions rather than assuming every captured number can receive unrestricted future broadcasts.

## 11. Automation
Automation turns conversion playbooks into repeatable workflows.

Examples:
- New WhatsApp lead → create CRM lead → assign salesperson → follow-up task
- Product interest captured → add to relevant Smart List
- Lead has no response for 24 hours → create reminder
- Qualified lead → move pipeline stage
- Order completed → convert lead/customer status and start retention workflow
- No purchase after defined period → add to reactivation audience

AI Assistant can create/draft these workflows conversationally; Automation owns persistent execution.

## 12. AI Conversion Copilot
KIOSK AI Assistant should understand the complete lead-to-revenue graph.

Example requests:
- "Show everyone who asked about Scar Cream this month but has not ordered."
- "Create a Smart List from those leads."
- "Summarize this conversation and suggest the next follow-up."
- "Draft a WhatsApp follow-up for warm leads."
- "Which campaigns generated the most paying customers?"
- "Create an order for this customer using the product they are asking about."

AI uses the approved KIOSK Action Layer and user permissions. High-impact sends/changes follow confirmation requirements.

## 13. Lead-to-Revenue Analytics
Canonical home: Reports & Analytics

The target reporting chain is:
Ad Spend / Acquisition → Clicks → Conversations / Form Leads → Qualified Leads → Deals → Orders → Revenue → ROAS / ROI

Useful dashboards:
- Lead Generation Performance
- Lead Source Performance
- Conversation-to-Lead Rate
- Lead-to-Order Conversion Rate
- Product Interest Conversion
- Campaign-to-Revenue Attribution
- Agent Conversion Performance
- Follow-up Performance
- Funnel Conversion
- Channel Performance
- Revenue by Source / Campaign / Ad
- Customer Acquisition Cost where spend data is available
- Return on Ad Spend where spend and revenue data are available

Reporting accuracy depends on what connected providers expose and on reliable identity/attribution matching. KIOSK must not fabricate unavailable attribution.

## 14. Selling Point
KIOSK can be positioned around a continuous acquisition-to-revenue operating system rather than a disconnected CRM.

Potential product proposition:

**KIOSK turns leads, ads, funnels and conversations into a measurable sales pipeline — from first inquiry to payment and repeat business.**

Supporting differentiators:
- Generate/prospect leads inside the platform
- Build funnels/forms/pages
- Capture omnichannel inquiries
- Automatically build Contact 360 records
- Know the product/service each prospect is interested in
- Preserve campaign/ad attribution where available
- Manage pipeline and follow-ups
- Convert conversations directly into orders
- Build Smart Lists for re-engagement
- Automate conversion workflows
- Use AI across the entire lead journey
- Attribute customers/revenue back to acquisition

## Canonical Ownership
- Marketing & Growth → prospecting, campaigns, broadcasts, audiences, re-engagement
- Funnels → conversion journeys and funnel analytics
- Build → page/form creation infrastructure
- Inbox & Communications → conversations
- CRM & Customers → Contact 360, leads, product interests, qualification, pipeline, Smart Lists
- Catalog → canonical products/services
- Commerce → quotes/orders/checkout/fulfillment
- Finance & Accounting → payments/revenue/accounting
- Automation → persistent lead-conversion workflows
- AI Studio → conversational conversion intelligence/orchestration
- Integrations → Meta/WhatsApp/email/SMS/other external connections
- Reports & Analytics → cross-module lead-to-revenue attribution and conversion intelligence

## Implementation Note
This document defines the target architecture. Current KIOSK development is still frontend/mock/local-data oriented; real WhatsApp/Meta attribution, external integrations, durable Contact identity resolution, consent state, cross-module persistence, AI action execution and revenue attribution require backend/integration implementation later.