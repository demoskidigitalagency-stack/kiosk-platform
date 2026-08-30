import { createRoot, type Root } from 'react-dom/client';
import {
  BookOpen, ChevronDown, ChevronRight, CircleHelp, Gauge, Headphones,
  MessageCircleWarning, ShieldCheck, TicketCheck, UserRoundCheck,
} from 'lucide-react';

const serviceItems = [
  ['Service Overview', Gauge],
  ['Tickets & Helpdesk', TicketCheck],
  ['Complaints', MessageCircleWarning],
  ['Knowledge Base', BookOpen],
  ['Customer Portal', UserRoundCheck],
  ['Service Workspace', Headphones],
  ['Service Reports', ShieldCheck],
] as const;

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let open = true;

function openExistingPage(label: string) {
  const button = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'))
    .find(el => el.textContent?.trim() === label);
  button?.click();
}

function CustomerServiceNavigation() {
  return <div className="module-nav-block customer-service-nav-block">
    <button className="module-nav-heading" onClick={() => { open = !open; render(); }}>
      <span><CircleHelp size={15}/> Customer Service</span>
      {open ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}
    </button>
    {open && <div className="module-nav-content">
      {serviceItems.map(([label, Icon]) => (
        <button className="nav-item customer-service-nav-item" key={label} onClick={() => openExistingPage(label)}>
          <Icon size={17}/><span>{label}</span>
        </button>
      ))}
    </div>}
  </div>;
}

function render() { if (root && host) root.render(<CustomerServiceNavigation/>); }

function mountCustomerServiceNavigation() {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (!sidebar) return;
  if (host && sidebar.contains(host)) return;
  root?.unmount();
  host?.remove();

  const workspaceLabel = Array.from(sidebar.querySelectorAll<HTMLElement>('.overview-nav-label'))
    .find(label => label.textContent?.trim() === 'Workspace');
  if (!workspaceLabel) return;

  host = document.createElement('div');
  host.className = 'customer-service-nav-host';
  sidebar.insertBefore(host, workspaceLabel);
  root = createRoot(host);
  render();
}

const observer = new MutationObserver(() => requestAnimationFrame(mountCustomerServiceNavigation));
observer.observe(document.documentElement, { childList: true, subtree: true });
requestAnimationFrame(mountCustomerServiceNavigation);
