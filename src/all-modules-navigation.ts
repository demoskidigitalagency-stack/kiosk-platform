type MenuNode = {
  label: string;
  children?: MenuNode[];
};

const hierarchy: Record<string, MenuNode[]> = {
  Dashboard: [
    { label: 'Dashboard' },
    { label: 'Today' },
    { label: 'Activity' },
  ],
  Inbox: [
    { label: 'Inbox', children: [{ label: 'All Conversations' }, { label: 'My Conversations' }, { label: 'Unassigned' }, { label: 'Pinned' }] },
    { label: 'WhatsApp', children: [{ label: 'Conversations' }, { label: 'Connected Numbers' }, { label: 'Templates' }, { label: 'Operational Controls' }] },
    { label: 'Email', children: [{ label: 'Inbox' }, { label: 'Sent' }, { label: 'Templates' }] },
    { label: 'SMS', children: [{ label: 'Conversations' }, { label: 'SMS History' }] },
    { label: 'Social Messaging', children: [{ label: 'Instagram' }, { label: 'Messenger' }, { label: 'Telegram' }] },
    { label: 'Web Chat', children: [{ label: 'Website Conversations' }] },
    { label: 'Voice & Calling', children: [
      { label: 'Dialer' }, { label: 'Calls' }, { label: 'Phone Numbers' },
      { label: 'Routing', children: [{ label: 'IVR' }, { label: 'Queues' }, { label: 'Routing Rules' }] },
      { label: 'Records', children: [{ label: 'Recordings' }, { label: 'Voicemail' }, { label: 'Notes' }, { label: 'Dispositions' }] },
      { label: 'Intelligence', children: [{ label: 'Voice Analytics' }, { label: 'Agent Performance' }] },
    ] },
  ],
  Notifications: [
    { label: 'Notification Center' }, { label: 'Business Alerts' }, { label: 'System Alerts' }, { label: 'Reminders' }, { label: 'Notification Rules' },
  ],
  'CRM & Customers': [
    { label: 'Overview' },
    { label: 'Contacts', children: [{ label: 'All Contacts' }, { label: 'Contact Profile' }, { label: 'Import / Export' }, { label: 'Duplicates' }] },
    { label: 'Customers', children: [{ label: 'Customer List' }, { label: 'Customer Center' }, { label: 'Rewards' }] },
    { label: 'Leads', children: [{ label: 'All Leads' }, { label: 'New Leads' }, { label: 'Lead Pipeline' }, { label: 'Lead Assignment' }] },
    { label: 'Companies', children: [{ label: 'Company List' }, { label: 'Company Profiles' }] },
    { label: 'Deals & Pipeline', children: [{ label: 'Deals' }, { label: 'Pipelines' }, { label: 'Stages' }, { label: 'Forecast' }] },
    { label: 'Activities', children: [{ label: 'Tasks' }, { label: 'Follow-ups' }, { label: 'Calls' }, { label: 'Notes' }] },
    { label: 'Meetings' },
    { label: 'Capture & Enrichment', children: [{ label: 'Forms' }, { label: 'Lead Capture' }, { label: 'Enrichment' }, { label: 'Verification' }] },
    { label: 'Product & Service Interest', children: [{ label: 'Interests' }, { label: 'Interest History' }] },
    { label: 'Segmentation', children: [{ label: 'Segments' }, { label: 'Smart Lists' }] },
    { label: 'Intelligence', children: [{ label: 'CRM Analytics' }, { label: 'Lead Intelligence' }] },
    { label: 'Data & Customization', children: [{ label: 'Custom Fields' }, { label: 'Tags' }, { label: 'Import / Export' }, { label: 'Duplicate Rules' }] },
  ],
  Commerce: [
    { label: 'Overview' },
    { label: 'Sell', children: [{ label: 'Point of Sale' }, { label: 'Orders' }, { label: 'Quotes' }, { label: 'Contracts' }] },
    { label: 'Revenue', children: [{ label: 'Invoices' }, { label: 'Payments' }] },
    { label: 'Returns', children: [{ label: 'Returns' }, { label: 'Refunds' }] },
    { label: 'Conversion', children: [{ label: 'Carts' }, { label: 'Checkout' }, { label: 'Abandoned Carts' }, { label: 'Discounts' }] },
    { label: 'Fulfillment', children: [{ label: 'Order Assignment' }, { label: 'Shipping' }, { label: 'Delivery' }] },
    { label: 'My Store Command Center' },
    { label: 'Storefront' },
    { label: 'Reviews & Reputation', children: [{ label: 'Product Reviews' }, { label: 'Store Reviews' }, { label: 'Moderation' }, { label: 'Review Requests' }] },
  ],
  Catalog: [
    { label: 'Overview' },
    { label: 'Products', children: [{ label: 'Product List' }, { label: 'New Product' }, { label: 'Product Details' }] },
    { label: 'Organization', children: [{ label: 'Collections' }, { label: 'Categories' }, { label: 'Departments' }] },
    { label: 'Variants', children: [{ label: 'Variants' }, { label: 'Options' }] },
    { label: 'Pricing', children: [{ label: 'Price Books' }, { label: 'Price Manager' }] },
    { label: 'Inventory', children: [{ label: 'Stock List' }, { label: 'Adjustments' }, { label: 'Physical Inventory' }, { label: 'Reminders' }] },
    { label: 'Warehouses', children: [{ label: 'Warehouses' }, { label: 'Stock Locations' }, { label: 'Transfers' }] },
    { label: 'Imports', children: [{ label: 'Bulk Import' }, { label: 'Dropship Import' }] },
    { label: 'Tools', children: [{ label: 'Barcode' }, { label: 'Product Data Tools' }] },
    { label: 'Sales Channels' },
  ],
  Purchasing: [
    { label: 'Overview' }, { label: 'Suppliers' }, { label: 'Purchase Orders' }, { label: 'Receiving' }, { label: 'Supplier Returns' }, { label: 'Procurement' }, { label: 'Purchasing History' },
  ],
  'Customer Service': [
    { label: 'Overview' }, { label: 'Tickets & Helpdesk' }, { label: 'Complaints' }, { label: 'Knowledge Base' }, { label: 'Customer Portal' }, { label: 'Service Workspace' }, { label: 'Service Reports' },
  ],
  'Marketing & Growth': [
    { label: 'Overview' }, { label: 'Campaigns' }, { label: 'Broadcasts', children: [{ label: 'WhatsApp Broadcasts' }, { label: 'SMS Broadcasts' }, { label: 'Email Broadcasts' }] },
    { label: 'Audience & Targeting', children: [{ label: 'Audiences' }, { label: 'Segments' }, { label: 'Smart Lists' }] },
    { label: 'Templates & Content', children: [{ label: 'WhatsApp Templates' }, { label: 'SMS Templates' }, { label: 'Email Templates' }] },
    { label: 'Content', children: [{ label: 'Content Calendar' }, { label: 'Creative Library' }] },
    { label: 'Advertising', children: [{ label: 'Meta Ads' }, { label: 'Google Ads' }, { label: 'Campaign Attribution' }] },
    { label: 'Promotions' }, { label: 'Loyalty & Rewards' }, { label: 'Recovery' }, { label: 'Experimentation' },
    { label: 'Affiliate Engine', children: [{ label: 'Affiliates' }, { label: 'Referral Links' }, { label: 'Commissions' }, { label: 'Performance' }] },
    { label: 'Campaign Delivery', children: [{ label: 'Speed' }, { label: 'Batching' }, { label: 'Scheduling' }, { label: 'Quiet Hours' }, { label: 'Retries' }] },
    { label: 'Lead Generation', children: [
      { label: 'Dashboard' }, { label: 'Lead Lists' }, { label: 'Saved Searches' },
      { label: 'Prospect', children: [{ label: 'Google Maps Prospector' }, { label: 'Website Scraper' }, { label: 'Business Directory Scraper' }] },
      { label: 'Process', children: [{ label: 'Scrape Jobs' }, { label: 'Enrichment' }, { label: 'Verification' }, { label: 'Deduplication' }] },
      { label: 'CRM Handoff', children: [{ label: 'Review Leads' }, { label: 'Push to CRM' }, { label: 'Export' }] },
    ] },
  ],
  Funnels: [
    { label: 'Overview' }, { label: 'All Funnels' }, { label: 'Funnel Builder' }, { label: 'Funnel Templates' }, { label: 'Steps & Pages' }, { label: 'Landing Pages' }, { label: 'Forms' }, { label: 'Split Tests' }, { label: 'Leads & Conversions' }, { label: 'Funnel Analytics' }, { label: 'Funnel Settings' },
  ],
  Build: [
    { label: 'Website', children: [{ label: 'Website Builder' }, { label: 'Pages' }, { label: 'Navigation' }] },
    { label: 'Storefront', children: [{ label: 'Storefront Builder' }] }, { label: 'Landing Pages' },
    { label: 'Forms', children: [{ label: 'Form Builder' }, { label: 'Lead Forms' }, { label: 'Sales Forms' }] },
    { label: 'Commerce Assets', children: [{ label: 'Order Forms' }, { label: 'Sales Pages' }] },
    { label: 'Pop-ups' }, { label: 'Themes', children: [{ label: 'Themes' }, { label: 'Templates' }] }, { label: 'Domains' }, { label: 'AI Page Builder' },
  ],
  Venture: [
    { label: 'Overview' }, { label: 'Discover', children: [{ label: 'Opportunity Discovery' }, { label: 'Niche Finder' }] }, { label: 'Offer Builder' }, { label: 'Product Library' }, { label: 'Funnel Generator' }, { label: 'Launch Center' }, { label: 'Ads & Social Content' }, { label: 'Export Center' },
  ],
  Operations: [
    { label: 'Overview' },
    { label: 'Projects', children: [{ label: 'All Projects' }, { label: 'Workspace', children: [{ label: 'Overview' }, { label: 'Kanban' }, { label: 'List' }, { label: 'Timeline' }, { label: 'Milestones' }] }, { label: 'Resources', children: [{ label: 'Files' }, { label: 'Activity' }, { label: 'Analytics' }] }] },
    { label: 'Tasks' }, { label: 'Calendar' }, { label: 'Meetings' }, { label: 'Approvals' }, { label: 'Workflows & Checklists' }, { label: 'Documents & E-Signature' }, { label: 'Locations / Branch Operations' },
  ],
  Team: [
    { label: 'Overview' }, { label: 'People' }, { label: 'Teams & Departments' }, { label: 'Roles & Permissions' }, { label: 'Locations & Assignment' },
    { label: 'Sales & Delivery Agents', children: [{ label: 'Agent Directory' }, { label: 'Territory' }, { label: 'Availability' }, { label: 'Assignment' }, { label: 'Performance' }, { label: 'Commission Plan' }] },
    { label: 'Performance' }, { label: 'Team Communication' },
  ],
  HR: [
    { label: 'Overview' }, { label: 'Employee Directory' }, { label: 'Attendance' }, { label: 'Shifts & Scheduling' }, { label: 'Leave & Time Off' }, { label: 'Payroll & Compensation' }, { label: 'Performance Reviews' }, { label: 'Documents & Policies' }, { label: 'Onboarding' }, { label: 'Offboarding' },
  ],
  'Learning & Academy': [
    { label: 'Overview' }, { label: 'Academy' }, { label: 'Course Catalog' }, { label: 'My Learning' }, { label: 'Courses' }, { label: 'Course Builder' }, { label: 'Students' }, { label: 'Enrollments & Cohorts' }, { label: 'Progress' }, { label: 'Certificates' }, { label: 'Learning Analytics' },
  ],
  'Finance & Accounting': [
    { label: 'Overview' }, { label: 'Revenue' }, { label: 'Expenses' }, { label: 'Customer Payments' }, { label: 'Accounts & Wallets' }, { label: 'Accounting' }, { label: 'Cash Management' }, { label: 'Taxes' },
    { label: 'Earnings & Commissions', children: [{ label: 'My Earnings' }, { label: 'Staff Earnings' }, { label: 'Agent Commissions' }, { label: 'Affiliate Earnings' }, { label: 'Commission Rules' }, { label: 'Adjustments' }, { label: 'Pending / Approved / Paid' }, { label: 'Payout History' }] },
    { label: 'Financial Reports' },
  ],
  'Reports & Analytics': [
    { label: 'Overview' }, { label: 'Analytics' }, { label: 'Reports' }, { label: 'Custom Reports & Dashboards' }, { label: 'Sales & Revenue' }, { label: 'Attribution' }, { label: 'Marketing' }, { label: 'Funnel' }, { label: 'Team & Agent Performance' }, { label: 'Operations' }, { label: 'Communications', children: [{ label: 'WhatsApp Analytics' }, { label: 'Email Analytics' }, { label: 'SMS Analytics' }, { label: 'Voice Analytics' }] }, { label: 'Financial & Strategic Intelligence' },
  ],
  'Planning & Strategy': [
    { label: 'Strategy' }, { label: 'Business Plan' }, { label: 'Market & Competitive Analysis' }, { label: 'Business Model' }, { label: 'Financial Models', children: [{ label: 'DCF' }, { label: 'Five-Year Projection' }, { label: 'Break-even' }] }, { label: 'Specialized Models', children: [{ label: 'SaaS Model' }, { label: 'E-commerce Model' }] }, { label: 'Scenario Planning', children: [{ label: 'Scenarios' }, { label: 'Burn Rate' }, { label: 'Runway' }] }, { label: 'KPI Dashboard' }, { label: 'Execution', children: [{ label: 'Roadmaps' }, { label: 'Project Charter' }] },
  ],
  Automation: [
    { label: 'Overview' }, { label: 'Workflows' }, { label: 'Workflow Builder' }, { label: 'Building Blocks', children: [{ label: 'Triggers' }, { label: 'Actions' }, { label: 'Conditions' }, { label: 'Branches' }] }, { label: 'Workflow Templates' }, { label: 'Scheduled Automations' }, { label: 'Management', children: [{ label: 'Active' }, { label: 'Paused' }] }, { label: 'Monitoring', children: [{ label: 'Run History' }, { label: 'Logs' }, { label: 'Errors' }] }, { label: 'Automation Analytics' },
  ],
  'AI Studio': [
    { label: 'Overview' }, { label: 'AI Assistant' },
    { label: 'AI Agents', children: [{ label: 'Agent Library' }, { label: 'Create Agent' }, { label: 'Configuration', children: [{ label: 'Instructions' }, { label: 'Data Sources' }, { label: 'Skills' }, { label: 'Permissions' }] }, { label: 'Actions & Tools' }, { label: 'Testing', children: [{ label: 'Test Runs' }, { label: 'Activity' }, { label: 'Analytics' }] }] },
    { label: 'Content & Images' }, { label: 'Research & Intelligence' }, { label: 'Product Intelligence' }, { label: 'Brand Voice' }, { label: 'AI Autofill' }, { label: 'Reply Suggestions' }, { label: 'Installed Skills' }, { label: 'AI Activity' }, { label: 'AI Settings' },
  ],
  Integrations: [
    { label: 'Overview' }, { label: 'Connected Apps' }, { label: 'Marketplace', children: [{ label: 'Apps' }, { label: 'Plugins' }, { label: 'Extensions' }, { label: 'Templates' }, { label: 'AI Skills' }] }, { label: 'Commerce Connectors' }, { label: 'Marketing & Advertising Connectors' }, { label: 'Communication Connectors', children: [{ label: 'WhatsApp' }, { label: 'Email' }, { label: 'SMS' }, { label: 'Voice Providers' }, { label: 'Social Messaging' }] }, { label: 'Payment Connectors' }, { label: 'Business Connectors' }, { label: 'Webhooks' }, { label: 'Sync Activity' },
  ],
  Settings: [
    { label: 'Organization & Workspace Management', children: [{ label: 'Organization Profile' }, { label: 'Workspaces' }, { label: 'Locations' }] },
    { label: 'Users & Access' }, { label: 'Business & Financial' }, { label: 'Documents & Receipts' },
    { label: 'Brand & Appearance', children: [{ label: 'Appearance', children: [{ label: 'Color Theme' }, { label: 'Theme Style' }, { label: 'Typography' }, { label: 'Text Size' }, { label: 'Density' }, { label: 'Workspace Layout' }, { label: 'Surface Pattern' }, { label: 'Light / Dark Mode' }, { label: 'Brand Accent' }] }, { label: 'Branding' }] },
    { label: 'Notifications' }, { label: 'Integrations' },
    { label: 'Developer', children: [{ label: 'API Keys' }, { label: 'API Explorer' }, { label: 'OAuth' }, { label: 'Tokens' }, { label: 'API Usage' }, { label: 'Rate Limits' }, { label: 'Developer Logs' }] },
    { label: 'Audit & Compliance', children: [{ label: 'Audit Log' }, { label: 'Security Events' }, { label: 'Data Changes' }] },
    { label: 'Backup & Recovery', children: [{ label: 'Backups' }, { label: 'Restore' }, { label: 'Restore Points' }, { label: 'Export' }, { label: 'Reset Store Data' }] },
    { label: 'Security & Verification', children: [{ label: 'Email Verification' }, { label: 'Phone Verification' }, { label: 'Business Verification' }, { label: '2FA' }] },
    { label: 'System' },
    { label: 'Plans & Billing', children: [{ label: 'Plan' }, { label: 'KIOSK Credits' }, { label: 'Usage' }, { label: 'Payment Method' }, { label: 'KIOSK Invoices' }, { label: 'Billing History' }] },
  ],
};

