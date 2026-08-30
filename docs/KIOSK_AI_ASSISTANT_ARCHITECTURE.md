# KIOSK AI Assistant Architecture

## Purpose
KIOSK AI Assistant is the platform-wide copilot for the entire KIOSK application. It is not limited to AI Studio and should be accessible from every module through a persistent popup/drawer, while AI Studio provides the full assistant workspace, history, skills, settings and advanced AI tools.

Current phase: architecture and frontend planning. No production AI backend, external research service, action execution engine, permission engine or database integration is connected yet.

## Experience Surfaces

### Global AI Copilot
Persistent application-level assistant available from anywhere in KIOSK.
- Floating AI button
- Popup / side drawer
- Ask KIOSK
- Current-page context
- Quick commands
- Suggested actions
- Recent conversations
- Expand to full AI Studio
- Voice input later

The copilot should understand the active module, page, selected record and relevant filters where permission allows.

Examples:
- Customer page → understands the current customer
- Order page → understands the current order
- Product page → understands the current product
- Reports page → understands active report/date range
- Course page → understands the current course

### AI Studio → AI Assistant
Full workspace for longer and more complex work.
- Full Assistant
- Conversation History
- Saved Conversations
- Suggested Actions
- Recent AI Actions
- Pending Approvals
- Failed Actions

## Core Assistant Responsibilities
The assistant may orchestrate work across KIOSK modules through approved application actions.

### Read
- Search records
- Retrieve relevant business context
- Summarize records
- Compare information
- Explain application data

### Create
- Customer / contact
- Lead / company / deal
- Product
- Order draft
- Invoice draft
- Task / follow-up
- Campaign draft
- Course draft
- Business plan draft
- Report
- Automation draft

### Update
- Complete missing fields
- Update approved record fields
- Categorize records
- Improve descriptions/content
- Prepare status changes

### Analyze
- Business performance
- Customer behavior
- Sales
- Inventory
- Marketing
- Finance
- Learning
- Operations
- Cross-module trends

### Coordinate
A single user request may require multiple modules. The assistant determines the required modules, collects context, asks only for genuinely missing information, prepares the work and executes approved actions.

Example:
User request → "Create a customer from this WhatsApp conversation and prepare an invoice."
Flow → Inbox context → CRM contact/customer → Commerce/Finance invoice draft → preview → confirmation where required → save → audit.

## KIOSK Action Layer
AI must not manipulate application storage or databases arbitrarily. Application capabilities should be exposed to AI as controlled actions.

Example action families:
- CRM: searchContact, createContact, createCustomer, updateCustomer, createLead, createDeal
- Catalog: searchProduct, createProduct, updateProduct, adjustInventory
- Commerce: createOrder, prepareRefund, createQuote
- Finance: createInvoice, recordPaymentDraft, createExpenseDraft
- Operations: createTask, scheduleMeeting, createProject
- Marketing: createCampaignDraft, createContentDraft
- Learning: createCourseDraft, enrollStudent, generateCertificateDraft
- Reports: generateReport, summarizePerformance
- Automation: createWorkflowDraft

Every action should declare:
- required inputs
- allowed roles/permissions
- risk level
- whether confirmation is required
- affected module/records
- audit metadata
- reversible/undo behavior where supported

## AI Autofill
AI Autofill is a reusable platform capability available throughout KIOSK forms rather than separate AI implementations in every module.

Common controls:
- Fill with AI
- Complete missing fields
- Improve with AI
- Generate description
- Extract information
- Suggest category
- Summarize
- Generate from business data

Examples:
Product name/image/business context → description + category + tags + SEO suggestions.
Company name/website → proposed company profile fields.
Customer conversation → proposed contact fields + follow-up.
Course outline → modules + lessons + learning objectives.
Business idea → business-plan draft + market-analysis research request.

AI-generated values should be visibly distinguishable before save where practical, and users should be able to review/edit them.

## Context Layer
Assistant context may come from four controlled sources.

### 1. Internal KIOSK Context
- Current page
- Selected record
- User-selected records
- Workspace/business profile
- CRM
- Catalog
- Commerce
- Finance
- Operations
- Marketing
- Learning
- Reports
- Other authorized KIOSK modules

### 2. Connected Apps
Via Integrations and authorized connections:
- Meta
- Google
- WordPress / WooCommerce
- WhatsApp
- Email
- SMS
- Accounting providers
- Payment providers
- Shipping providers
- Other marketplace connectors

Integrations owns connection/authorization. AI Assistant consumes only capabilities/data made available through approved integration interfaces.

### 3. Files & Documents
- PDFs
- Spreadsheets
- CSV files
- Product catalogs
- Receipts
- Contracts
- Images/documents
- Other supported uploads

### 4. External / Public Research
Used when the task requires information outside the KIOSK workspace, such as market research, competitor research or current public information.

External research must remain distinguishable from internal KIOSK records. The assistant should preserve source/provenance information so external findings are not silently treated as verified internal business data.

