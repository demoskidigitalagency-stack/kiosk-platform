import { useEffect, useMemo, useState } from 'react';
import { Bell, Boxes, Check, FileText, LayoutDashboard, MessageSquare, Moon, Package, Palette, Plus, Search, Settings, ShoppingBag, SlidersHorizontal, Sun, Type, Users } from 'lucide-react';

type ThemeId = 'kiosk' | 'sync' | 'kioskcrm' | 'weave' | 'bizflow';
type FontId = 'inter' | 'figtree' | 'outfit' | 'dm-sans' | 'space-grotesk' | 'jakarta' | 'manrope' | 'sora';
type Density = 'compact' | 'comfortable' | 'spacious';
type Scale = 'small' | 'default' | 'large';
type Pattern = 'clean' | 'soft' | 'grid' | 'glass';
type Template = 'sidebar' | 'compact-sidebar' | 'topnav';
type Mode = 'light' | 'dark';

type Appearance = {
  theme: ThemeId;
  font: FontId;
  density: Density;
  scale: Scale;
  pattern: Pattern;
  template: Template;
  mode: Mode;
  accent: string;
};

const defaultAppearance: Appearance = {
  theme: 'kiosk', font: 'inter', density: 'comfortable', scale: 'default', pattern: 'clean', template: 'sidebar', mode: 'light', accent: '#7C3AED',
};

const nav = [
  [LayoutDashboard, 'Dashboard'], [Users, 'Customers'], [Package, 'Products'], [ShoppingBag, 'Orders'],
  [FileText, 'Invoices'], [Boxes, 'Inventory'], [MessageSquare, 'Messages'], [Settings, 'Settings'],
] as const;

const themes = [
  { id: 'kiosk' as const, name: 'KIOSK', source: 'Current platform', desc: 'Purple + navy KIOSK brand system.', accent: '#7C3AED' },
  { id: 'sync' as const, name: 'Sync Prestige', source: 'SYNC SMART CRM', desc: 'Emerald prestige with gold hierarchy.', accent: '#047857' },
  { id: 'kioskcrm' as const, name: 'Emerald Prestige', source: 'KIOSK CRM', desc: 'Emerald, cream and gold with softer depth.', accent: '#065F46' },
  { id: 'weave' as const, name: 'ClaimSender Blue', source: 'WEAVE LANE', desc: 'Blue + cyan SaaS system with crisp surfaces.', accent: '#2563EB' },
  { id: 'bizflow' as const, name: 'BizFlow Modern', source: 'BIZFLOW', desc: 'Neutral business UI with configurable brand color.', accent: '#3B82F6' },
];

const fonts = [
  ['inter', 'Inter', 'KIOSK'], ['figtree', 'Figtree', 'SYNC SMART CRM'], ['outfit', 'Outfit', 'SYNC SMART CRM'],
  ['dm-sans', 'DM Sans', 'KIOSK CRM'], ['space-grotesk', 'Space Grotesk', 'KIOSK CRM'], ['jakarta', 'Plus Jakarta Sans', 'WEAVE LANE'],
  ['manrope', 'Manrope', 'BIZFLOW'], ['sora', 'Sora', 'BIZFLOW'],
] as const;

const metrics = [['Total customers','1,248','+8.2%'],['Orders this month','386','+12.4%'],['Revenue','₦8.42M','+6.8%'],['Low stock items','14','Needs attention']];

