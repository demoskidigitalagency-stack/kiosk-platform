import React from 'react';
import ReactDOM from 'react-dom/client';
import { Blocks, ChevronDown, Code2, Plug, Puzzle, RefreshCw, ShoppingBag, Store, Webhook, Workflow, Zap } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };

const items: NavItem[] = [
  { label: 'Integration Overview', icon: Plug },
  { label: 'Apps & Integrations', icon: Blocks },
  { label: 'Marketplace', icon: Store },
  { label: 'Commerce Connectors', icon: ShoppingBag },
  { label: 'Marketing & Advertising', icon: Zap },
  { label: 'Communication Connectors', icon: Workflow },
  { label: 'Business Connectors', icon: Puzzle },
  { label: 'Webhooks', icon: Webhook },
  { label: 'Sync Activity', icon: RefreshCw },
  { label: 'Developer Tools', icon: Code2 },
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  buttons.find(button => button.textContent?.trim() === label)?.click();
}

function IntegrationsShell() {
  const [open, setOpen] = React.useState(false);
  return <div className="integrations-shell">
    <div className="integrations-group">
      <button className="integrations-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>Integrations</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
      </button>
      {open && <div className="integrations-items">{items.map(({ label, icon: Icon }) =>
        <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
      )}</div>}
    </div>
  </div>;
}

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.integrations-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const point = document.createElement('div');
  point.className = 'integrations-mount';
  footer ? sidebar.insertBefore(point, footer) : sidebar.appendChild(point);
  ReactDOM.createRoot(point).render(<IntegrationsShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
