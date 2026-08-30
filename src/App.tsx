import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import {
  Bell, Bot, Building2, Command, Headphones, Moon, Plus, Search, ShieldCheck, Sparkles, Sun, Users,
  WandSparkles, X, Zap,
} from 'lucide-react';
import { HierarchicalNavigation, kioskNavigationTree, type TreeNode } from './NavigationTree';

type ThemePreset = 'kiosk' | 'sync' | 'clean';
type Mode = 'light' | 'dark';
type Contact = { id:string; name:string; company:string; phone:string; source:string; interest:string; stage:string; owner:string; value:number };
type Order = { id:string; contactId:string; product:string; total:number; status:string; channel:string };
type Conversation = { id:string; contactId:string; channel:string; snippet:string; source:string; interest:string; unread:boolean };
type ActivityItem = { id:string; contactId?:string; type:string; title:string; meta:string; status:string };

const contacts: Contact[] = [
  { id:'C-1001', name:'Adaeze Market', company:'Adaeze Market', phone:'+234 803 555 0184', source:'Meta · WhatsApp Ad', interest:'Scar Cream', stage:'Qualified', owner:'Femi Akinwale', value:86500 },
  { id:'C-1002', name:'Chinedu Okafor', company:'Okafor Retail', phone:'+234 807 441 2219', source:'Google Maps Prospecting', interest:'Lipoma Cream', stage:'Follow-up', owner:'Femi Akinwale', value:42000 },
  { id:'C-1003', name:'Fatima Bello', company:'Bello Essentials', phone:'+234 809 315 6630', source:'Instagram', interest:'NAD+ Skincare Trio', stage:'New', owner:'Tobi A.', value:0 },
  { id:'C-1004', name:'Royal Fitness', company:'Royal Fitness Ltd', phone:'+234 802 901 4570', source:'Referral', interest:'Foldable Treadmill', stage:'Customer', owner:'Adeniran', value:245000 },
];

const orders: Order[] = [
  { id:'ORD-1052', contactId:'C-1001', product:'Scar Cream · 2 units', total:86500, status:'Delivery pending', channel:'WhatsApp' },
  { id:'ORD-1053', contactId:'C-1004', product:'Foldable Treadmill', total:245000, status:'Confirmed', channel:'Storefront' },
  { id:'ORD-1048', contactId:'C-1003', product:'NAD+ Skincare Trio', total:122400, status:'Completed', channel:'Instagram' },
];

const conversations: Conversation[] = [
  { id:'CON-201', contactId:'C-1001', channel:'WhatsApp', snippet:'Can I pay on delivery?', source:'Meta · Scar Cream August', interest:'Scar Cream', unread:true },
  { id:'CON-202', contactId:'C-1002', channel:'WhatsApp', snippet:'Please send the current price.', source:'Google Maps Prospecting', interest:'Lipoma Cream', unread:false },
  { id:'CON-203', contactId:'C-1003', channel:'Instagram', snippet:'Do you deliver to Abuja?', source:'Instagram Organic', interest:'NAD+ Skincare Trio', unread:true },
];

const activities: ActivityItem[] = [
  { id:'ACT-1', contactId:'C-1001', type:'Follow-up', title:'Confirm delivery address', meta:'Today · 10:30 · WhatsApp', status:'Pending' },
  { id:'ACT-2', contactId:'C-1002', type:'Task', title:'Send product proof and price', meta:'Today · 12:00 · Assigned to Femi', status:'Pending' },
  { id:'ACT-3', type:'Meeting', title:'Weekly sales review', meta:'Today · 14:00 · Team meeting', status:'Scheduled' },
  { id:'ACT-4', contactId:'C-1004', type:'Delivery', title:'Dispatch treadmill order', meta:'Today · 16:30 · Lagos', status:'Confirmed' },
];