const normalize = (value: string) => value.replace(/\s+/g, ' ').trim().toLowerCase();

function addStyles() {
  if (document.getElementById('kiosk-hierarchical-nav-style')) return;
  const style = document.createElement('style');
  style.id = 'kiosk-hierarchical-nav-style';
  style.textContent = `
    .kiosk-nav-parent{position:relative}
    .kiosk-nav-parent>.kiosk-nav-toggle{margin-left:auto;width:24px;height:24px;border:0;background:transparent;color:var(--sidebar-muted);display:grid;place-items:center;border-radius:6px;transition:.16s ease;flex:0 0 auto}
    .kiosk-nav-parent>.kiosk-nav-toggle:hover{background:rgba(148,163,184,.12);color:var(--sidebar-text)}
    .kiosk-nav-parent.expanded>.kiosk-nav-toggle{transform:rotate(90deg)}
    .kiosk-submenu{display:none;margin:2px 0 8px 28px;border-left:1px solid rgba(148,163,184,.18);padding-left:7px}
    .kiosk-submenu.open{display:block}
    .kiosk-submenu-row{position:relative}
    .kiosk-submenu-button{width:100%;border:0;background:transparent;color:var(--sidebar-muted);padding:6px 8px;border-radius:7px;text-align:left;font-size:11.5px;display:flex;align-items:center;gap:6px;cursor:pointer}
    .kiosk-submenu-button:hover{background:rgba(148,163,184,.1);color:var(--sidebar-text)}
    .kiosk-submenu-button .kiosk-node-dot{width:5px;height:5px;border-radius:999px;background:currentColor;opacity:.45;flex:0 0 auto}
    .kiosk-submenu-button .kiosk-node-label{flex:1;min-width:0}
    .kiosk-node-chevron{font-size:12px;opacity:.7;transition:.16s ease}
    .kiosk-submenu-row.open>.kiosk-submenu-button .kiosk-node-chevron{transform:rotate(90deg)}
    .kiosk-submenu-children{display:none;margin-left:11px;border-left:1px solid rgba(148,163,184,.14);padding-left:5px}
    .kiosk-submenu-row.open>.kiosk-submenu-children{display:block}
    .kiosk-submenu-children .kiosk-submenu-button{font-size:10.8px;padding:5px 7px}
    .kiosk-submenu-children .kiosk-submenu-children .kiosk-submenu-button{font-size:10.2px;opacity:.92}
    .collapsed .kiosk-nav-toggle,.collapsed .kiosk-submenu{display:none!important}
  `;
  document.head.appendChild(style);
}

