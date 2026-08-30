import React from 'react';
import ReactDOM from 'react-dom/client';
import { Building2, ChevronDown, ClipboardList, IdCard, MapPin, Megaphone, ShieldCheck, Target, Users, UserRoundCog, Clock3, CalendarClock, WalletCards, FileCheck2, UserPlus, UserMinus } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };

const teamItems: NavItem[] = [
  { label: 'Team Overview', icon: Users },
  { label: 'People', icon: UserRoundCog },
  { label: 'Teams & Departments', icon: Building2 },
  { label: 'Roles & Permissions', icon: ShieldCheck },
  { label: 'Locations & Assignment', icon: MapPin },
  { label: 'Performance', icon: Target },
  { label: 'Team Communication', icon: Megaphone },
];

const hrItems: NavItem[] = [
  { label: 'HR Overview', icon: IdCard },
  { label: 'Employee Directory', icon: Users },
  { label: 'Attendance', icon: Clock3 },
  { label: 'Shifts & Scheduling', icon: CalendarClock },
  { label: 'Leave & Time Off', icon: ClipboardList },
  { label: 'Payroll & Compensation', icon: WalletCards },
  { label: 'Performance Reviews', icon: Target },
  { label: 'Documents & Policies', icon: FileCheck2 },
  { label: 'Onboarding', icon: UserPlus },
  { label: 'Offboarding', icon: UserMinus },
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  const target = buttons.find((button) => button.textContent?.trim() === label);
  target?.click();
}

function Group({ title, items }: { title: string; items: NavItem[] }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="people-admin-group">
      <button className="people-admin-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span>{title}</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
      </button>
      {open && <div className="people-admin-items">{items.map(({ label, icon: Icon }) => (
        <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
      ))}</div>}
    </div>
  );
}

function PeopleAdminShell() {
  return <div className="people-admin-shell"><Group title="Team" items={teamItems}/><Group title="HR" items={hrItems}/></div>;
}

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.people-admin-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const mountPoint = document.createElement('div');
  mountPoint.className = 'people-admin-mount';
  footer ? sidebar.insertBefore(mountPoint, footer) : sidebar.appendChild(mountPoint);
  ReactDOM.createRoot(mountPoint).render(<PeopleAdminShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
