import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle, CalendarDays, Check, ChevronDown, ChevronUp, CircleDollarSign,
  Clock3, GripVertical, LayoutGrid, ListChecks, PackageSearch, PhoneCall, RotateCcw,
  Settings2, ShoppingBag, Sparkles, TrendingUp, Users,
} from 'lucide-react';

type WidgetId = 'sales' | 'orders' | 'followups' | 'tasks' | 'calendar' | 'inventory' | 'customers' | 'cash' | 'activity' | 'quick';
type DashboardDensity = 'compact' | 'standard' | 'comfortable';
type DashboardConfig = { order: WidgetId[]; hidden: WidgetId[]; density: DashboardDensity };

type WidgetDefinition = {
  id: WidgetId;
  name: string;
  description: string;
  size: 'stat' | 'wide' | 'half';
};

const definitions: WidgetDefinition[] = [
  { id:'sales', name:'Sales today', description:'Revenue and sales movement', size:'stat' },
  { id:'orders', name:"Today's orders", description:'Orders requiring attention', size:'stat' },
  { id:'followups', name:'Follow-ups', description:'Customer follow-ups due today', size:'stat' },
  { id:'tasks', name:'Tasks', description:'Open and overdue work', size:'stat' },
  { id:'calendar', name:'Next on calendar', description:'Upcoming meetings and events', size:'half' },
  { id:'inventory', name:'Stock alerts', description:'Low-stock and inventory warnings', size:'half' },
  { id:'customers', name:'Customer pulse', description:'New and returning customers', size:'half' },
  { id:'cash', name:'Cash position', description:'Payments and expected cash', size:'half' },
  { id:'activity', name:'Business activity', description:'Recent activity and performance', size:'wide' },
  { id:'quick', name:'Quick actions', description:'Frequently used actions', size:'half' },
];

const defaultConfig: DashboardConfig = {
  order: definitions.map(w => w.id),
  hidden: [],
  density: 'standard',
};

function loadConfig(): DashboardConfig {
  try {
    const saved = JSON.parse(localStorage.getItem('kiosk-dashboard-config') || '{}') as Partial<DashboardConfig>;
    const known = new Set(definitions.map(w => w.id));
    const order = (saved.order || []).filter(id => known.has(id));
    definitions.forEach(w => { if (!order.includes(w.id)) order.push(w.id); });
    return {
      order,
      hidden: (saved.hidden || []).filter(id => known.has(id)),
      density: saved.density || 'standard',
    };
  } catch { return defaultConfig; }
}

export function CustomDashboard({ onOpenToday }: { onOpenToday: () => void }) {
  const [config, setConfig] = useState<DashboardConfig>(loadConfig);
  const [customizing, setCustomizing] = useState(false);

  useEffect(() => { localStorage.setItem('kiosk-dashboard-config', JSON.stringify(config)); }, [config]);

  const visible = useMemo(() => config.order.filter(id => !config.hidden.includes(id)), [config]);
  const toggle = (id: WidgetId) => setConfig(c => ({ ...c, hidden: c.hidden.includes(id) ? c.hidden.filter(x => x !== id) : [...c.hidden,id] }));
  const move = (id: WidgetId, direction: -1 | 1) => setConfig(c => {
    const order = [...c.order]; const index = order.indexOf(id); const next = index + direction;
    if (index < 0 || next < 0 || next >= order.length) return c;
    [order[index],order[next]] = [order[next],order[index]];
    return { ...c, order };
  });
  const reset = () => setConfig(defaultConfig);

  return <>
    <div className="dashboard-head">
      <div><p className="eyebrow">Overview</p><h1>Dashboard</h1><p className="muted">Your business at a glance. Keep only the information that matters to you.</p></div>
      <div className="dashboard-head-actions"><button className="secondary-btn" onClick={() => setCustomizing(v => !v)}><Settings2 size={16}/>{customizing?'Done':'Customize'}</button><button className="primary-btn" onClick={onOpenToday}><CalendarDays size={17}/> Open Today</button></div>
    </div>

    {customizing && <section className="card dashboard-customizer">
      <div className="customizer-head"><div><h3>Customize dashboard</h3><p className="muted">Show, hide and reorder widgets. Your layout is saved on this device.</p></div><button className="text-btn" onClick={reset}><RotateCcw size={15}/> Reset default</button></div>
      <div className="customizer-controls"><label>Dashboard spacing<select value={config.density} onChange={e => setConfig(c => ({...c,density:e.target.value as DashboardDensity}))}><option value="compact">Compact</option><option value="standard">Standard</option><option value="comfortable">Comfortable</option></select></label></div>
      <div className="widget-manager">{config.order.map((id,index) => { const w=definitions.find(x=>x.id===id)!; const enabled=!config.hidden.includes(id); return <div className="widget-manager-row" key={id}><GripVertical size={16}/><div className="widget-manager-copy"><strong>{w.name}</strong><span>{w.description}</span></div><button className="reorder-btn" disabled={index===0} onClick={()=>move(id,-1)} aria-label={`Move ${w.name} up`}><ChevronUp size={15}/></button><button className="reorder-btn" disabled={index===config.order.length-1} onClick={()=>move(id,1)} aria-label={`Move ${w.name} down`}><ChevronDown size={15}/></button><button className={`visibility-toggle ${enabled?'enabled':''}`} onClick={()=>toggle(id)}>{enabled?<><Check size={14}/>Shown</>:<>Hidden</>}</button></div> })}</div>
    </section>}

    <div className={`custom-dashboard density-${config.density}`}>
      {visible.map(id => <DashboardWidget key={id} id={id} onOpenToday={onOpenToday}/>) }
    </div>
    {!visible.length && <div className="card dashboard-empty"><LayoutGrid size={28}/><h3>Your dashboard is empty</h3><p className="muted">Choose Customize and turn on the widgets you want to see.</p><button className="secondary-btn" onClick={()=>setCustomizing(true)}>Customize dashboard</button></div>}
  </>;
}

