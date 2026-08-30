import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import {
  Activity, BadgeDollarSign, Bell, Bot, Boxes, BriefcaseBusiness, Building2, CalendarDays, ChevronDown,
  CircleDollarSign, Command, ContactRound, CreditCard, FileText, GraduationCap, Grid2X2, Handshake,
  Headphones, Inbox, LayoutDashboard, Library, LineChart, Menu, MessageSquare, Moon, Package, PanelLeftClose,
  PanelLeftOpen, PhoneCall, Plus, Search, Settings, ShieldCheck, ShoppingBag, Sparkles, Store, Sun, Users,
  WandSparkles, Workflow, X, Zap, type LucideIcon,
} from 'lucide-react';

type ThemePreset = 'kiosk' | 'sync' | 'clean';
type Mode = 'light' | 'dark';
type NavItem = { id: string; label: string; icon: LucideIcon; description: string };
type NavGroup = { label: string; items: NavItem[] };

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

const groups: NavGroup[] = [
  { label:'Workspace', items:[
    {id:'dashboard',label:'Dashboard',icon:LayoutDashboard,description:'Executive view of sales, conversations, tasks and customer activity.'},
    {id:'today',label:'Today',icon:CalendarDays,description:'Orders, follow-ups, tasks, meetings and deliveries that need attention.'},
    {id:'inbox',label:'Inbox',icon:Inbox,description:'Unified WhatsApp, email, SMS, social, web chat and voice conversations.'},
    {id:'notifications',label:'Notifications',icon:Bell,description:'Business alerts, reminders, system notices and approval requests.'},
  ]},
  { label:'Sales', items:[
    {id:'crm',label:'CRM & Customers',icon:ContactRound,description:'Contacts, leads, companies, deals, product interests, segments and Smart Lists.'},
    {id:'commerce',label:'Commerce',icon:ShoppingBag,description:'POS, orders, invoices, payments, checkout, fulfillment, returns and reviews.'},
    {id:'catalog',label:'Catalog',icon:Package,description:'Products, collections, inventory, warehouses, variants, price books and channels.'},
    {id:'purchasing',label:'Purchasing',icon:Boxes,description:'Suppliers, purchase orders, receiving, procurement and purchase history.'},
    {id:'service',label:'Customer Service',icon:Headphones,description:'Tickets, complaints, knowledge base, portal and service workspace.'},
  ]},
  { label:'Growth', items:[
    {id:'marketing',label:'Marketing & Growth',icon:Zap,description:'Campaigns, broadcasts, promotions, loyalty, recovery, affiliates and lead generation.'},
    {id:'funnels',label:'Funnels',icon:Workflow,description:'Funnels, landing pages, forms, split tests and conversion analytics.'},
    {id:'build',label:'Build',icon:Grid2X2,description:'Website, storefront, page, form, popup and sales-page builders.'},
    {id:'venture',label:'Venture',icon:Sparkles,description:'Niche Finder, Offer Builder, Funnel Generator, Launch Center and export tools.'},
  ]},
  { label:'Operations', items:[
    {id:'operations',label:'Operations',icon:BriefcaseBusiness,description:'Projects, tasks, calendar, meetings, approvals, documents and branch operations.'},
    {id:'team',label:'Team',icon:Users,description:'People, teams, departments, agents, roles, permissions and performance.'},
    {id:'hr',label:'HR',icon:Building2,description:'Employees, attendance, leave, payroll, onboarding and performance reviews.'},
    {id:'learning',label:'Learning & Academy',icon:GraduationCap,description:'Courses, students, progress, certificates, affiliates and learning analytics.'},
  ]},
  { label:'Business Intelligence', items:[
    {id:'finance',label:'Finance & Accounting',icon:CircleDollarSign,description:'Revenue, expenses, payments, wallets, accounting, taxes and earnings.'},
    {id:'reports',label:'Reports & Analytics',icon:LineChart,description:'Cross-module analytics, revenue attribution, campaign, funnel and team reports.'},
    {id:'planning',label:'Planning & Strategy',icon:Library,description:'Business plans, market analysis, models, projections, KPIs and roadmaps.'},
    {id:'automation',label:'Automation',icon:Workflow,description:'Workflows, triggers, actions, templates, run history and errors.'},
    {id:'ai',label:'AI Studio',icon:Bot,description:'AI Assistant, agents, content/image generation, research, autofill and skills.'},
  ]},
  { label:'Platform', items:[
    {id:'integrations',label:'Integrations',icon:Handshake,description:'Marketplace, connected apps, WhatsApp, Meta, Google, payments, webhooks and sync.'},
    {id:'settings',label:'Settings',icon:Settings,description:'Organization, access, finance defaults, appearance, developer, audit and billing.'},
  ]},
];