function renderNodes(nodes: MenuNode[], parentButton: HTMLButtonElement) {
  const container = document.createElement('div');
  container.className = 'kiosk-submenu';

  const renderLevel = (items: MenuNode[], host: HTMLElement) => {
    items.forEach((node) => {
      const row = document.createElement('div');
      row.className = 'kiosk-submenu-row';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'kiosk-submenu-button';
      button.innerHTML = `<span class="kiosk-node-dot"></span><span class="kiosk-node-label"></span>${node.children?.length ? '<span class="kiosk-node-chevron">›</span>' : ''}`;
      const label = button.querySelector<HTMLElement>('.kiosk-node-label');
      if (label) label.textContent = node.label;
      button.title = node.label;
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        if (node.children?.length) row.classList.toggle('open');
        else parentButton.click();
      });
      row.appendChild(button);
      if (node.children?.length) {
        const children = document.createElement('div');
        children.className = 'kiosk-submenu-children';
        renderLevel(node.children, children);
        row.appendChild(children);
      }
      host.appendChild(row);
    });
  };

  renderLevel(nodes, container);
  return container;
}

function enhanceNavigation() {
  const nav = document.querySelector<HTMLElement>('.sidebar-nav');
  if (!nav) return;

  nav.querySelector('.kiosk-all-modules-directory')?.remove();
  addStyles();

  [...nav.querySelectorAll<HTMLButtonElement>('.nav-item')].forEach((button) => {
    if (button.dataset.kioskHierarchy === 'true') return;
    const label = (button.querySelector('.nav-label')?.textContent || button.textContent || '').trim();
    const nodes = hierarchy[label];
    if (!nodes?.length) return;

    button.dataset.kioskHierarchy = 'true';
    button.classList.add('kiosk-nav-parent');

    const toggle = document.createElement('span');
    toggle.className = 'kiosk-nav-toggle';
    toggle.textContent = '›';
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('aria-label', `Expand ${label}`);
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const submenu = button.nextElementSibling as HTMLElement | null;
      const shouldOpen = !submenu?.classList.contains('open');
      nav.querySelectorAll('.kiosk-submenu.open').forEach((menu) => {
        if (menu !== submenu) menu.classList.remove('open');
      });
      nav.querySelectorAll('.kiosk-nav-parent.expanded').forEach((parent) => {
        if (parent !== button) parent.classList.remove('expanded');
      });
      submenu?.classList.toggle('open', shouldOpen);
      button.classList.toggle('expanded', shouldOpen);
    });
    button.appendChild(toggle);

    const submenu = renderNodes(nodes, button);
    button.insertAdjacentElement('afterend', submenu);
  });
}

export function installAllModulesNavigation() {
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      enhanceNavigation();
    });
  };
  schedule();
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
}
