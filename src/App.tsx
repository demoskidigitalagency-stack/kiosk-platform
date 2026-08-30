import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import {
  Activity, Bell, Boxes, CalendarDays, Check, CheckCircle2, ChevronLeft, ChevronRight,
  CircleDot, Clock3, Crown, FileText, Gem, Grid3X3, LayoutDashboard, LayoutGrid,
  ListChecks, MessageCircle, MessageSquare, Minimize2, Moon, Package, Palette, PhoneCall,
  Plus, Search, Settings, ShoppingBag, SlidersHorizontal, Sparkles, Sun, Type, Users,
  WandSparkles,
} from 'lucide-react';

type ThemeId = 'kiosk' | 'sync' | 'kioskcrm' | 'weave' | 'bizflow';
type StyleId = 'classic' | 'modern' | 'premium' | 'minimal' | 'bold';
type FontId = 'inter' | 'figtree' | 'outfit' | 'dm-sans' | 'space-grotesk' | 'jakarta' | 'manrope' | 'sora';
type Density = 'compact' | 'comfortable' | 'spacious';
type Scale = 'small' | 'default' | 'large';
type Pattern = 'clean' | 'soft' | 'grid' | 'glass';
type Template = 'sidebar' | 'compact-sidebar' | 'topnav';
type Mode = 'light' | 'dark';
type TodayTab = 'all' | 'orders' | 'followups' | 'tasks' | 'calendar';
type StatusFilter = 'all' | 'pending' | 'completed' | 'overdue';
type DatePreset = 'yesterday' | 'today' | 'tomorrow' | 'last7' | 'next7' | 'custom';
type ItemType = 'order' | 'followup' | 'task' | 'calendar';

type Appearance = {
  theme: ThemeId; style: StyleId; font: FontId; density: Density; scale: Scale;
  pattern: Pattern; template: Template; mode: Mode; accent: string;
};

type TodayItem = {
  id: string; type: ItemType; offset: number; time: string; title: string; meta: string;
  status: 'pending' | 'completed' | 'overdue' | 'confirmed' | 'scheduled';
  priority?: 'high' | 'medium' | 'low';
};

const defaultAppearance: Appearance = {
  theme: 'kiosk', style: 'modern', font: 'inter', density: 'comfortable', scale: 'default',
  pattern: 'clean', template: 'sidebar', mode: 'light', accent: '#7C3AED',
};

const baseNav = [
  [Users, 'Customers'], [Package, 'Products'], [ShoppingBag, 'Orders'], [FileText, 'Invoices'],
  [Boxes, 'Inventory'], [MessageSquare, 'Messages'], [Settings, 'Settings'],
] as const;

const themes = [
  { id: 'kiosk' as const, name: 'Royal Violet', desc: 'Confident violet with a deep navy workspace.', accent: '#7C3AED' },
  { id: 'sync' as const, name: 'Forest Gold', desc: 'Rich emerald tones with warm prestige accents.', accent: '#047857' },
  { id: 'kioskcrm' as const, name: 'Heritage', desc: 'Calm emerald, cream surfaces and refined warmth.', accent: '#065F46' },
  { id: 'weave' as const, name: 'Ocean Blue', desc: 'Crisp blue and cyan for a bright modern workspace.', accent: '#2563EB' },
  { id: 'bizflow' as const, name: 'Slate', desc: 'Neutral business surfaces with flexible brand color.', accent: '#3B82F6' },
];

const stylePresets = [
  { id: 'classic' as const, name: 'Classic', desc: 'Compact, structured and familiar.', icon: Grid3X3 },
  { id: 'modern' as const, name: 'Modern', desc: 'Balanced spacing, clean cards and soft depth.', icon: LayoutGrid },
  { id: 'premium' as const, name: 'Premium', desc: 'Generous space, elegant radius and elevated surfaces.', icon: Crown },
  { id: 'minimal' as const, name: 'Minimal', desc: 'Quiet surfaces, fewer shadows and sharp hierarchy.', icon: Minimize2 },
  { id: 'bold' as const, name: 'Bold', desc: 'Stronger contrast, larger controls and expressive depth.', icon: Sparkles },
];

