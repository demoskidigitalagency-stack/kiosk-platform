import React from 'react';
import ReactDOM from 'react-dom/client';
import { Bot, ChevronDown, FlaskConical, Inbox, Megaphone, Network, Rocket, Sparkles, Workflow } from 'lucide-react';

type NavItem = { label: string; icon: React.ComponentType<{ size?: number }> };
type GroupDef = { title: string; items: NavItem[] };

const groups: GroupDef[] = [
  { title: 'Inbox & Communications', items: [
    { label: 'Inbox Overview', icon: Inbox }, { label: 'All Conversations', icon: Inbox },
    { label: 'My Conversations', icon: Inbox }, { label: 'Unassigned', icon: Inbox },
    { label: 'Pinned', icon: Inbox }, { label: 'Channels', icon: Network },
    { label: 'Channel Setup', icon: Network }, { label: 'Conversation Management', icon: Network },
    { label: 'Message Templates', icon: Megaphone }, { label: 'Communication Analytics', icon: FlaskConical },
  ]},
  { title: 'Marketing & Growth', items: [
    { label: 'Marketing Overview', icon: Megaphone }, { label: 'Campaigns', icon: Megaphone },
    { label: 'Broadcasts', icon: Megaphone }, { label: 'Audience & Targeting', icon: Network },
    { label: 'Templates & Content', icon: Sparkles }, { label: 'Promotions', icon: Megaphone },
    { label: 'Loyalty & Rewards', icon: Sparkles }, { label: 'Recovery', icon: Rocket },
    { label: 'Experimentation', icon: FlaskConical }, { label: 'Advertising', icon: Megaphone },
  ]},
  { title: 'Funnels', items: [
    { label: 'Funnel Overview', icon: Network }, { label: 'All Funnels', icon: Network },
    { label: 'Funnel Builder', icon: Network }, { label: 'Funnel Templates', icon: Network },
    { label: 'Steps & Pages', icon: Network }, { label: 'Landing Pages', icon: Network },
    { label: 'Forms', icon: Network }, { label: 'Split Tests', icon: FlaskConical },
    { label: 'Funnel Analytics', icon: FlaskConical }, { label: 'Leads & Conversions', icon: Rocket },
  ]},
  { title: 'Automation', items: [
    { label: 'Automation Overview', icon: Workflow }, { label: 'Workflows', icon: Workflow },
    { label: 'Workflow Builder', icon: Workflow }, { label: 'Trigger Library', icon: Workflow },
    { label: 'Action Library', icon: Workflow }, { label: 'Workflow Library', icon: Workflow },
    { label: 'Conditions & Branches', icon: Workflow }, { label: 'Scheduled Automations', icon: Workflow },
    { label: 'Run History', icon: Workflow }, { label: 'Run Logs', icon: Workflow },
  ]},
  { title: 'Venture', items: [
    { label: 'Venture Overview', icon: Rocket }, { label: 'Venture Forge', icon: Rocket },
    { label: 'Discover', icon: Sparkles }, { label: 'Offer Builder', icon: Sparkles },
    { label: 'Product Ideas & Library', icon: Sparkles }, { label: 'Funnel Generator', icon: Network },
    { label: 'Launch Center', icon: Rocket }, { label: 'Ads & Social Content', icon: Megaphone },
    { label: 'Export Center', icon: Rocket },
  ]},
  { title: 'AI Studio', items: [
    { label: 'AI Overview', icon: Bot }, { label: 'AI Assistant', icon: Bot },
    { label: 'Content Generator', icon: Sparkles }, { label: 'Image Generator', icon: Sparkles },
    { label: 'Reply Suggestions', icon: Bot }, { label: 'Sentiment & Insights', icon: Bot },
    { label: 'AI Voice', icon: Bot }, { label: 'AI Settings', icon: Bot }, { label: 'AI History', icon: Bot },
  ]},
];

function proxyNavigate(label: string) {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'));
  buttons.find((button) => button.textContent?.trim() === label)?.click();
}

function Group({ title, items }: GroupDef) {
  const [open, setOpen] = React.useState(false);
  return <div className="growth-suite-group">
    <button className="growth-suite-trigger" onClick={() => setOpen(v => !v)} aria-expanded={open}><span>{title}</span><ChevronDown size={15} className={open ? 'rotated' : ''}/></button>
    {open && <div className="growth-suite-items">{items.map(({label, icon: Icon}) => <button key={label} onClick={() => proxyNavigate(label)}><Icon size={15}/><span>{label}</span></button>)}</div>}
  </div>;
}

function GrowthSuiteShell() { return <div className="growth-suite-shell">{groups.map(group => <Group key={group.title} {...group}/>)}</div>; }

function mount() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.growth-suite-mount')) return;
  const footer = sidebar.querySelector('.sidebar-footer');
  const point = document.createElement('div'); point.className = 'growth-suite-mount';
  footer ? sidebar.insertBefore(point, footer) : sidebar.appendChild(point);
  ReactDOM.createRoot(point).render(<GrowthSuiteShell/>);
}

const observer = new MutationObserver(mount);
observer.observe(document.documentElement, { childList: true, subtree: true });
mount();