export function App() {
  const [page, setPage] = useState('Settings');
  const [settingsTab, setSettingsTab] = useState('Appearance');
  const [appearance, setAppearance] = useState<Appearance>(() => {
    try { return { ...defaultAppearance, ...JSON.parse(localStorage.getItem('kiosk-appearance') || '{}') }; } catch { return defaultAppearance; }
  });

  useEffect(() => { localStorage.setItem('kiosk-appearance', JSON.stringify(appearance)); }, [appearance]);
  const rootClass = useMemo(() => `theme-${appearance.theme} mode-${appearance.mode} density-${appearance.density} scale-${appearance.scale} pattern-${appearance.pattern} template-${appearance.template} font-${appearance.font}`, [appearance]);

  const patch = (next: Partial<Appearance>) => setAppearance((current) => ({ ...current, ...next }));
  const chooseTheme = (id: ThemeId, accent: string) => patch({ theme: id, accent });

  return (
    <div className={rootClass} style={{ '--user-accent': appearance.accent } as React.CSSProperties}>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand"><div className="brand-mark">K</div><div><div className="brand-name">KIOSK</div><div className="brand-tagline">Your business, under one roof.</div></div></div>
          <nav>{nav.map(([Icon,label]) => <button key={label} onClick={() => setPage(label)} className={`nav-item ${page === label ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></button>)}</nav>
          <div className="sidebar-footer">KIOSK Platform · unified design system</div>
        </aside>
        <main className="main-area">
          <header className="topbar"><div className="search-wrap"><Search size={18}/><input placeholder="Search anything…"/></div><div className="topbar-actions"><button className="icon-btn primary"><Plus size={18}/></button><button className="icon-btn"><Bell size={18}/></button><div className="avatar">AD</div></div></header>
          <section className="content">
            {page === 'Settings' ? (
              <>
                <div className="page-heading"><div><p className="eyebrow">Workspace</p><h1>Settings</h1><p className="muted">Control KIOSK preferences and the visual system used across every module.</p></div></div>
                <div className="settings-layout">
                  <aside className="settings-menu">
                    {['General','Appearance','Brand','Notifications','Integrations','Templates'].map((item) => <button key={item} className={settingsTab === item ? 'selected' : ''} onClick={() => setSettingsTab(item)}>{item === 'Appearance' && <Palette size={16}/>} {item}</button>)}
                  </aside>
                  <div className="settings-main">
                    {settingsTab === 'Appearance' ? <AppearancePanel appearance={appearance} patch={patch} chooseTheme={chooseTheme}/> : <div className="card empty-settings"><h2>{settingsTab}</h2><p className="muted">This settings section will be connected next. Appearance is the first unified module.</p></div>}
                  </div>
                </div>
              </>
            ) : <Dashboard page={page}/>} 
          </section>
        </main>
      </div>
    </div>
  );
}

function AppearancePanel({ appearance, patch, chooseTheme }: { appearance: Appearance; patch: (n: Partial<Appearance>) => void; chooseTheme: (id: ThemeId, accent: string) => void }) {
  return <div className="appearance-stack">
    <div><div className="section-title"><Palette size={20}/><div><h2>Appearance</h2><p className="muted">Synced visual options from the four source applications, available globally in KIOSK.</p></div></div></div>

    <section className="settings-card"><div className="setting-head"><div><h3>Theme library</h3><p className="muted">Switch the entire platform between imported visual systems.</p></div><span className="status-pill">{themes.find(t => t.id === appearance.theme)?.name}</span></div><div className="theme-grid">{themes.map((t) => <button key={t.id} className={`theme-card ${appearance.theme === t.id ? 'selected' : ''}`} onClick={() => chooseTheme(t.id,t.accent)}><div className={`theme-preview preview-${t.id}`}><span/><div><i/><i/><i/></div></div><div className="theme-meta"><div><strong>{t.name}</strong><small>{t.source}</small></div>{appearance.theme === t.id && <Check size={17}/>}</div><p>{t.desc}</p></button>)}</div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Typography</h3><p className="muted">Font families gathered from KIOSK, Sync, Kiosk CRM, Weave Lane and BizFlow.</p></div><Type size={18}/></div><div className="font-grid">{fonts.map(([id,label,source]) => <button key={id} onClick={() => patch({font:id})} className={`option-tile font-${id} ${appearance.font === id ? 'selected' : ''}`}><strong>{label}</strong><span>The quick brown fox</span><small>{source}</small></button>)}</div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Size & density</h3><p className="muted">Control text scale and information density across tables, cards and forms.</p></div><SlidersHorizontal size={18}/></div><div className="control-grid"><Control title="Text size" values={['small','default','large']} active={appearance.scale} onChange={(v) => patch({scale:v as Scale})}/><Control title="Density" values={['compact','comfortable','spacious']} active={appearance.density} onChange={(v) => patch({density:v as Density})}/></div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Template & pattern</h3><p className="muted">Choose the structural template and surface treatment independently from the color theme.</p></div></div><div className="control-grid"><Control title="App template" values={['sidebar','compact-sidebar','topnav']} active={appearance.template} onChange={(v) => patch({template:v as Template})}/><Control title="Surface pattern" values={['clean','soft','grid','glass']} active={appearance.pattern} onChange={(v) => patch({pattern:v as Pattern})}/></div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Color mode & brand accent</h3><p className="muted">Light/dark mode works independently. Brand accent can override the imported theme primary.</p></div></div><div className="mode-row"><div className="segmented"><button className={appearance.mode === 'light' ? 'selected' : ''} onClick={() => patch({mode:'light'})}><Sun size={16}/> Light</button><button className={appearance.mode === 'dark' ? 'selected' : ''} onClick={() => patch({mode:'dark'})}><Moon size={16}/> Dark</button></div><div className="color-row">{['#7C3AED','#2563EB','#059669','#0B1F3A','#E11D48','#D97706'].map(c => <button key={c} className={appearance.accent.toLowerCase() === c.toLowerCase() ? 'color selected' : 'color'} style={{background:c}} onClick={() => patch({accent:c})}/>) }<input type="color" value={appearance.accent} onChange={(e) => patch({accent:e.target.value})}/></div></div></section>
  </div>;
}

function Control({title,values,active,onChange}:{title:string;values:string[];active:string;onChange:(v:string)=>void}) { return <div><label>{title}</label><div className="segmented wrap">{values.map(v => <button key={v} onClick={() => onChange(v)} className={active === v ? 'selected' : ''}>{v.replace('-', ' ')}</button>)}</div></div>; }

function Dashboard({page}:{page:string}) { return <><div className="page-heading"><div><p className="eyebrow">Overview</p><h1>{page}</h1><p className="muted">KIOSK module shell. Appearance choices apply here immediately.</p></div><button className="primary-btn"><Plus size={17}/> Quick create</button></div><div className="metric-grid">{metrics.map(([label,value,helper]) => <article className="card metric-card" key={label}><div className="metric-label">{label}</div><div className="metric-value">{value}</div><div className="metric-helper">{helper}</div></article>)}</div><div className="content-grid"><article className="card large-card"><h2>Business activity</h2><div className="chart-placeholder">{[40,58,46,76,64,88].map((h,i)=><div className="bar" key={i} style={{height:`${h}%`}}/>)}</div></article><article className="card"><h2>Quick actions</h2><div className="quick-actions"><button>Add customer</button><button>Create order</button><button>Add product</button><button>View inventory</button></div></article></div></>; }
