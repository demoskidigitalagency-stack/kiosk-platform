type ModuleEntry = {
  label: string;
  parent: string;
  description: string;
};

type ModuleGroup = {
  label: string;
  items: ModuleEntry[];
};

const registry: ModuleGroup[] = [
  {
    label: 'Workspace',
    items: [
      { label: 'Dashboard', parent: 'Dashboard', description: 'Executive workspace overview.' },
      { label: 'Today', parent: 'Today', description: 'Work that needs attention today.' },
      { label: 'Activity', parent: 'Dashboard', description: 'Cross-workspace activity history.' },
      { label: 'Inbox & Communications', parent: 'Inbox', description: 'Unified customer and team conversations.' },
      { label: 'Voice & Calling', parent: 'Inbox', description: 'Calls, numbers, routing, IVR, recordings, voicemail and call analytics.' },
      { label: 'WhatsApp Operations', parent: 'Inbox', description: 'WhatsApp numbers, templates, conversations and operational controls.' },
      { label: 'Notifications', parent: 'Notifications', description: 'Business alerts, reminders and system notices.' },
      { label: 'Global Search / Command Center', parent: 'Dashboard', description: 'Search records, pages and actions with Ctrl/Cmd+K.' },
      { label: 'Global KIOSK Copilot', parent: 'AI Studio', description: 'Platform-wide contextual AI assistant.' },
    ],
  },
  {
    label: 'Sales & Customers',
    items: [
      { label: 'CRM & Customers', parent: 'CRM & Customers', description: 'Contacts, leads, customers, companies, deals and activities.' },
      { label: 'Product & Service Interest', parent: 'CRM & Customers', description: 'Track what each contact is interested in across conversations and campaigns.' },
      { label: 'Commerce', parent: 'Commerce', description: 'POS, orders, invoices, payments, returns and fulfillment.' },
      { label: 'My Store Command Center', parent: 'Commerce', description: 'Seller command center across storefront, catalog, orders and inventory.' },
      { label: 'Reviews & Reputation', parent: 'Commerce', description: 'Product/store reviews, requests, moderation and ratings.' },
      { label: 'Catalog', parent: 'Catalog', description: 'Products, variants, inventory, warehouses and price books.' },
      { label: 'Purchasing', parent: 'Purchasing', description: 'Suppliers, purchase orders, receiving and procurement.' },
      { label: 'Customer Service', parent: 'Customer Service', description: 'Tickets, complaints, knowledge base and customer portal.' },
    ],
  },
  {
    label: 'Growth',
    items: [
      { label: 'Marketing & Growth', parent: 'Marketing & Growth', description: 'Campaigns, broadcasts, audiences, promotions and advertising.' },
      { label: 'Lead Generation', parent: 'Marketing & Growth', description: 'Prospecting, scraping, enrichment, verification and CRM import.' },
      { label: 'Affiliate Engine', parent: 'Marketing & Growth', description: 'Affiliates, referral links, commissions and performance.' },
      { label: 'Funnels', parent: 'Funnels', description: 'Funnels, landing pages, forms, split tests and conversions.' },
      { label: 'Build', parent: 'Build', description: 'Website, storefront, forms, pages, popups and themes.' },
      { label: 'Venture', parent: 'Venture', description: 'Niche discovery, offer design, funnel generation and launch.' },
    ],
  },
  {
    label: 'Operations & People',
    items: [
      { label: 'Operations', parent: 'Operations', description: 'Projects, tasks, meetings, approvals, documents and branches.' },
      { label: 'Projects', parent: 'Operations', description: 'Project boards, timelines, milestones, files and analytics.' },
      { label: 'Team', parent: 'Team', description: 'People, departments, permissions, assignments and performance.' },
      { label: 'Sales & Delivery Agents', parent: 'Team', description: 'Agent profiles, territories, assignment, availability and performance.' },
      { label: 'HR', parent: 'HR', description: 'Employees, attendance, leave, payroll, reviews and onboarding.' },
      { label: 'Learning & Academy', parent: 'Learning & Academy', description: 'Courses, students, progress, certificates and academy analytics.' },
    ],
  },
  {
    label: 'Business Intelligence',
    items: [
      { label: 'Finance & Accounting', parent: 'Finance & Accounting', description: 'Revenue, expenses, accounting, wallets, cash and taxes.' },
      { label: 'Earnings & Commissions', parent: 'Finance & Accounting', description: 'Staff, agent and affiliate earnings, rules and payouts.' },
      { label: 'Reports & Analytics', parent: 'Reports & Analytics', description: 'Cross-module dashboards, attribution and business intelligence.' },
      { label: 'Planning & Strategy', parent: 'Planning & Strategy', description: 'Business planning, market analysis, financial models and KPIs.' },
      { label: 'Automation', parent: 'Automation', description: 'Workflows, triggers, actions, schedules, run history and errors.' },
      { label: 'AI Studio', parent: 'AI Studio', description: 'AI assistant, research, content, skills, agents and activity.' },
      { label: 'AI Agents', parent: 'AI Studio', description: 'Create and manage task-specific AI agents and permissions.' },
    ],
  },
  {
    label: 'Platform',
    items: [
      { label: 'Integrations', parent: 'Integrations', description: 'Connected apps, connectors, webhooks and sync activity.' },
      { label: 'Marketplace', parent: 'Integrations', description: 'Apps, plugins, extensions, templates and AI skills.' },
      { label: 'Payment Connectors', parent: 'Integrations', description: 'Payment gateway and commerce payment integrations.' },
      { label: 'Communication Connectors', parent: 'Integrations', description: 'WhatsApp, email, SMS, voice and social messaging providers.' },
      { label: 'Settings', parent: 'Settings', description: 'Workspace configuration and governance.' },
      { label: 'Appearance', parent: 'Settings', description: 'Color, style, typography, density, layout, surfaces and theme mode.' },
      { label: 'Security & Verification', parent: 'Settings', description: 'Account, phone, email, business verification and security policies.' },
      { label: 'Developer', parent: 'Settings', description: 'API keys, API explorer, OAuth, tokens and developer logs.' },
      { label: 'Audit, Backup & Recovery', parent: 'Settings', description: 'Audit trail, security events, backups, restore points and recovery.' },
      { label: 'Plans & Billing', parent: 'Settings', description: 'KIOSK plans, credits, usage, invoices and billing history.' },
      { label: 'Organization & Workspace Management', parent: 'Settings', description: 'Organizations, workspaces, locations and access scope.' },
      { label: 'Super Admin', parent: 'Settings', description: 'Platform administration for authorized users.' },
    ],
  },
];

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim().toLowerCase();