const organizations = [
  { name:'KIOSK Commerce HQ', workspace:'Main Workspace', plan:'Growth Plan' },
  { name:'Zuri Logistics', workspace:'Operations', plan:'Business Plan' },
  { name:'Curate Organization', workspace:'Retail', plan:'Starter Plan' },
];

const moduleDescriptions:Record<string,string> = {
  dashboard:'Executive view of sales, conversations, tasks and customer activity.',
  today:'Orders, follow-ups, tasks, meetings and deliveries that need attention.',
  crm:'Contacts, leads, customers, companies, deals, product interests, segments and follow-up.',
  inbox:'Unified WhatsApp, email, SMS, social, web chat and voice conversations.',
  commerce:'POS, orders, invoices, payments, checkout, fulfillment, returns and reviews.',
  catalog:'Products, collections, inventory, warehouses, variants, price books and sales channels.',
  purchasing:'Suppliers, purchase orders, receiving, procurement and purchase history.',
  marketing:'Campaigns, broadcasts, advertising, audiences, affiliates and lead generation.',
  funnels:'Funnels, landing pages, forms, split tests and conversion analytics.',
  build:'Website, storefront, page, form, popup and sales-page builders.',
  venture:'Niche discovery, offer design, funnel generation and launch tools.',
  service:'Tickets, complaints, knowledge base, portal and service workspace.',
  operations:'Projects, tasks, calendar, meetings, approvals, documents and branch operations.',
  team:'People, teams, departments, agents, roles, permissions and performance.',
  hr:'Employees, attendance, leave, payroll, onboarding and performance reviews.',
  finance:'Revenue, expenses, payments, wallets, accounting, taxes and commissions.',
  planning:'Business plans, market analysis, models, projections, KPIs and roadmaps.',
  reports:'Cross-module analytics, revenue attribution, campaign, funnel, voice and team reports.',
  notifications:'Business alerts, reminders, system notices and notification rules.',
  automation:'Workflows, triggers, actions, templates, schedules, run history and errors.',
  ai:'AI Assistant, agents, content, research, autofill, skills and AI activity.',
  integrations:'Marketplace, connected apps, communication, payments, webhooks and sync.',
  learning:'Courses, students, enrollments, progress, certificates and learning analytics.',
  settings:'Organization, access, appearance, security, developer, audit, system and billing.',
};

function flattenTree(nodes:TreeNode[]):TreeNode[]{
  return nodes.flatMap(node=>[node,...(node.children?flattenTree(node.children):[])]);
}
const searchableNavigation=flattenTree(kioskNavigationTree);
function money(value:number){return new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(value)}