## Missing Information
When required information is unavailable, the assistant should determine the best source before asking the user.

Resolution order:
1. Current page/context
2. Existing KIOSK records
3. Authorized connected apps
4. User-provided files
5. External/public research when appropriate and allowed
6. Ask the user for the missing detail

The assistant should not invent required business values.

## Permission, Risk & Confirmation Model
AI inherits the user's KIOSK permissions. AI must not become a mechanism for bypassing role restrictions.

### Low-risk
Usually executable without additional confirmation:
- Search
- Summarize
- Analyze
- Draft
- Suggest
- Autofill preview
- Generate report preview

### Controlled write
May execute when the user has permission, with clear result feedback:
- Create customer
- Create task
- Save draft
- Update ordinary record fields

### High-impact
Require explicit confirmation and appropriate permission before execution:
- Send external messages
- Publish campaigns
- Publish websites/pages
- Issue refunds
- Record/alter sensitive financial transactions
- Delete records
- Bulk changes
- Change roles/permissions
- Change security settings
- Revoke credentials
- Execute consequential integrations/actions

Default lifecycle:
Read → Draft → Preview → Confirm when required → Execute → Verify → Audit

## AI Auditability
Every executed AI action should be attributable to both the AI and the authorizing user.

Audit record should include:
- user
- AI assistant/action
- timestamp
- originating conversation/request
- affected module
- affected records
- action performed
- before/after where appropriate
- confirmation status
- result/failure
- external sources/connectors used where relevant

Canonical permanent audit home:
Settings → Audit & Compliance → Audit Log

AI Studio may expose a contextual AI Activity view without creating a duplicate permanent audit system.

## AI Studio Structure

### AI Overview
- Usage summary
- Recent conversations
- Recent actions
- Suggested workflows
- Installed skills

### AI Assistant
- Full Assistant
- Conversation History
- Saved Conversations
- Suggested Actions
- Recent AI Actions

### Platform Copilot
- Global Popup / Drawer
- Current Page Context
- Quick Commands
- Ask KIOSK
- Command Palette
- Voice Input later

### AI Actions
- Create
- Update
- Search
- Analyze
- Summarize
- Autofill
- Generate
- Coordinate

### AI Autofill
- Forms
- Products
- CRM records
- Messages / Emails
- Documents
- Campaigns
- Courses
- Business Plans
- Websites / Pages

### AI Research
- Internal KIOSK Data
- Connected Apps
- Uploaded Documents
- External / Public Research
- Research Sources
- Research History

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

Discovery/installation remains Integrations → Marketplace → AI Skills.

### AI Activity
- AI Action History
- Pending Approvals
- Failed Actions
- Usage
- Contextual AI Audit Trail

### AI Settings
- Assistant Preferences
- Allowed Data Sources
- External Research Preferences
- Default Model/provider configuration later
- Confirmation preferences within policy boundaries
- Voice settings
- Privacy/data controls

## Automation Boundary
AI Assistant handles conversational reasoning and ad-hoc intelligent work. Automation owns persistent event-driven workflows.

Example:
User: "Whenever inventory drops below 5, inform the purchasing manager and draft a purchase order."
AI Assistant → understands request → prepares Automation workflow → user reviews/approves → Automation owns future executions.

AI must not maintain hidden recurring behavior inside a chat conversation when Automation is the canonical execution system.

## Integrations & Marketplace Boundary
- Integrations = connect external systems.
- Marketplace = discover/install AI skills and extensions.
- AI Studio = use/manage installed AI capabilities.
- Settings → Developer = API credentials and developer tooling.
- AI Assistant = orchestrate approved capabilities through the KIOSK Action Layer.

## Target Interaction Model
KIOSK UI + Global AI Copilot + KIOSK Action Layer + Module Data + Integrations + Files + External Intelligence

The user should be able to state the desired business outcome without needing to know the exact KIOSK menu path. The assistant locates the appropriate modules, gathers available context, requests missing details only when necessary, prepares the work, obtains confirmation for high-impact actions, executes through approved application actions, and reports the result.

## Implementation Phases

### Current frontend phase
- Define architecture
- Add global assistant popup/drawer shell
- Add contextual UI states
- Add mock assistant conversations/actions
- Add AI Autofill affordances to reusable form patterns
- Add approval/preview UI patterns
- No real cross-module writes or external research claims

### Backend/action phase
- KIOSK Action Registry
- Permission enforcement
- Action validation
- Structured tool/action schemas
- Record context service
- AI action audit service
- Approval/confirmation service

### External intelligence phase
- Integration tool adapters
- File/document retrieval
- Public research capability
- Source/provenance tracking
- OAuth/credential security

### Advanced phase
- Voice interaction
- Multi-step plans
- Reversible action support
- Role-specific AI assistants
- Organization AI policies
- Marketplace AI skills
- Advanced agentic workflows with strict permissions and auditing