const allNav = groups.flatMap(group=>group.items);

function money(value:number){return new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(value)}

export function App(){
  const [page,setPage]=useState('dashboard');
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
  const [settingsTab,setSettingsTab]=useState('Appearance');
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
  const active=allNav.find(n=>n.id===page) || allNav[0];
  const commandItems=useMemo(()=>{
    const q=commandQuery.trim().toLowerCase();
    const pages=allNav.map(item=>({type:'Page',label:item.label,meta:item.description,action:()=>{setPage(item.id);setSuperAdmin(false)}}));
    const people=contacts.map(c=>({type:'Contact',label:c.name,meta:`${c.interest} · ${c.stage} · ${c.source}`,action:()=>{setPage('crm');setSuperAdmin(false)}}));
    const actions=[
      {type:'Action',label:'Create lead',meta:'Open CRM lead workspace',action:()=>setPage('crm')},
      {type:'Action',label:'Create order',meta:'Open Commerce',action:()=>setPage('commerce')},
      {type:'Action',label:'Ask KIOSK AI',meta:'Open global AI Assistant',action:()=>setAssistantOpen(true)},
      {type:'Action',label:'Open Super Admin',meta:'Platform administration',action:()=>setSuperAdmin(true)},
    ];
    return [...pages,...people,...actions].filter(item=>!q||`${item.label} ${item.meta} ${item.type}`.toLowerCase().includes(q)).slice(0,18);
  },[commandQuery]);

  const navigate=(id:string)=>{setPage(id);setSuperAdmin(false);setProfileOpen(false);setCommandOpen(false)};
  const sendAssistant=()=>{
    const text=assistantInput.trim(); if(!text)return;
    setAssistantMessages(v=>[...v,`You: ${text}`,`KIOSK AI: I can prepare this using the shared workspace context. In this frontend phase I’ll keep the action as a safe preview rather than claiming a backend write.`]);
    setAssistantInput('');
  };

  return <div className={`kiosk-app theme-${theme} mode-${mode}`} style={{'--accent':theme==='kiosk'?'#7C3AED':theme==='sync'?'#10B981':'#2563EB'} as CSSProperties}>
    <div className={`shell ${collapsed?'collapsed':''}`}>
      <aside className="sidebar">
        <div className="sidebar-brand"><div className="brand-mark">K</div><div className="brand-copy"><strong>KIOSK</strong><span>Your business, under one roof.</span></div></div>
        <div className="sidebar-nav">
          {groups.map(group=><div className="nav-group" key={group.label}><div className="nav-group-title">{group.label}</div>{group.items.map(item=>{const Icon=item.icon;return <button key={item.id} className={`nav-item ${!superAdmin&&page===item.id?'active':''}`} onClick={()=>navigate(item.id)} title={collapsed?item.label:undefined}><Icon size={18}/><span className="nav-label">{item.label}</span></button>})}</div>)}
        </div>
        <div className="sidebar-footer">
          <div className="plan-card"><div className="sidebar-plan-copy"><strong>{org.plan}</strong><span>3,240 KIOSK Credits · 12,842 contacts</span></div><button onClick={()=>{navigate('settings');setSettingsTab('Plans & Billing')}}>{collapsed?'↑':'Review / upgrade plan'}</button></div>
          <button className="collapse-btn" onClick={()=>setCollapsed(v=>!v)}>{collapsed?<PanelLeftOpen size={16}/>:<PanelLeftClose size={16}/>}<span className="collapse-copy">{collapsed?'Expand':'Collapse'}</span></button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="dropdown-wrap"><button className="org-switch" onClick={()=>{setOrgOpen(v=>!v);setProfileOpen(false);setNotifOpen(false)}}><div className="org-avatar"/><div className="org-text"><strong>{org.name}</strong><span>{org.workspace} · {org.plan}</span></div><ChevronDown size={14}/></button>{orgOpen&&<div className="dropdown-panel">{organizations.map((o,i)=><button className="menu-row" key={o.name} onClick={()=>{setOrgIndex(i);setOrgOpen(false)}}><Building2 size={16}/><span>{o.name}<small style={{display:'block',color:'var(--muted)'}}>{o.workspace} · {o.plan}</small></span></button>)}<button className="menu-row"><Plus size={16}/>Create organization</button></div>}</div>
          <button className="search-trigger" onClick={()=>setCommandOpen(true)}><Search size={16}/><span>Search records, pages or run a command…</span><span className="kbd">Ctrl K</span></button>
          <div className="topbar-spacer"/>
          <div className="credit-pill"><Zap size={14}/>3,240<div className="credit-track"><i/></div></div>
          <button className="top-icon" onClick={()=>setMode(v=>v==='light'?'dark':'light')} title="Toggle theme">{mode==='light'?<Moon size={17}/>:<Sun size={17}/>}</button>
          <div className="dropdown-wrap"><button className="top-icon" onClick={()=>{setNotifOpen(v=>!v);setProfileOpen(false);setOrgOpen(false)}}><Bell size={17}/><span className="badge-dot"/></button>{notifOpen&&<div className="dropdown-panel"><div className="dropdown-head"><strong>Notifications</strong><span>5 recent updates</span></div>{['Payment received · ₦86,500','New WhatsApp message · Adaeze Market','Campaign delivered · Scar Cream August','Workflow needs attention · 3 failed sends','Tobi A. joined Sales team'].map(n=><button className="menu-row" key={n} onClick={()=>setNotifOpen(false)}><Bell size={15}/>{n}</button>)}</div>}</div>
          <div className="dropdown-wrap"><button className="profile-trigger" onClick={()=>{setProfileOpen(v=>!v);setNotifOpen(false);setOrgOpen(false)}}>FA</button>{profileOpen&&<div className="dropdown-panel"><div className="dropdown-head"><strong>Femi Akinwale</strong><span>Owner · Super Admin enabled</span></div><button className="menu-row"><Users size={16}/>My Profile</button><button className="menu-row" onClick={()=>{navigate('settings');setSettingsTab('Organization & Locations')}}><Building2 size={16}/>Organization Settings</button><button className="menu-row" onClick={()=>{navigate('settings');setSettingsTab('Users & Access')}}><ShieldCheck size={16}/>Users & Access</button><button className="menu-row" onClick={()=>setCommandOpen(true)}><Command size={16}/>Keyboard Shortcuts</button><button className="menu-row" onClick={()=>{setSuperAdmin(true);setProfileOpen(false)}}><ShieldCheck size={16}/>Super Admin</button><button className="menu-row"><Headphones size={16}/>Help & Support</button><button className="menu-row"><X size={16}/>Sign Out</button></div>}</div>
        </header>

        <section className="content">{superAdmin?<SuperAdmin onExit={()=>setSuperAdmin(false)}/>:page==='dashboard'?<Dashboard navigate={navigate}/>:page==='today'?<Today/>:page==='settings'?<SettingsPage tab={settingsTab} setTab={setSettingsTab} theme={theme} setTheme={setTheme} mode={mode} setMode={setMode}/>:<ModulePage item={active} navigate={navigate}/>}</section>
      </main>
    </div>

    <button className="assistant-fab" onClick={()=>setAssistantOpen(v=>!v)} title="KIOSK AI Assistant"><WandSparkles size={22}/></button>
    {assistantOpen&&<div className="assistant-panel"><div className="assistant-head"><div><strong>KIOSK AI</strong><div style={{fontSize:11,color:'var(--muted)'}}>Context: {superAdmin?'Super Admin':active.label}</div></div><button className="top-icon" onClick={()=>setAssistantOpen(false)}><X size={16}/></button></div><div className="assistant-body">{assistantMessages.map((m,i)=><div key={i} className={`bubble ${m.startsWith('KIOSK AI')||i===0?'ai':''}`}>{m}</div>)}</div><div className="assistant-compose"><input value={assistantInput} onChange={e=>setAssistantInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')sendAssistant()}} placeholder="Ask KIOSK to find, prepare or analyze…"/><button className="btn primary" onClick={sendAssistant}><Sparkles size={15}/></button></div></div>}

    {commandOpen&&<div className="command-overlay" onMouseDown={()=>setCommandOpen(false)}><div className="command-box" onMouseDown={e=>e.stopPropagation()}><div className="command-input"><Search size={18}/><input autoFocus value={commandQuery} onChange={e=>setCommandQuery(e.target.value)} placeholder="Search KIOSK or type a command…"/><span className="kbd">Esc</span></div><div className="command-results">{commandItems.map((item,i)=><button key={`${item.type}-${item.label}-${i}`} className="command-row" onClick={()=>{item.action();setCommandOpen(false);setCommandQuery('')}}><Command size={16}/><div><strong>{item.label}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{item.type} · {item.meta}</div></div></button>)}</div></div></div>}
  </div>
}

function Dashboard({navigate}:{navigate:(id:string)=>void}){
  const revenue=orders.reduce((s,o)=>s+o.total,0);
  const openLeads=contacts.filter(c=>c.stage!=='Customer').length;
  return <><PageHead eyebrow="Workspace" title="Dashboard" desc="One consistent view of the same customers, conversations, orders, activities and revenue used throughout KIOSK." actions={<button className="btn primary" onClick={()=>navigate('crm')}><Plus size={16}/>New lead</button>}/>
    <div className="grid kpi-grid">{[['Revenue',money(revenue),'Across the same orders used by Finance'],['Open leads',String(openLeads),'CRM contacts awaiting conversion'],['Unread conversations',String(conversations.filter(c=>c.unread).length),'Unified Inbox'],['Today’s activities',String(activities.length),'Follow-ups, tasks, meetings, deliveries']].map(([a,b,c])=><div className="card kpi" key={a}><div className="kpi-label">{a}</div><div className="kpi-value">{b}</div><div className="kpi-meta">{c}</div></div>)}</div>
    <div className="grid quick-grid">{[['crm','CRM & Customers','Follow up with leads'],['inbox','Inbox','Continue conversations'],['commerce','Commerce','Create or manage orders'],['marketing','Marketing & Growth','Build audiences and campaigns']].map(([id,title,desc])=><div className="card quick-card" key={id} onClick={()=>navigate(id)}><strong>{title}</strong><span>{desc}</span></div>)}</div>
    <div className="grid two-col"><div className="card section-card"><div className="section-head"><h3>Lead-to-revenue pipeline</h3><button className="btn" onClick={()=>navigate('crm')}>Open CRM</button></div><table className="table"><thead><tr><th>Contact</th><th>Interest</th><th>Source</th><th>Stage</th><th>Value</th></tr></thead><tbody>{contacts.map(c=><tr className="click-row" key={c.id} onClick={()=>navigate('crm')}><td><strong>{c.name}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.phone}</div></td><td>{c.interest}</td><td>{c.source}</td><td><span className="chip">{c.stage}</span></td><td>{money(c.value)}</td></tr>)}</tbody></table></div><div className="card section-card"><div className="section-head"><h3>Recent conversations</h3><button className="btn" onClick={()=>navigate('inbox')}>Open Inbox</button></div>{conversations.map(c=>{const person=contacts.find(x=>x.id===c.contactId)!;return <div className="click-row" key={c.id} onClick={()=>navigate('inbox')} style={{padding:'11px 4px',borderBottom:'1px solid var(--border)'}}><strong>{person.name}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.channel} · {c.interest} · {c.source}</div><div style={{fontSize:12,marginTop:4}}>{c.snippet}</div></div>})}</div></div>
  </>
}