const fonts = [
  ['inter', 'Inter'], ['figtree', 'Figtree'], ['outfit', 'Outfit'], ['dm-sans', 'DM Sans'],
  ['space-grotesk', 'Space Grotesk'], ['jakarta', 'Plus Jakarta Sans'], ['manrope', 'Manrope'], ['sora', 'Sora'],
] as const;

const metrics = [['Total customers','1,248','+8.2%'],['Orders this month','386','+12.4%'],['Revenue','₦8.42M','+6.8%'],['Low stock items','14','Needs attention']];

const workspaceItems: TodayItem[] = [
  { id:'O-1052', type:'order', offset:0, time:'09:00', title:'Order #1052 · Adaeze Market', meta:'2 items · ₦86,500 · Delivery pending', status:'pending' },
  { id:'F-201', type:'followup', offset:0, time:'10:30', title:'Follow up with Chinedu Okafor', meta:'WhatsApp · Awaiting payment confirmation', status:'pending', priority:'high' },
  { id:'T-301', type:'task', offset:0, time:'12:00', title:'Approve supplier restock request', meta:'Inventory · Assigned to you', status:'pending', priority:'medium' },
  { id:'C-401', type:'calendar', offset:0, time:'14:00', title:'Weekly sales review', meta:'Team meeting · 45 minutes', status:'scheduled' },
  { id:'O-1053', type:'order', offset:0, time:'16:30', title:'Order #1053 · Royal Fitness', meta:'1 item · ₦245,000 · Confirmed', status:'confirmed' },
  { id:'F-202', type:'followup', offset:0, time:'17:00', title:'Call Adunni Bakare', meta:'Phone · Requested callback after 3pm', status:'completed', priority:'medium' },
  { id:'O-1048', type:'order', offset:-1, time:'11:15', title:'Order #1048 · Mena Stores', meta:'3 items · ₦122,400 · Completed', status:'completed' },
  { id:'T-298', type:'task', offset:-1, time:'15:00', title:'Reconcile yesterday cash drawer', meta:'Finance · Daily close', status:'overdue', priority:'high' },
  { id:'F-198', type:'followup', offset:-3, time:'13:30', title:'Follow up with Ngozi Eze', meta:'Phone · Product inquiry', status:'completed', priority:'low' },
  { id:'C-397', type:'calendar', offset:-5, time:'09:30', title:'Warehouse walkthrough', meta:'Operations · Lagos location', status:'completed' },
  { id:'T-305', type:'task', offset:1, time:'09:00', title:'Review new price book', meta:'Products · Assigned to Femi', status:'scheduled', priority:'medium' },
  { id:'F-207', type:'followup', offset:1, time:'11:30', title:'Check delivery experience with Fatima Yusuf', meta:'WhatsApp · Post-delivery follow-up', status:'scheduled', priority:'low' },
  { id:'C-408', type:'calendar', offset:2, time:'14:30', title:'Vendor onboarding call', meta:'Purchasing · Google Meet', status:'scheduled' },
  { id:'O-1060', type:'order', offset:3, time:'10:00', title:'Scheduled wholesale dispatch #1060', meta:'8 items · ₦640,000', status:'scheduled' },
];

const auditItems = [
  ['Order #1053 confirmed', 'Adeniran changed order status from Pending to Confirmed.', '8 min ago'],
  ['Inventory adjusted', 'Stock for Foldable Treadmill decreased by 1 after a completed sale.', '24 min ago'],
  ['Customer updated', 'Phone number and delivery address updated for Adaeze Market.', '41 min ago'],
  ['Task completed', 'Adunni follow-up marked as completed by Sales.', '1 hr ago'],
  ['Payment recorded', '₦86,500 payment recorded against Order #1052.', '2 hrs ago'],
];