export function App(){
  const [page,setPage]=useState('dashboard');
  const [workspaceLabel,setWorkspaceLabel]=useState('Dashboard');
  const [theme,setTheme]=useState<ThemePreset>(()=>(localStorage.getItem('kiosk-theme') as ThemePreset)||'kiosk');
  const [mode,setMode]=useState<Mode>(()=>(localStorage.getItem('kiosk-mode') as Mode)||'light');
  const [collapsed,setCollapsed]=useState(false);
  const [orgIndex,setOrgIndex]=useState(0);
  const [orgOpen,setOrgOpen]=useState(false);
  const [profileOpen,setProfileOpen]=useState(false);
  const [notifOpen,setNotifOpen]=useState(false);
  const [commandOpen,setCommandOpen]=useState(false);
  const [commandQuery,setCommandQuery]=useState('');
  const [assistantOpen,setAssistantOpen]=useState(false);
  const [assistantMessages,setAssistantMessages]=useState<string[]>(['I’m ready. Ask me about the current workspace, a customer, a product, an order, or an action you want to take.']);
  const [assistantInput,setAssistantInput]=useState('');
  const [settingsTab,setSettingsTab]=useState('Brand & Appearance');
  const [superAdmin,setSuperAdmin]=useState(false);

  useEffect(()=>{localStorage.setItem('kiosk-theme',theme)},[theme]);
  useEffect(()=>{localStorage.setItem('kiosk-mode',mode)},[mode]);
  useEffect(()=>{
    const handler=(event:KeyboardEvent)=>{
      if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();setCommandOpen(true)}
      if(event.key==='Escape'){setCommandOpen(false);setAssistantOpen(false)}
    };
    window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);
  },[]);

  const org=organizations[orgIndex];
  const navigate=(id:string,label?:string)=>{
    setPage(id);
    if(label) setWorkspaceLabel(label);
    else setWorkspaceLabel(kioskNavigationTree.find(n=>n.id===id)?.label || 'Dashboard');
    setSuperAdmin(false);setProfileOpen(false);setCommandOpen(false);
    if(id==='settings' && label && ['Organization & Locations','Users & Access','Business & Financial','Documents & Receipts','Brand & Appearance','Notifications','Integrations','Developer','Audit, Backup & Recovery','System','Plans & Billing'].includes(label)) setSettingsTab(label);
  };

  const commandItems=useMemo(()=>{
    const q=commandQuery.trim().toLowerCase();
    const pages=searchableNavigation.map(item=>({type:'Navigation',label:item.label,meta:`Open ${item.label}`,action:()=>navigate(item.parentId,item.label)}));
    const people=contacts.map(c=>({type:'Contact',label:c.name,meta:`${c.interest} · ${c.stage} · ${c.source}`,action:()=>navigate('crm','Contacts')}));
    const actions=[
      {type:'Action',label:'Create lead',meta:'Open CRM lead workspace',action:()=>navigate('crm','New Leads')},
      {type:'Action',label:'Create order',meta:'Open Commerce orders',action:()=>navigate('commerce','Orders')},
      {type:'Action',label:'Ask KIOSK AI',meta:'Open global AI Assistant',action:()=>setAssistantOpen(true)},
      {type:'Action',label:'Open Super Admin',meta:'Platform administration',action:()=>setSuperAdmin(true)},
    ];
    return [...pages,...people,...actions].filter(item=>!q||`${item.label} ${item.meta} ${item.type}`.toLowerCase().includes(q)).slice(0,24);
  },[commandQuery]);

  const sendAssistant=()=>{
    const text=assistantInput.trim();if(!text)return;
    setAssistantMessages(v=>[...v,`You: ${text}`,`KIOSK AI: I can prepare this using the shared workspace context. In this frontend phase I’ll keep the action as a safe preview rather than claiming a backend write.`]);
    setAssistantInput('');
  };

  return <div className={`kiosk-app theme-${theme} mode-${mode}`} style={{'--accent':theme==='kiosk'?'#7C3AED':theme==='sync'?'#10B981':'#2563EB'} as CSSProperties}>
    <div className={`shell ${collapsed?'collapsed':''}`}>
      <aside className="sidebar">
        <div className="sidebar-brand"><div className="brand-mark">K</div><div className="brand-copy"><strong>KIOSK</strong><span>Your business, under one roof.</span></div></div>
        <div className="sidebar-nav"><HierarchicalNavigation activeId={page} collapsed={collapsed} onNavigate={navigate}/></div>
        <div className="sidebar-footer">
          <div className="plan-card"><div className="sidebar-plan-copy"><strong>{org.plan}</strong><span>3,240 KIOSK Credits · 12,842 contacts</span></div><button onClick={()=>navigate('settings','Plans & Billing')}>{collapsed?'↑':'Review / upgrade plan'}</button></div>
          <button className="collapse-btn" onClick={()=>setCollapsed(v=>!v)}><span>{collapsed?'›':'‹'}</span><span className="collapse-copy">{collapsed?'Expand':'Collapse'}</span></button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="dropdown-wrap"><button className="org-switch" onClick={()=>{setOrgOpen(v=>!v);setProfileOpen(false);setNotifOpen(false)}}><div className="org-avatar"/><div className="org-text"><strong>{org.name}</strong><span>{org.workspace} · {org.plan}</span></div><span>⌄</span></button>{orgOpen&&<div className="dropdown-panel">{organizations.map((o,i)=><button className="menu-row" key={o.name} onClick={()=>{setOrgIndex(i);setOrgOpen(false)}}><Building2 size={16}/><span>{o.name}<small style={{display:'block',color:'var(--muted)'}}>{o.workspace} · {o.plan}</small></span></button>)}<button className="menu-row"><Plus size={16}/>Create organization</button></div>}</div>
          <button className="search-trigger" onClick={()=>setCommandOpen(true)}><Search size={16}/><span>Search records, pages or run a command…</span><span className="kbd">Ctrl K</span></button>
          <div className="topbar-spacer"/>
          <div className="credit-pill"><Zap size={14}/>3,240<div className="credit-track"><i/></div></div>
          <button className="top-icon" onClick={()=>setMode(v=>v==='light'?'dark':'light')} title="Toggle theme">{mode==='light'?<Moon size={17}/>:<Sun size={17}/>}</button>
          <div className="dropdown-wrap"><button className="top-icon" onClick={()=>{setNotifOpen(v=>!v);setProfileOpen(false);setOrgOpen(false)}}><Bell size={17}/><span className="badge-dot"/></button>{notifOpen&&<div className="dropdown-panel"><div className="dropdown-head"><strong>Notifications</strong><span>5 recent updates</span></div>{['Payment received · ₦86,500','New WhatsApp message · Adaeze Market','Campaign delivered · Scar Cream August','Workflow needs attention · 3 failed sends','Tobi A. joined Sales team'].map(n=><button className="menu-row" key={n} onClick={()=>setNotifOpen(false)}><Bell size={15}/>{n}</button>)}</div>}</div>
          <div className="dropdown-wrap"><button className="profile-trigger" onClick={()=>{setProfileOpen(v=>!v);setNotifOpen(false);setOrgOpen(false)}}>FA</button>{profileOpen&&<div className="dropdown-panel"><div className="dropdown-head"><strong>Femi Akinwale</strong><span>Owner · Super Admin enabled</span></div><button className="menu-row"><Users size={16}/>My Profile</button><button className="menu-row" onClick={()=>navigate('settings','Organization & Locations')}><Building2 size={16}/>Organization Settings</button><button className="menu-row" onClick={()=>navigate('settings','Users & Access')}><ShieldCheck size={16}/>Users & Access</button><button className="menu-row" onClick={()=>setCommandOpen(true)}><Command size={16}/>Keyboard Shortcuts</button><button className="menu-row" onClick={()=>{setSuperAdmin(true);setProfileOpen(false)}}><ShieldCheck size={16}/>Super Admin</button><button className="menu-row"><Headphones size={16}/>Help & Support</button><button className="menu-row"><X size={16}/>Sign Out</button></div>}</div>
        </header>

        <section className="content">{superAdmin?<SuperAdmin onExit={()=>setSuperAdmin(false)}/>:page==='dashboard'&&workspaceLabel==='Dashboard'?<Dashboard navigate={navigate}/>:page==='today'?<Today/>:page==='settings'?<SettingsPage tab={settingsTab} setTab={setSettingsTab} theme={theme} setTheme={setTheme} mode={mode} setMode={setMode}/>:<ModulePage moduleId={page} workspaceLabel={workspaceLabel} navigate={navigate}/>}</section>
      </main>
    </div>

    <button className="assistant-fab" onClick={()=>setAssistantOpen(v=>!v)} title="KIOSK AI Assistant"><WandSparkles size={22}/></button>
    {assistantOpen&&<div className="assistant-panel"><div className="assistant-head"><div><strong>KIOSK AI</strong><div style={{fontSize:11,color:'var(--muted)'}}>Context: {superAdmin?'Super Admin':workspaceLabel}</div></div><button className="top-icon" onClick={()=>setAssistantOpen(false)}><X size={16}/></button></div><div className="assistant-body">{assistantMessages.map((m,i)=><div key={i} className={`bubble ${m.startsWith('KIOSK AI')||i===0?'ai':''}`}>{m}</div>)}</div><div className="assistant-compose"><input value={assistantInput} onChange={e=>setAssistantInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')sendAssistant()}} placeholder="Ask KIOSK to find, prepare or analyze…"/><button className="btn primary" onClick={sendAssistant}><Sparkles size={15}/></button></div></div>}

    {commandOpen&&<div className="command-overlay" onMouseDown={()=>setCommandOpen(false)}><div className="command-box" onMouseDown={e=>e.stopPropagation()}><div className="command-input"><Search size={18}/><input autoFocus value={commandQuery} onChange={e=>setCommandQuery(e.target.value)} placeholder="Search KIOSK or type a command…"/><span className="kbd">Esc</span></div><div className="command-results">{commandItems.map((item,i)=><button key={`${item.type}-${item.label}-${i}`} className="command-row" onClick={()=>{item.action();setCommandOpen(false);setCommandQuery('')}}><Command size={16}/><div><strong>{item.label}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{item.type} · {item.meta}</div></div></button>)}</div></div></div>}
  </div>
}

function Dashboard({navigate}:{navigate:(id:string,label?:string)=>void}){
  const revenue=orders.reduce((s,o)=>s+o.total,0);
  const openLeads=contacts.filter(c=>c.stage!=='Customer').length;
  return <><PageHead eyebrow="Workspace" title="Dashboard" desc="One consistent view of the same customers, conversations, orders, activities and revenue used throughout KIOSK." actions={<button className="btn primary" onClick={()=>navigate('crm','New Leads')}><Plus size={16}/>New lead</button>}/>
    <div className="grid kpi-grid">{[['Revenue',money(revenue),'Across the same orders used by Finance'],['Open leads',String(openLeads),'CRM contacts awaiting conversion'],['Unread conversations',String(conversations.filter(c=>c.unread).length),'Unified Inbox'],['Today’s activities',String(activities.length),'Follow-ups, tasks, meetings, deliveries']].map(([a,b,c])=><div className="card kpi" key={a}><div className="kpi-label">{a}</div><div className="kpi-value">{b}</div><div className="kpi-meta">{c}</div></div>)}</div>
    <div className="grid quick-grid">{[['crm','CRM & Customers','Follow up with leads'],['inbox','Inbox & Communications','Continue conversations'],['commerce','Commerce','Create or manage orders'],['marketing','Marketing & Growth','Build audiences and campaigns']].map(([id,title,desc])=><div className="card quick-card" key={id} onClick={()=>navigate(id,title)}><strong>{title}</strong><span>{desc}</span></div>)}</div>
    <div className="grid two-col"><div className="card section-card"><div className="section-head"><h3>Lead-to-revenue pipeline</h3><button className="btn" onClick={()=>navigate('crm','CRM & Customers')}>Open CRM</button></div><table className="table"><thead><tr><th>Contact</th><th>Interest</th><th>Source</th><th>Stage</th><th>Value</th></tr></thead><tbody>{contacts.map(c=><tr className="click-row" key={c.id} onClick={()=>navigate('crm','Contacts')}><td><strong>{c.name}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.phone}</div></td><td>{c.interest}</td><td>{c.source}</td><td><span className="chip">{c.stage}</span></td><td>{money(c.value)}</td></tr>)}</tbody></table></div><div className="card section-card"><div className="section-head"><h3>Recent conversations</h3><button className="btn" onClick={()=>navigate('inbox','All Conversations')}>Open Inbox</button></div>{conversations.map(c=>{const person=contacts.find(x=>x.id===c.contactId)!;return <div className="click-row" key={c.id} onClick={()=>navigate('inbox','All Conversations')} style={{padding:'11px 4px',borderBottom:'1px solid var(--border)'}}><strong>{person.name}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.channel} · {c.interest} · {c.source}</div><div style={{fontSize:12,marginTop:4}}>{c.snippet}</div></div>})}</div></div>
  </>
}

