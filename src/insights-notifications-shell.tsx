import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bell, BellRing, BarChart3, ChevronDown, FileBarChart, Gauge, LineChart, SlidersHorizontal, Sparkles, TriangleAlert } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };
type GroupDef = { title: string; items: NavItem[] };

const groups: GroupDef[] = [
  { title: 'Reports & Analytics', items: [
    { label: 'Reports Overview', icon: Gauge },
    { label: 'Analytics', icon: BarChart3 },
    { label: 'Reports', icon: FileBarChart },
    { label: 'Financial & Strategic Intelligence', icon: LineChart },
    { label: 'Custom Reporting', icon: SlidersHorizontal },
    { label: 'Dashboards', icon: Gauge },
  ]},
  { title: 'Notifications', items: [
    { label: 'Notification Center', icon: Bell },
    { label: 'Business Alerts', icon: BellRing },
    { label: 'System Alerts', icon: TriangleAlert },
    { label: 'Reminders', icon: Bell },
    { label: 'Notification Rules', icon: Sparkles },
  ]},
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  buttons.find(button => button.textContent?.trim() === label)?.click();
}

function Group({ title, items }: GroupDef) {
  const [open, setOpen] = React.useState(false);
  return <div className="insights-notifications-group">
    <button className="insights-notifications-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}>
      <span>{title}</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
    </button>
    {open && <div className="insights-notifications-items">{items.map(({ label, icon: Icon }) =>
      <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
    )}</div>}
  </div>;
}

function InsightsNotificationsShell() { return <div className="insights-notifications-shell">{groups.map(group => <Group key={group.title} {...group}/>)}</div>; }

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.insights-notifications-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const point = document.createElement('div');
  point.className = 'insights-notifications-mount';
  footer ? sidebar.insertBefore(point, footer) : sidebar.appendChild(point);
  ReactDOM.createRoot(point).render(<InsightsNotificationsShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
