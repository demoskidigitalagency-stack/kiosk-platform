import React from 'react';
import ReactDOM from 'react-dom/client';
import { BarChart3, BookOpen, BriefcaseBusiness, CalendarDays, ChevronDown, CircleDollarSign, CreditCard, FileBarChart, Landmark, LineChart, Map, Receipt, Scale, Target, WalletCards } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };
type GroupDef = { title: string; items: NavItem[] };

const groups: GroupDef[] = [
  { title: 'Planning & Strategy', items: [
    { label: 'Strategy Overview', icon: Target },
    { label: 'Business Planning', icon: BriefcaseBusiness },
    { label: 'Market & Competitive Analysis', icon: BarChart3 },
    { label: 'Business Model', icon: BookOpen },
    { label: 'Financial Models', icon: LineChart },
    { label: 'KPI Dashboard', icon: BarChart3 },
    { label: 'Execution Planning', icon: Map },
    { label: 'Project Charter', icon: Map },
  ]},
  { title: 'Finance & Accounting', items: [
    { label: 'Finance Overview', icon: CircleDollarSign },
    { label: 'Sales Finance', icon: Receipt },
    { label: 'Expenses', icon: CreditCard },
    { label: 'Accounts & Wallets', icon: WalletCards },
    { label: 'Accounting', icon: Landmark },
    { label: 'Cash Management', icon: CircleDollarSign },
    { label: 'Taxes', icon: Scale },
    { label: 'Financial Reports', icon: FileBarChart },
  ]},
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  buttons.find(button => button.textContent?.trim() === label)?.click();
}

function Group({ title, items }: GroupDef) {
  const [open, setOpen] = React.useState(false);
  return <div className="finance-planning-group">
    <button className="finance-planning-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}>
      <span>{title}</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
    </button>
    {open && <div className="finance-planning-items">{items.map(({ label, icon: Icon }) =>
      <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
    )}</div>}
  </div>;
}

function FinancePlanningShell() { return <div className="finance-planning-shell">{groups.map(group => <Group key={group.title} {...group}/>)}</div>; }

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.finance-planning-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const point = document.createElement('div');
  point.className = 'finance-planning-mount';
  footer ? sidebar.insertBefore(point, footer) : sidebar.appendChild(point);
  ReactDOM.createRoot(point).render(<FinancePlanningShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