function Today(){return <><PageHead eyebrow="Overview" title="Today" desc="The same activities used across CRM, Commerce and Operations, gathered into one daily workspace."/><div className="card section-card"><table className="table"><thead><tr><th>Type</th><th>Activity</th><th>Context</th><th>Status</th></tr></thead><tbody>{activities.map(a=><tr key={a.id}><td>{a.type}</td><td><strong>{a.title}</strong></td><td>{a.meta}</td><td><span className="chip">{a.status}</span></td></tr>)}</tbody></table></div></>}

function ModulePage({item,navigate}:{item:NavItem;navigate:(id:string)=>void}){
  const moduleItems:Record<string,string[]>={
    inbox:['All Conversations','WhatsApp','Email','SMS','Messenger','Instagram','Telegram','Web Chat','Voice & Calling','Channel Setup'],
    notifications:['Notification Center','Business Alerts','System Alerts','Reminders','Notification Rules'],
    crm:['CRM Overview','Contacts','Leads','Customers','Companies','Deals & Pipeline','Product Interests','Segments & Smart Lists','Activities & Follow-ups','Meetings','Forecast','Custom Fields','Duplicate Manager'],
    commerce:['Commerce Overview','Point of Sale','Orders','Quotes & Contracts','Invoices','Payments','Checkout','Shipping & Delivery','Returns & Refunds','Reviews','Storefront'],
    catalog:['Catalog Overview','Products','Collections & Categories','Variants & Options','Price Books','Inventory','Warehouses','Bulk Import','Dropship Import','Barcode Tools','Sales Channels'],
    purchasing:['Purchasing Overview','Suppliers','Purchase Orders','Receiving','Supplier Returns','Procurement','Purchasing History'],
    service:['Service Overview','Tickets & Helpdesk','Complaints','Knowledge Base','Customer Portal','Service Workspace','Service Reports'],
    marketing:['Marketing Overview','Lead Generation','Campaigns','Broadcasts','Audience & Targeting','Templates & Content','Content Calendar','Promotions','Loyalty & Rewards','Abandoned Cart Recovery','Experimentation','Affiliates','Advertising'],
    funnels:['Funnel Overview','All Funnels','Funnel Builder','Steps & Pages','Landing Pages','Forms','Split Tests','Funnel Analytics','Leads & Conversions'],
    build:['Website Builder','Storefront Builder','Pages','Navigation','Domains','AI Page Builder','Forms Builder','Sales Forms','Order Forms','Popups','Templates','Store Themes'],
    venture:['Venture Overview','Niche Finder','Offer Builder','Funnel Generator','Launch Center','Digital Products Library','Ads & Social Content','Export Center'],
    operations:['Operations Overview','Projects','Task Board / Kanban','Tasks','Timeline','Calendar','Meetings','Approvals','Documents & E-Signature','Locations / Branch Operations'],
    team:['Team Overview','People','Teams & Departments','Roles & Permissions','Sales & Delivery Agents','Locations & Assignment','Performance','Team Communication'],
    hr:['HR Overview','Employee Directory','Attendance','Shifts & Scheduling','Leave & Time Off','Payroll & Compensation','Performance Reviews','Onboarding','Offboarding'],
    learning:['Academy Dashboard','Academy','Courses','Course Builder','Students','My Learning','Certificates','Affiliates','Learning Analytics'],
    finance:['Finance Overview','Sales Finance','Revenue','Expenses','Payments','Accounts & Wallets','Accounting','Cash Management','Taxes','Earnings & Commissions','Financial Reports'],
    reports:['Reports Overview','Analytics','Campaign Reports','Channel Reports','Team Performance','Revenue Attribution','Funnel Reports','Custom Reporting','Dashboards'],
    planning:['Strategy Overview','Business Planning','Market & Competitive Analysis','Business Model','5-Year Projection','DCF','Business-Specific Models','KPI Dashboard','Execution Planning'],
    automation:['Automation Overview','Workflows','Workflow Builder','Trigger Library','Action Library','Workflow Templates','Active / Paused','Run History','Run Logs','Failed Runs','Automation Analytics'],
    ai:['AI Overview','AI Assistant','Platform Copilot','AI Agents','AI Autofill','AI Research','Content Generator','Image Generator','Product Suggestions','Reply Suggestions','Sentiment & Insights','Brand Voice','Installed AI Skills','AI Activity','AI Settings'],
    integrations:['Integration Overview','Connected Apps','Marketplace','Commerce Connectors','Marketing & Advertising Connectors','Communication Connectors','Payment Gateways','WhatsApp','Webhooks','Sync Activity'],
  };
  const list=moduleItems[item.id]||[];
  return <><PageHead eyebrow="KIOSK Module" title={item.label} desc={item.description} actions={<><button className="btn" onClick={()=>navigate('dashboard')}>Dashboard</button><button className="btn primary"><Plus size={16}/>Create</button></>}/>
    {item.id==='crm'&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Shared CRM records</h3><span className="chip">Same data across Inbox, Commerce & Reports</span></div><table className="table"><thead><tr><th>Contact</th><th>Product interest</th><th>Source</th><th>Stage</th><th>Owner</th></tr></thead><tbody>{contacts.map(c=><tr key={c.id}><td><strong>{c.name}</strong></td><td>{c.interest}</td><td>{c.source}</td><td><span className="chip">{c.stage}</span></td><td>{c.owner}</td></tr>)}</tbody></table></div>}
    {item.id==='inbox'&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Unified conversations</h3><span className="chip">Conversation attribution enabled</span></div>{conversations.map(c=>{const p=contacts.find(x=>x.id===c.contactId)!;return <div key={c.id} style={{padding:'10px 0',borderBottom:'1px solid var(--border)'}}><strong>{p.name} · {c.channel}</strong><div style={{fontSize:11,color:'var(--muted)'}}>{c.source} → {c.interest}</div><div style={{marginTop:4}}>{c.snippet}</div></div>})}</div>}
    {item.id==='commerce'&&<div className="card section-card" style={{marginBottom:14}}><div className="section-head"><h3>Shared orders</h3><span className="chip">Feeds CRM, Finance & Reports</span></div><table className="table"><thead><tr><th>Order</th><th>Customer</th><th>Product</th><th>Status</th><th>Total</th></tr></thead><tbody>{orders.map(o=>{const p=contacts.find(x=>x.id===o.contactId)!;return <tr key={o.id}><td>{o.id}</td><td>{p.name}</td><td>{o.product}</td><td><span className="chip">{o.status}</span></td><td>{money(o.total)}</td></tr>})}</tbody></table></div>}
    <div className="module-list">{list.map(label=><div className="card module-card" key={label} onClick={()=>{}}><strong>{label}</strong><span>Open {label} workspace. Navigation is wired to this canonical module shell.</span></div>)}</div>
  </>
}

