import { createRoot, type Root } from 'react-dom/client';
import {
  Activity, BarChart3, Building2, ChevronDown, ChevronRight, ContactRound,
  Database, Handshake, LayoutDashboard, Radar, UsersRound,
} from 'lucide-react';

const crmItems = [
  ['CRM Overview', LayoutDashboard],
  ['Contacts', ContactRound],
  ['Contact Capture & Enrichment', Radar],
  ['Customers', UsersRound],
  ['Leads', ContactRound],
  ['Companies', Building2],
  ['Deals & Pipeline', Handshake],
  ['Activities & Follow-ups', Activity],
  ['Meetings', UsersRound],
  ['CRM Intelligence', BarChart3],
  ['Data & Customization', Database],
] as const;

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let open = true;

function openExistingPage(label: string) {
  const button = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'))
    .find(el => el.textContent?.trim() === label);
  button?.click();
}

function CRMNavigation() {
  return <div className="module-nav-block crm-nav-block">
    <button className="module-nav-heading" onClick={() => { open = !open; render(); }}>
      <span>CRM</span>{open ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}
    </button>
    {open && <div className="module-nav-content">
      {crmItems.map(([label, Icon]) => <button className="nav-item crm-nav-item" key={label} onClick={() => openExistingPage(label)}>
        <Icon size={17}/><span>{label}</span>
      </button>)}
    </div>}
  </div>;
}

function render() { if (root && host) root.render(<CRMNavigation/>); }

function mountCRMNavigation() {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (!sidebar) return;
  if (host && sidebar.contains(host)) return;
  root?.unmount(); host?.remove();

  const workspaceLabel = Array.from(sidebar.querySelectorAll<HTMLElement>('.overview-nav-label'))
    .find(label => label.textContent?.trim() === 'Workspace');
  if (!workspaceLabel) return;

  host = document.createElement('div');
  host.className = 'crm-nav-host';
  sidebar.insertBefore(host, workspaceLabel);
  root = createRoot(host);
  render();
}

const observer = new MutationObserver(() => requestAnimationFrame(mountCRMNavigation));
observer.observe(document.documentElement, { childList: true, subtree: true });
requestAnimationFrame(mountCRMNavigation);
