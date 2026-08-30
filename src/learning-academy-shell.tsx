import React from 'react';
import ReactDOM from 'react-dom/client';
import { Award, BarChart3, BookOpen, ChevronDown, GraduationCap, HandCoins, Library, School, Users } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };

const items: NavItem[] = [
  { label: 'Learning Overview', icon: GraduationCap },
  { label: 'Academy', icon: School },
  { label: 'Courses', icon: BookOpen },
  { label: 'Course Builder', icon: Library },
  { label: 'Students', icon: Users },
  { label: 'My Learning', icon: GraduationCap },
  { label: 'Certificates', icon: Award },
  { label: 'Affiliates', icon: HandCoins },
  { label: 'Learning Analytics', icon: BarChart3 },
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  buttons.find(button => button.textContent?.trim() === label)?.click();
}

function LearningAcademyShell() {
  const [open, setOpen] = React.useState(false);
  return <div className="learning-academy-shell">
    <div className="learning-academy-group">
      <button className="learning-academy-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>Learning &amp; Academy</span><ChevronDown size={15} className={open ? 'rotated' : ''}/>
      </button>
      {open && <div className="learning-academy-items">{items.map(({ label, icon: Icon }) =>
        <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>
      )}</div>}
    </div>
  </div>;
}

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.learning-academy-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const point = document.createElement('div');
  point.className = 'learning-academy-mount';
  footer ? sidebar.insertBefore(point, footer) : sidebar.appendChild(point);
  ReactDOM.createRoot(point).render(<LearningAcademyShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
