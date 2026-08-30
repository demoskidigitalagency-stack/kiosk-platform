# KIOSK Settings Architecture

KIOSK Settings is the canonical workspace-configuration layer. It should stay concise at the top level while grouping the deeper controls inherited from Sync CRM, Kiosk CRM 1, Kiosk CRM 2 and BizFlow.

> Current implementation phase: Settings architecture and frontend/mock planning. Appearance is already implemented with local persistence. Most other settings areas remain framework-only until the main React settings workspace is modularized.

## Top-level Settings navigation

1. Organization & Locations
2. Users & Access
3. Business & Financial
4. Documents & Receipts
5. Brand & Appearance
6. Notifications
7. Integrations
8. Developer
9. Audit, Backup & Recovery
10. System
11. Plans & Billing

The goal is to avoid exposing every individual setting as a separate menu item while retaining all useful capabilities.

## 1. Organization & Locations

Consolidates Store Information, Organization, Company Branches and business-location configuration.

- Organization Profile
- Business / Store Information
- Legal Business Name
- Display Name
- Business Type
- Contact Information
- Business Address
- Company Branches
- Business Locations
- Branch Details
- Default Branch / Location
- Location Status
- Regional Settings
- Time Zone
- Locale / Language
- Date / Time Format

Ownership boundaries:
- Settings owns branch/location configuration.
- Operations owns day-to-day branch activity.
- Team owns staff-to-location assignment.
- Catalog owns warehouse/stock truth.

## 2. Users & Access

Consolidates User Role, Permission, Security and workspace-access controls.

- Users
- Roles
- Permissions
- Role Templates
- Access by Module
- Branch / Location Access
- Data Access Scope
- Approval Authority
- Security Policies
- Sessions / Devices
- 2FA
- Login Policies

Ownership boundary: Team manages people operationally; Settings owns access control and governance.

## 3. Business & Financial

Consolidates Tax & Currency, Payment Methods and financial defaults without duplicating Finance & Accounting.

### Tax & Currency
- Tax Settings
- Tax Rates
- Tax Rules
- Tax Registration / Identity
- Default Currency
- Multi-currency
- Currency Display
- Rounding Rules

### Payment Methods
- Cash
- Bank Transfer
- Card
- Mobile Money
- Wallet
- Payment Gateway Methods
- Custom Payment Method
- Default Payment Method
- Payment Method Availability by Location / Channel

### Transaction Defaults
- Invoice Numbering
- Receipt Numbering
- Quote Numbering
- Order Numbering
- Payment Terms
- Refund Defaults

Finance & Accounting records actual money and transactions; Settings defines the defaults and policies those modules use.

## 4. Documents & Receipts

Consolidates Receipt Designer and organization-wide document presentation/settings.

### Receipt Designer
- Receipt Layout
- Logo
- Business Details
- Header
- Footer
- Contact Details
- Tax Information
- Payment Details
- Custom Message
- QR / Barcode Area
- Paper Size
- Print / Email Defaults

### Document Templates
- Invoice Template
- Quote Template
- Order Document
- Credit Note Template
- Purchase Document Defaults
- Certificate Defaults
- Document Branding
- Numbering / Sequences

Module-specific editors remain in their canonical modules. Settings owns workspace-wide defaults.

## 5. Brand & Appearance

Combines Brand, Themes and the existing KIOSK Appearance system.

### Brand
- Brand Name
- Logo
- Icon / Favicon
- Brand Colors
- Brand Assets
- Email Branding
- Document Branding
- Storefront Branding Defaults
- Social / Sharing Assets

### Appearance — implemented
- Color Themes
- Theme Style
- Typography
- Text Scale
- Density
- App Layout
- Surface Pattern
- Light / Dark Mode
- Accent Color

Brand controls customer-facing identity. Appearance controls how the KIOSK workspace looks to users.

## 6. Notifications

This is Notification Preferences only; the standalone Notifications module owns alerts, reminders and notification rules.

- In-app
- Email
- SMS
- WhatsApp / Configured Channels
- Priority Preferences
- Delivery Preferences
- Quiet Hours
- Digest Preferences
- Role-based Delivery Defaults