function findReactButton(label: string) {
  const target = normalize(label);
  return [...document.querySelectorAll<HTMLButtonElement>('.sidebar-nav .nav-item')]
    .find((button) => normalize(button.textContent || '') === target);
}

function openParent(parent: string) {
  const aliases: Record<string, string> = {
    'Inbox & Communications': 'Inbox',
  };
  const target = findReactButton(aliases[parent] || parent);
  target?.click();
}

function addStyles() {
  if (document.getElementById('kiosk-all-modules-style')) return;
  const style = document.createElement('style');
  style.id = 'kiosk-all-modules-style';
  style.textContent = `
    .kiosk-all-modules-directory{margin-top:10px;padding-top:10px;border-top:1px solid rgba(148,163,184,.16)}
    .kiosk-module-directory-title{padding:8px 10px 4px;font-size:10px;text-transform:uppercase;letter-spacing:.12em;font-weight:900;color:var(--sidebar-muted)}
    .kiosk-module-directory-note{padding:0 10px 8px;font-size:10px;line-height:1.4;color:var(--sidebar-muted)}
    .kiosk-module-group{margin-bottom:11px}
    .kiosk-module-group-title{font-size:9px;text-transform:uppercase;letter-spacing:.09em;color:var(--sidebar-muted);font-weight:850;padding:7px 10px 4px}
    .kiosk-module-item{position:relative}
    .kiosk-module-item::after{content:'›';margin-left:auto;color:var(--sidebar-muted);font-size:14px}
    .kiosk-module-icon{width:18px;height:18px;border-radius:5px;display:grid;place-items:center;flex:0 0 auto;background:color-mix(in srgb,var(--accent) 18%,transparent);color:var(--accent);font-size:9px;font-weight:900}
    .collapsed .kiosk-module-directory-title,.collapsed .kiosk-module-directory-note,.collapsed .kiosk-module-group-title,.collapsed .kiosk-module-item .nav-label,.collapsed .kiosk-module-item::after{display:none}
    .collapsed .kiosk-module-item{justify-content:center}
  `;
  document.head.appendChild(style);
}

function renderDirectory() {
  const nav = document.querySelector<HTMLElement>('.sidebar-nav');
  if (!nav || nav.querySelector('.kiosk-all-modules-directory')) return;
  addStyles();

  const wrapper = document.createElement('div');
  wrapper.className = 'kiosk-all-modules-directory';

  const heading = document.createElement('div');
  heading.className = 'kiosk-module-directory-title';
  heading.textContent = 'All Modules';
  wrapper.appendChild(heading);

  const note = document.createElement('div');
  note.className = 'kiosk-module-directory-note';
  note.textContent = 'Permanent complete module registry. Major capabilities stay visible even while deeper workspaces are being wired.';
  wrapper.appendChild(note);

  const existing = new Set(
    [...nav.querySelectorAll<HTMLButtonElement>('.nav-item')].map((button) => normalize(button.textContent || '')),
  );

  registry.forEach((group) => {
    const section = document.createElement('div');
    section.className = 'kiosk-module-group';
    const title = document.createElement('div');
    title.className = 'kiosk-module-group-title';
    title.textContent = group.label;
    section.appendChild(title);

    group.items.forEach((item) => {
      if (existing.has(normalize(item.label))) return;
      const button = document.createElement('button');
      button.className = 'nav-item kiosk-module-item';
      button.type = 'button';
      button.title = `${item.label} — ${item.description}`;
      button.innerHTML = `<span class="kiosk-module-icon">K</span><span class="nav-label">${item.label}</span>`;
      button.addEventListener('click', () => openParent(item.parent));
      section.appendChild(button);
    });

    if (section.querySelector('.kiosk-module-item')) wrapper.appendChild(section);
  });

  nav.appendChild(wrapper);
}

export function installAllModulesNavigation() {
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      renderDirectory();
    });
  };

  schedule();
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
}