function SettingsPage({tab,setTab,theme,setTheme,mode,setMode}:{tab:string;setTab:(x:string)=>void;theme:ThemePreset;setTheme:(x:ThemePreset)=>void;mode:Mode;setMode:(x:Mode)=>void}){
  const tabs=['Organization & Locations','Users & Access','Business & Financial','Documents & Receipts','Brand & Appearance','Notifications','Integrations','Developer','Audit, Backup & Recovery','System','Plans & Billing'];
  const appearance=tab==='Brand & Appearance'||tab==='Appearance';
  return <><PageHead eyebrow="Platform" title="Settings" desc="Workspace configuration, governance, appearance, access, system controls and KIOSK billing."/><div className="settings-grid"><div className="card settings-menu">{tabs.map(t=><button className={(tab===t||(appearance&&t==='Brand & Appearance'))?'active':''} key={t} onClick={()=>setTab(t)}>{t}</button>)}</div><div className="card settings-panel">{appearance?<><div className="section-head"><h3>Application appearance</h3><button className="btn" onClick={()=>setMode(mode==='light'?'dark':'light')}>{mode==='light'?<Moon size={15}/>:<Sun size={15}/>} {mode==='light'?'Dark':'Light'} mode</button></div><p style={{color:'var(--muted)'}}>Choose a complete visual preset, then continue customizing mode and other appearance controls. KIOSK Modern is the default recommendation.</p><div className="theme-grid"><ThemeCard id="kiosk" title="KIOSK Modern" desc="Recommended: KIOSK purple/navy brand with the cleaner Sync-style SaaS shell." theme={theme} setTheme={setTheme}/><ThemeCard id="sync" title="Sync Workspace" desc="Emerald/deep workspace inspired by Sync CRM and KIOSK CRM 2." theme={theme} setTheme={setTheme}/><ThemeCard id="clean" title="KIOSK CRM1 Clean" desc="Bright blue/white workspace inspired by the cleaner KIOSK CRM 1 direction." theme={theme} setTheme={setTheme}/></div></>:<><h3 style={{marginTop:0}}>{tab}</h3><p style={{color:'var(--muted)'}}>This settings area is wired into the unified KIOSK shell. It currently uses shared frontend state and is ready for its dedicated form/workspace before backend persistence is added.</p><div className="module-list"><div className="card module-card"><strong>Configuration</strong><span>Organization-level defaults and policies.</span></div><div className="card module-card"><strong>Permissions & audit</strong><span>Changes will follow role-based access and audit rules.</span></div><div className="card module-card"><strong>Backend-ready boundary</strong><span>The UI does not pretend remote persistence exists yet.</span></div></div></>}</div></div></>}