function isoDate(date: Date) {
  const y = date.getFullYear(); const m = String(date.getMonth()+1).padStart(2,'0'); const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function shiftDate(base: Date, days: number) { const next = new Date(base); next.setDate(next.getDate()+days); return next; }
function prettyDate(iso: string) { return new Date(`${iso}T12:00:00`).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'}); }
function itemDate(offset: number) { return isoDate(shiftDate(new Date(), offset)); }

export function App() {
  const [page, setPage] = useState('Dashboard');
  const [settingsTab, setSettingsTab] = useState('Appearance');
  const [appearance, setAppearance] = useState<Appearance>(() => {
    try { return { ...defaultAppearance, ...JSON.parse(localStorage.getItem('kiosk-appearance') || '{}') }; }
    catch { return defaultAppearance; }
  });

  useEffect(() => { localStorage.setItem('kiosk-appearance', JSON.stringify(appearance)); }, [appearance]);
  const rootClass = useMemo(() => `theme-${appearance.theme} style-${appearance.style} mode-${appearance.mode} density-${appearance.density} scale-${appearance.scale} pattern-${appearance.pattern} template-${appearance.template} font-${appearance.font}`, [appearance]);
  const patch = (next: Partial<Appearance>) => setAppearance((current) => ({ ...current, ...next }));
  const chooseTheme = (id: ThemeId, accent: string) => patch({ theme: id, accent });

  return (
    <div className={rootClass} style={{ '--user-accent': appearance.accent } as CSSProperties}>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand"><div className="brand-mark">K</div><div><div className="brand-name">KIOSK</div><div className="brand-tagline">Your business, under one roof.</div></div></div>
          <div className="overview-nav-label">Overview</div>
          <nav>
            <button onClick={() => setPage('Dashboard')} className={`nav-item ${page === 'Dashboard' ? 'active' : ''}`}><LayoutDashboard size={18}/><span>Dashboard</span></button>
            <button onClick={() => setPage('Today')} className={`nav-item ${page === 'Today' ? 'active' : ''}`}><CalendarDays size={18}/><span>Today</span></button>
            <button onClick={() => setPage('Activity')} className={`nav-item ${page === 'Activity' ? 'active' : ''}`}><Activity size={18}/><span>Activity</span></button>
          </nav>
          <div className="overview-nav-label">Workspace</div>
          <nav>{baseNav.map(([Icon,label]) => <button key={label} onClick={() => setPage(label)} className={`nav-item ${page === label ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></button>)}</nav>
          <div className="sidebar-footer">KIOSK Platform · unified workspace</div>
        </aside>
        <main className="main-area">
          <header className="topbar"><div className="search-wrap"><Search size={18}/><input aria-label="Global search" placeholder="Search anything…"/></div><div className="topbar-actions"><button className="icon-btn primary" aria-label="Create"><Plus size={18}/></button><button className="icon-btn" aria-label="Notifications"><Bell size={18}/></button><div className="avatar">AD</div></div></header>
          <section className="content">
            {page === 'Settings' ? <SettingsPage settingsTab={settingsTab} setSettingsTab={setSettingsTab} appearance={appearance} patch={patch} chooseTheme={chooseTheme}/>
              : page === 'Today' ? <TodayWorkspace/>
              : page === 'Activity' ? <ActivityPage/>
              : <Dashboard page={page}/>} 
          </section>
        </main>
      </div>
    </div>
  );
}

function TodayWorkspace() {
  const todayIso = isoDate(new Date());
  const [preset, setPreset] = useState<DatePreset>('today');
  const [selectedDate, setSelectedDate] = useState(todayIso);
  const [tab, setTab] = useState<TodayTab>('all');
  const [status, setStatus] = useState<StatusFilter>('all');

  const range = useMemo(() => {
    if (preset === 'yesterday') return { start:itemDate(-1), end:itemDate(-1) };
    if (preset === 'today') return { start:itemDate(0), end:itemDate(0) };
    if (preset === 'tomorrow') return { start:itemDate(1), end:itemDate(1) };
    if (preset === 'last7') return { start:itemDate(-6), end:itemDate(0) };
    if (preset === 'next7') return { start:itemDate(0), end:itemDate(6) };
    return { start:selectedDate, end:selectedDate };
  }, [preset, selectedDate]);

  const filtered = workspaceItems.filter((item) => {
    const date = itemDate(item.offset);
    const dateMatch = date >= range.start && date <= range.end;
    const tabMatch = tab === 'all' || item.type === tab.slice(0,-1) || (tab === 'followups' && item.type === 'followup') || (tab === 'calendar' && item.type === 'calendar');
    const statusMatch = status === 'all' || item.status === status;
    return dateMatch && tabMatch && statusMatch;
  }).sort((a,b) => itemDate(a.offset).localeCompare(itemDate(b.offset)) || a.time.localeCompare(b.time));

  const counts = {
    orders: filtered.filter(i=>i.type==='order').length,
    followups: filtered.filter(i=>i.type==='followup').length,
    tasks: filtered.filter(i=>i.type==='task').length,
    calendar: filtered.filter(i=>i.type==='calendar').length,
  };

  const applyPreset = (next: DatePreset) => {
    setPreset(next);
    if (next === 'yesterday') setSelectedDate(itemDate(-1));
    if (next === 'today') setSelectedDate(itemDate(0));
    if (next === 'tomorrow') setSelectedDate(itemDate(1));
  };
  const moveDay = (days:number) => {
    const base = new Date(`${selectedDate}T12:00:00`);
    const next = isoDate(shiftDate(base,days));
    setSelectedDate(next); setPreset(next === todayIso ? 'today' : 'custom');
  };
  const rangeLabel = range.start === range.end ? prettyDate(range.start) : `${prettyDate(range.start)} — ${prettyDate(range.end)}`;

  return <>
    <div className="today-hero"><div><p className="eyebrow">Overview · Daily workspace</p><h1>Today</h1><p className="muted">Orders, follow-ups, tasks and calendar events in one operational view.</p><div className="today-date">{rangeLabel}</div></div><button className="primary-btn"><Plus size={17}/> Add activity</button></div>

    <div className="date-toolbar">
      <div className="date-presets">
        {([['yesterday','Yesterday'],['today','Today'],['tomorrow','Tomorrow'],['last7','Last 7 days'],['next7','Next 7 days']] as [DatePreset,string][]).map(([id,label]) => <button key={id} className={preset===id?'selected':''} onClick={()=>applyPreset(id)}>{label}</button>)}
      </div>
      <div className="date-stepper">
        <button aria-label="Previous day" onClick={()=>moveDay(-1)}><ChevronLeft size={16}/></button>
        <label className="date-picker-wrap"><CalendarDays size={15}/><input aria-label="Choose date" type="date" value={selectedDate} onChange={(e)=>{setSelectedDate(e.target.value);setPreset('custom')}}/></label>
        <button aria-label="Next day" onClick={()=>moveDay(1)}><ChevronRight size={16}/></button>
      </div>
    </div>

    <div className="today-summary">
      <SummaryCard icon={ShoppingBag} label="Orders" value={counts.orders}/>
      <SummaryCard icon={PhoneCall} label="Follow-ups" value={counts.followups}/>
      <SummaryCard icon={ListChecks} label="Tasks" value={counts.tasks}/>
      <SummaryCard icon={CalendarDays} label="Calendar" value={counts.calendar}/>
    </div>

    <div className="today-tabs">
      {([['all','All activity'],['orders','Orders'],['followups','Follow-ups'],['tasks','Tasks'],['calendar','Calendar']] as [TodayTab,string][]).map(([id,label]) => <button key={id} className={tab===id?'selected':''} onClick={()=>setTab(id)}>{label}</button>)}
    </div>

    <section className="card today-panel">
      <div className="today-panel-head"><div className="today-section-title"><Clock3 size={17}/><div><h3>{tab === 'all' ? 'Daily timeline' : tab[0].toUpperCase()+tab.slice(1)}</h3><p className="muted">{filtered.length} item{filtered.length===1?'':'s'} in this view</p></div></div><div className="status-filters">{(['all','pending','completed','overdue'] as StatusFilter[]).map(s=><button key={s} className={status===s?'selected':''} onClick={()=>setStatus(s)}>{s}</button>)}</div></div>
      <div className="today-list">{filtered.length ? filtered.map(item => <TodayRow key={item.id} item={item}/>) : <div className="empty-state"><CalendarDays size={28}/><p>No activities match this date and filter.</p></div>}</div>
    </section>
  </>;
}

function SummaryCard({icon:Icon,label,value}:{icon:typeof ShoppingBag;label:string;value:number}) { return <article className="card summary-card"><div className="summary-icon"><Icon size={18}/></div><div><div className="summary-value">{value}</div><div className="summary-label">{label}</div></div></article>; }

function TodayRow({item}:{item:TodayItem}) {
  const Icon = item.type === 'order' ? ShoppingBag : item.type === 'followup' ? MessageCircle : item.type === 'task' ? ListChecks : CalendarDays;
  return <div className="today-item"><div className="item-time">{itemDate(item.offset) === isoDate(new Date()) ? item.time : new Date(`${itemDate(item.offset)}T12:00:00`).toLocaleDateString(undefined,{month:'short',day:'numeric'})}<br/>{itemDate(item.offset) === isoDate(new Date()) ? '' : item.time}</div><div className={`item-icon ${item.type}`}><Icon size={17}/></div><div><div className="item-title">{item.title}</div><div className="item-meta"><span>{item.meta}</span><span>·</span><span>{item.type}</span></div></div><div className="item-actions">{item.priority && <span className={`priority-chip ${item.priority}`}>{item.priority}</span>}<span className={`status-chip ${item.status}`}>{item.status}</span></div></div>;
}

function ActivityPage() {
  return <><div className="page-heading"><div><p className="eyebrow">Overview</p><h1>Activity</h1><p className="muted">A chronological audit of important changes across your business.</p></div></div><div className="card"><div className="setting-head"><div><h3>Recent activity</h3><p className="muted">Orders, customers, inventory, payments and team actions.</p></div><Activity size={18}/></div><div className="activity-feed">{auditItems.map(([title,body,time],index)=><div className="activity-row" key={title}><div className="activity-dot">{index===0?<CheckCircle2 size={16}/>:<Activity size={15}/>}</div><div><strong>{title}</strong><p>{body}</p></div><div className="activity-time">{time}</div></div>)}</div></div></>;
}

function SettingsPage({settingsTab,setSettingsTab,appearance,patch,chooseTheme}:{settingsTab:string;setSettingsTab:(v:string)=>void;appearance:Appearance;patch:(n:Partial<Appearance>)=>void;chooseTheme:(id:ThemeId,accent:string)=>void}) {
  return <><div className="page-heading"><div><p className="eyebrow">Workspace</p><h1>Settings</h1><p className="muted">Control KIOSK preferences and the visual system used across every module.</p></div></div><div className="settings-layout"><aside className="settings-menu">{['General','Appearance','Brand','Notifications','Integrations','Templates'].map((item)=><button key={item} className={settingsTab===item?'selected':''} onClick={()=>setSettingsTab(item)}>{item==='Appearance'&&<Palette size={16}/>} {item}</button>)}</aside><div className="settings-main">{settingsTab==='Appearance'?<AppearancePanel appearance={appearance} patch={patch} chooseTheme={chooseTheme}/>:<div className="card empty-settings"><h2>{settingsTab}</h2><p className="muted">This settings section will be connected as its module is implemented.</p></div>}</div></div></>;
}

function AppearancePanel({ appearance, patch, chooseTheme }: { appearance: Appearance; patch: (n: Partial<Appearance>) => void; chooseTheme: (id: ThemeId, accent: string) => void }) {
  return <div className="appearance-stack"><div className="section-title"><WandSparkles size={21}/><div><h2>Appearance</h2><p className="muted">Personalize the workspace with color, style, typography, layout and visual density.</p></div></div>
    <section className="settings-card"><div className="setting-head"><div><h3>Color themes</h3><p className="muted">Choose a polished color direction for the entire platform.</p></div><Palette size={19}/></div><div className="theme-grid">{themes.map((t)=><button key={t.id} className={`theme-card ${appearance.theme===t.id?'selected':''}`} onClick={()=>chooseTheme(t.id,t.accent)}><div className={`theme-preview preview-${t.id}`}><span/><div><i/><i/><i/></div></div><div className="theme-meta"><strong>{t.name}</strong>{appearance.theme===t.id&&<Check size={17}/>}</div><p>{t.desc}</p></button>)}</div></section>
    <section className="settings-card"><div className="setting-head"><div><h3>Theme style</h3><p className="muted">Change the visual character without changing your selected colors.</p></div><Gem size={19}/></div><div className="style-grid">{stylePresets.map(({id,name,desc,icon:Icon})=><button key={id} className={`style-card ${appearance.style===id?'selected':''}`} onClick={()=>patch({style:id})}><div className="style-icon"><Icon size={20}/></div><div><div className="style-name"><strong>{name}</strong>{appearance.style===id&&<Check size={16}/>}</div><p>{desc}</p></div></button>)}</div></section>
    <section className="settings-card"><div className="setting-head"><div><h3>Typography</h3><p className="muted">Choose from the strongest font families available across the KIOSK design library.</p></div><Type size={18}/></div><div className="font-grid">{fonts.map(([id,label])=><button key={id} onClick={()=>patch({font:id})} className={`option-tile font-${id} ${appearance.font===id?'selected':''}`}><strong>{label}</strong><span>The quick brown fox</span>{appearance.font===id&&<small>Selected</small>}</button>)}</div></section>
    <section className="settings-card"><div className="setting-head"><div><h3>Size & density</h3><p className="muted">Control text scale and information density across tables, cards and forms.</p></div><SlidersHorizontal size={18}/></div><div className="control-grid"><IconControl title="Text size" values={[['small','Small',CircleDot],['default','Default',CircleDot],['large','Large',CircleDot]]} active={appearance.scale} onChange={(v)=>patch({scale:v as Scale})}/><IconControl title="Density" values={[['compact','Compact',Minimize2],['comfortable','Comfortable',LayoutGrid],['spacious','Spacious',Sparkles]]} active={appearance.density} onChange={(v)=>patch({density:v as Density})}/></div></section>
    <section className="settings-card"><div className="setting-head"><div><h3>Layout & surface</h3><p className="muted">Choose navigation structure and surface treatment independently.</p></div><LayoutDashboard size={18}/></div><div className="control-grid"><IconControl title="App layout" values={[['sidebar','Sidebar',LayoutDashboard],['compact-sidebar','Compact',Minimize2],['topnav','Top navigation',LayoutGrid]]} active={appearance.template} onChange={(v)=>patch({template:v as Template})}/><IconControl title="Surface pattern" values={[['clean','Clean',CircleDot],['soft','Soft',Sparkles],['grid','Grid',Grid3X3],['glass','Glass',Gem]]} active={appearance.pattern} onChange={(v)=>patch({pattern:v as Pattern})}/></div></section>
    <section className="settings-card"><div className="setting-head"><div><h3>Color mode & brand accent</h3><p className="muted">Light and dark mode work independently. Accent color can personalize any theme.</p></div></div><div className="mode-row"><div className="segmented"><button className={appearance.mode==='light'?'selected':''} onClick={()=>patch({mode:'light'})}><Sun size={16}/> Light</button><button className={appearance.mode==='dark'?'selected':''} onClick={()=>patch({mode:'dark'})}><Moon size={16}/> Dark</button></div><div className="color-row">{['#7C3AED','#2563EB','#059669','#0B1F3A','#E11D48','#D97706'].map(c=><button aria-label={`Use ${c}`} key={c} className={appearance.accent.toLowerCase()===c.toLowerCase()?'color selected':'color'} style={{background:c}} onClick={()=>patch({accent:c})}/>)}<input aria-label="Custom accent" type="color" value={appearance.accent} onChange={(e)=>patch({accent:e.target.value})}/></div></div></section>
  </div>;
}

function IconControl({title,values,active,onChange}:{title:string;values:[string,string,typeof CircleDot][];active:string;onChange:(v:string)=>void}) { return <div><label>{title}</label><div className="segmented wrap icon-segmented">{values.map(([value,label,Icon])=><button key={value} onClick={()=>onChange(value)} className={active===value?'selected':''}><Icon size={15}/>{label}</button>)}</div></div>; }

function Dashboard({page}:{page:string}) { return <><div className="page-heading"><div><p className="eyebrow">Overview</p><h1>{page}</h1><p className="muted">{page==='Dashboard'?'Your business at a glance, with the most important signals first.':'KIOSK module shell. Appearance choices apply here immediately.'}</p></div><button className="primary-btn"><Plus size={17}/> Quick create</button></div><div className="metric-grid">{metrics.map(([label,value,helper])=><article className="card metric-card" key={label}><div className="metric-label">{label}</div><div className="metric-value">{value}</div><div className="metric-helper">{helper}</div></article>)}</div><div className="content-grid"><article className="card large-card"><h2>Business activity</h2><div className="chart-placeholder">{[40,58,46,76,64,88].map((h,i)=><div className="bar" key={i} style={{height:`${h}%`}}/>)}</div></article><article className="card"><h2>Quick actions</h2><div className="quick-actions"><button>Add customer</button><button>Create order</button><button>Add product</button><button>View inventory</button></div></article></div></>; }