## 7. Integrations

Settings exposes concise integration shortcuts/defaults but does not duplicate the standalone Integrations module.

- Connected Services Summary
- WhatsApp Integration Shortcut
- WordPress / WooCommerce Shortcut
- Meta / Google Shortcut
- Payment Gateway Shortcut
- Shipping Provider Shortcut
- Channel Defaults
- Sync Defaults
- Open Integrations
- Open Marketplace

Canonical ownership:
- Provider connection / OAuth / synchronization → Integrations
- WhatsApp conversations → Inbox & Communications
- WhatsApp broadcasts → Marketing & Growth
- WordPress/WooCommerce connection → Integrations → Commerce Connectors

## 8. Developer

Consolidates API Explorer / Playground, API Keys and developer-oriented webhook tools.

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
- Test Environment / Sandbox

API keys have one canonical home here. Integrations may reference credentials but should not maintain a second API-key store.

## 9. Audit, Backup & Recovery

Combines governance history with business-data resilience.

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

### Backup
- Backup Overview
- Create Backup
- Automatic Backup Policy
- Backup History
- Backup Status
- Export Business Data
- Downloadable Data Export

### Recovery
- Restore Backup
- Recovery Points
- Recovery History
- Restore Scope
- Data Recovery Status

Real backup/restore requires backend storage, encryption, retention policy and permission controls. Current phase is architecture/framework only.

## 10. System

Holds platform-wide configuration and safe testing controls that do not belong in day-to-day operational modules.

### System Configuration
- Business Defaults
- Feature Configuration
- Import / Export Defaults
- Data Settings
- Numbering / Sequence Defaults
- System Information

### Practice Mode
Practice Mode is the canonical name for the BizFlow-style safe training environment.

- Enable Practice Mode
- Demo Transactions
- Demo Customers
- Demo Products
- Demo Inventory
- Reset Practice Data
- Exit Practice Mode

Practice Mode must keep demo activity isolated from production records once a backend exists.

### Test Environment
If a source feature described an “adware test” or similar test/sandbox capability, consolidate it here rather than expose another top-level Settings item.

- Test Environment
- Sandbox Data
- Test Integrations
- Test Webhooks
- Reset Test Environment

## 11. Plans & Billing

This is what the KIOSK customer pays KIOSK for the software, not the customer's own business finances.

- Current Plan
- Subscription
- Usage
- Billing History
- KIOSK Invoices
- Payment Method for KIOSK Subscription
- Upgrade / Downgrade
- Cancel Subscription

## Canonical ownership summary

- Settings → Organization & Locations = organization, branches and regional defaults.
- Settings → Users & Access = roles, permissions and access policy.
- Settings → Business & Financial = tax, currency, payment-method and transaction defaults.
- Settings → Documents & Receipts = receipt designer and workspace document defaults.
- Settings → Brand & Appearance = business branding + KIOSK visual preferences.
- Settings → Notifications = delivery preferences only.
- Integrations = actual external service connections and synchronization.
- Settings → Developer = API keys, API Explorer and developer tools.
- Settings → Audit, Backup & Recovery = governance trail and data resilience.
- Settings → System = platform defaults, Practice Mode and test/sandbox controls.
- Finance & Accounting = actual financial records.
- Team = operational people management.
- Operations = branch/project/task execution.

## Configuration flow

Organization → Locations → Users/Access → Tax/Currency → Payment Methods → Documents/Receipts → Brand/Appearance → Integrations → Security/Audit → Backup → System → Billing

## Deferred implementation

- Replace the current compact Settings tab list with these grouped sections in the main React settings workspace.
- Build actual Organization & Locations forms.
- Build Users & Access role/permission matrix.
- Build tax/currency/payment-method configuration screens.
- Build Receipt Designer UI.
- Build integration shortcuts and connection summaries.
- Build Developer/API Explorer UI.
- Build Audit Log workspace.
- Build backend-backed Backup & Recovery.
- Build isolated Practice Mode/Test Environment data layer.