function ThemeCard({id,title,desc,theme,setTheme}:{id:ThemePreset;title:string;desc:string;theme:ThemePreset;setTheme:(x:ThemePreset)=>void}){return <button className={`theme-card ${id} ${theme===id?'active':''}`} onClick={()=>setTheme(id)}><div className="theme-preview"><div className="p-side"/><div className="p-main"/></div><strong>{title}</strong><div style={{fontSize:11,color:'var(--muted)',marginTop:4}}>{desc}</div></button>}

function SuperAdmin({onExit}:{onExit:()=>void}){const cards=[['Organizations','18','Tenant and workspace management'],['Plans','4','Starter, Growth, Business, Enterprise'],['Platform revenue','₦4.82M','Subscription and usage billing'],['Users','1,284','Cross-tenant platform accounts'],['Queues & Logs','Healthy','Jobs, failures and operational logs'],['Backups','Current','Platform backup and recovery status']];return <><div className="super-admin-banner"><strong>Super Admin</strong> · Isolated platform administration. Business CRM/Commerce data remains organization-scoped.</div><PageHead eyebrow="Platform Administration" title="Super Admin" desc="Organizations, plans, revenue, users, support, feature flags, system operations and backups." actions={<button className="btn" onClick={onExit}>Return to KIOSK</button>}/><div className="grid kpi-grid">{cards.slice(0,4).map(([a,b,c])=><div className="card kpi" key={a}><div className="kpi-label">{a}</div><div className="kpi-value">{b}</div><div className="kpi-meta">{c}</div></div>)}</div><div className="module-list">{['Organizations','Plans','Revenue','Users','Support Tickets','Feature Flags','System Settings','Queues & Logs','Broadcast Notices','Maintenance Mode','API Monitoring','Backups'].map(x=><div className="card module-card" key={x}><strong>{x}</strong><span>Platform-level administration workspace.</span></div>)}</div></>}

function PageHead({eyebrow,title,desc,actions}:{eyebrow:string;title:string;desc:string;actions?:React.ReactNode}){return <div className="page-head"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{desc}</p></div>{actions&&<div className="actions">{actions}</div>}</div>}