function Today(){return <><PageHead eyebrow="Overview" title="Today" desc="The same activities used across CRM, Commerce and Operations, gathered into one daily workspace."/><div className="card section-card"><table className="table"><thead><tr><th>Type</th><th>Activity</th><th>Context</th><th>Status</th></tr></thead><tbody>{activities.map(a=><tr key={a.id}><td>{a.type}</td><td><strong>{a.title}</strong></td><td>{a.meta}</td><td><span className="chip">{a.status}</span></td></tr>)}</tbody></table></div></>}

function ModulePage({moduleId,workspaceLabel,navigate}:{moduleId:string;workspaceLabel:string;navigate:(id:string,label?:string)=>void}){
  const moduleName=kioskNavigationTree.find(n=>n.id===moduleId)?.label || workspaceLabel;
  return <><PageHead eyebrow={moduleName} title={workspaceLabel} desc={moduleDescriptions[moduleId]||`KIOSK ${workspaceLabel} workspace.`} actions={<><button className="btn" onClick={()=>navigate('dashboard','Dashboard')}>Dashboard</button><button className="btn primary"><Plus size={16}/>Create</button></>}/>
    {moduleId==='crm'&&['CRM & Customers','Contacts','Overview'].includes(workspaceLabel)&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Shared CRM records</h3><span className="chip">Same data across Inbox, Commerce & Reports</span></div><table className="table"><thead><tr><th>Contact</th><th>Product interest</th><th>Source</th><th>Stage</th><th>Owner</th></tr></thead><tbody>{contacts.map(c=><tr key={c.id}><td><strong>{c.name}</strong></td><td>{c.interest}</td><td>{c.source}</td><td><span className="chip">{c.stage}</span></td><td>{c.owner}</td></tr>)}</tbody></table></div>}
    {moduleId==='inbox'&&['Inbox & Communications','Inbox','All Conversations','WhatsApp'].includes(workspaceLabel)&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Unified conversations</h3><span className="chip">Conversation attribution enabled</span></div>{conversations.map(c=>{const p=contacts.find(x=>x.id===c.contactId)!;return <div key={c.id} style={{padding:'10px 0',borderBottom:'1px solid var(--border)'}}><strong>{p.name} · {c.channel}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.source} → {c.interest}</div><div style={{marginTop:4}}>{c.snippet}</div></div>})}</div>}
    {moduleId==='commerce'&&['Commerce','Overview','Orders'].includes(workspaceLabel)&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Shared orders</h3><span className="chip">Feeds CRM, Finance & Reports</span></div><table className="table"><thead><tr><th>Order</th><th>Customer</th><th>Product</th><th>Status</th><th>Total</th></tr></thead><tbody>{orders.map(o=>{const p=contacts.find(x=>x.id===o.contactId)!;return <tr key={o.id}><td>{o.id}</td><td>{p.name}</td><td>{o.product}</td><td><span className="chip">{o.status}</span></td><td>{money(o.total)}</td></tr>})}</tbody></table></div>}
    <div className="card section-card"><div className="section-head"><h3>{workspaceLabel} workspace</h3><span className="chip">Frontend framework</span></div><p style={{color:'var(--muted)',margin:0}}>This navigation destination now has its own visible workspace context. Deeper business actions and backend persistence will be wired without changing the menu architecture.</p></div>
  </>
}

