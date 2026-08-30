import { createRoot, type Root } from 'react-dom/client';
import { CustomDashboard } from './CustomDashboard';

let root: Root | null = null;
let host: HTMLDivElement | null = null;
let hiddenNodes: HTMLElement[] = [];
let scheduled = false;

function isDashboardActive() {
  const active = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item.active'));
  return active.some(button => button.textContent?.trim() === 'Dashboard');
}

function restore() {
  hiddenNodes.forEach(node => { node.style.display = ''; });
  hiddenNodes = [];
  if (root) { root.unmount(); root = null; }
  host?.remove(); host = null;
}

function openToday() {
  const button = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item')).find(el => el.textContent?.trim() === 'Today');
  button?.click();
}

function syncDashboard() {
  scheduled = false;
  const content = document.querySelector<HTMLElement>('.content');
  if (!content || !isDashboardActive()) { if (host) restore(); return; }
  if (host && content.contains(host)) return;

  restore();
  hiddenNodes = Array.from(content.children).filter((node): node is HTMLElement => node instanceof HTMLElement);
  hiddenNodes.forEach(node => { node.style.display = 'none'; });
  host = document.createElement('div');
  host.className = 'custom-dashboard-host';
  content.appendChild(host);
  root = createRoot(host);
  root.render(<CustomDashboard onOpenToday={openToday}/>);
}

function scheduleSync() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(syncDashboard);
}

const observer = new MutationObserver(scheduleSync);
observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
requestAnimationFrame(syncDashboard);