function DashboardWidget({id,onOpenToday}:{id:WidgetId;onOpenToday:()=>void}) {
  if (id==='sales') return <StatWidget icon={TrendingUp} label="Sales today" value="₦331,500" helper="+12.8% vs yesterday" tone="good"/>;
  if (id==='orders') return <StatWidget icon={ShoppingBag} label="Today's orders" value="18" helper="5 need attention" action={onOpenToday}/>;
  if (id==='followups') return <StatWidget icon={PhoneCall} label="Follow-ups" value="8" helper="2 high priority" action={onOpenToday}/>;
  if (id==='tasks') return <StatWidget icon={ListChecks} label="Open tasks" value="7" helper="1 overdue" tone="warn" action={onOpenToday}/>;
  if (id==='calendar') return <article className="card dashboard-widget half"><WidgetTitle icon={CalendarDays} title="Next on calendar"/><div className="next-event"><div className="event-time">2:00 PM</div><div><strong>Weekly sales review</strong><span>Team meeting · 45 minutes</span></div></div><button className="widget-link" onClick={onOpenToday}>View daily workspace</button></article>;
  if (id==='inventory') return <article className="card dashboard-widget half"><WidgetTitle icon={PackageSearch} title="Stock alerts"/><div className="alert-list"><div><AlertTriangle size={15}/><span>Foldable Treadmill</span><strong>3 left</strong></div><div><AlertTriangle size={15}/><span>Spin Bike Pro</span><strong>5 left</strong></div><div><Sparkles size={15}/><span>12 other products</span><strong>Healthy</strong></div></div></article>;
  if (id==='customers') return <article className="card dashboard-widget half"><WidgetTitle icon={Users} title="Customer pulse"/><div className="pulse-grid"><div><strong>24</strong><span>New this week</span></div><div><strong>61%</strong><span>Returning</span></div><div><strong>9</strong><span>Need follow-up</span></div></div></article>;
  if (id==='cash') return <article className="card dashboard-widget half"><WidgetTitle icon={CircleDollarSign} title="Cash position"/><div className="cash-total">₦1.84M</div><p className="muted">Available + received today</p><div className="cash-split"><span>Received <strong>₦331.5K</strong></span><span>Expected <strong>₦184K</strong></span></div></article>;
  if (id==='activity') return <article className="card dashboard-widget wide"><WidgetTitle icon={TrendingUp} title="Business activity"/><div className="dashboard-chart">{[42,60,48,78,68,91,74].map((h,i)=><div key={i}><span style={{height:`${h}%`}}/><small>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</small></div>)}</div></article>;
  return <article className="card dashboard-widget half"><WidgetTitle icon={Sparkles} title="Quick actions"/><div className="dashboard-quick"><button>Create order</button><button>Add customer</button><button>Add product</button><button>Adjust stock</button></div></article>;
}

function StatWidget({icon:Icon,label,value,helper,tone,action}:{icon:typeof ShoppingBag;label:string;value:string;helper:string;tone?:'good'|'warn';action?:()=>void}) {
  return <article className={`card dashboard-widget stat ${action?'clickable':''}`} onClick={action}><div className="stat-top"><div className="dashboard-stat-icon"><Icon size={18}/></div>{action&&<span className="stat-open">Open</span>}</div><div className="dashboard-stat-label">{label}</div><div className="dashboard-stat-value">{value}</div><div className={`dashboard-stat-helper ${tone||''}`}>{helper}</div></article>;
}
function WidgetTitle({icon:Icon,title}:{icon:typeof CalendarDays;title:string}) { return <div className="widget-title"><Icon size={17}/><h3>{title}</h3></div>; }