function SettingsPage({tab,setTab,theme,setTheme,mode,setMode}:{tab:string;setTab:(x:string)=>void;theme:ThemePreset;setTheme:(x:ThemePreset)=>void;mode:Mode;setMode:(x:Mode)=>void}){
  const tabs=['Organization & Locations','Users & Access','Business & Financial','Documents & Receipts','Brand & Appearance','Notifications','Integrations','Developer','Audit, Backup & Recovery','System','Plans & Billing'];
  const appearance=tab==='Brand & Appearance'||tab==='Appearance';
  return <><PageHead eyebrow="Platform" title="Settings" desc="Workspace configuration, governance, appearance, access, system controls and KIOSK billing."/><div className="settings-grid"><div className="card settings-menu">{tabs.map(t=><button className={(tab===t||(appearance&&t==='Brand & Appearance'))?'active':''} key={t} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="card settings-panel">{appearance?<><div className="section-head"><h3>Application appearance</h3><button className="btn" onClick={()=>setMode(mode==='light'?'dark':'light')}>{mode==='light'?<Moon size={15}/>:<Sun size={15}/>} {mode==='light'?'Dark':'Light'} mode</button></div><p style={{color:'var(--muted)'}}>The full composable Appearance system is active: color themes, theme style, typography, text size, density, workspace layout, surface pattern, light/dark mode and brand accent.</p><div className="theme-grid"><ThemeCard id="kiosk" title="Royal Violet" desc="Confident violet with a deep navy workspace." theme={theme} setTheme={setTheme}/><ThemeCard id="sync" title="Forest Gold" desc="Rich emerald tones with warm prestige accents." theme={theme} setTheme={setTheme}/><ThemeCard id="clean" title="Ocean Blue" desc="Crisp blue and cyan for a bright modern workspace." theme={theme} setTheme={setTheme}/></div></>:<><h3 style={{marginTop:0}}>{tab}</h3><p style={{color:'var(--muted)'}}>This settings workspace is visible in the canonical tree. It currently uses frontend state and is ready for dedicated forms and backend persistence.</p></>}</div></div></>}

function ThemeCard({id,title,desc,theme,setTheme}:{id:ThemePreset;title:string;desc:string;theme:ThemePreset;setTheme:(x:ThemePreset)=>void}){return <button className={`theme-card ${id} ${theme===id?'active':''}`} onClick={()=>setTheme(id)}><div className="theme-preview"><div className="p-side"/><div className="p-main"/></div><strong>{title}</strong><div style={{fontSize:11,color:'var(--muted)',marginTop:4}}>{desc}</div></button>}

function SuperAdmin({onExit}:{onExit:()=>void}){const cards=[['Organizations','18','Tenant and workspace management'],['Plans','4','Starter, Growth, Business, Enterprise'],['Platform revenue','₦4.82M','Subscription and usage billing'],['Users','1,284','Cross-tenant platform accounts']];return <><div className="super-admin-banner"><strong>Super Admin</strong> · Isolated platform administration. Business CRM/Commerce data remains organization-scoped.</div><PageHead eyebrow="Platform Administration" title="Super Admin" desc="Organizations, plans, revenue, users, support, feature flags, system operations and backups." actions={<button className="btn" onClick={onExit}>Return to KIOSK</button>}/><div className="grid kpi-grid">{cards.map(([a,b,c])=><div className="card kpi" key={a}><div className="kpi-label">{a}</div><div className="kpi-value">{b}</div><div className="kpi-meta">{c}</div></div>)}</div><div className="module-list">{['Organizations','Plans','Revenue','Users','Support Tickets','Feature Flags','System Settings','Queues & Logs','Broadcast Notices','Maintenance Mode','API Monitoring','Backups'].map(x=><div className="card module-card" key={x}><strong>{x}</strong><span>Platform-level administration workspace.</span></div>)}</div></>}

function PageHead({eyebrow,title,desc,actions}:{eyebrow:string;title:string;desc:string;actions?:React.ReactNode}){return <div className="page-head"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{desc}</p></div>{actions&&<div className="actions">{actions}</div>}</div>}
