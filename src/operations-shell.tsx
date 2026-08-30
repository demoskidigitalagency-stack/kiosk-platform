import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarDays, CheckSquare2, ChevronDown, FileSignature, FolderKanban, MapPin, Repeat2, UsersRound } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };

const operationItems: NavItem[] = [
  { label: 'Operations Overview', icon: FolderKanban },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Tasks', icon: CheckSquare2 },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Meetings', icon: UsersRound },
  { label: 'Approvals', icon: CheckSquare2 },
  { label: 'Workflows', icon: Repeat2 },
  { label: 'Documents & E-Signature', icon: FileSignature },
  { label: 'Locations / Branch Operations', icon: MapPin },
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  const target = buttons.find((button) => button.textContent?.trim() === label);
  target?.click();
}

function OperationsShell() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="operations-shell">
      <div className="operations-group">
        <button className="operations-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
          <span>Operations</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
        </button>
        {open && <div className="operations-items">{operationItems.map(({ label, icon: Icon }) => (
          <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
        ))}</div>}
      </div>
    </div>
  );
}

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.operations-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const mountPoint = document.createElement('div');
  mountPoint.className = 'operations-mount';
  footer ? sidebar.insertBefore(mountPoint, footer) : sidebar.appendChild(mountPoint);
  ReactDOM.createRoot(mountPoint).render(<OperationsShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
