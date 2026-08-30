import { useEffect, useMemo, useState } from 'react';
import {
  Bell, Boxes, Check, CircleDot, Crown, FileText, Gem, Grid3X3, LayoutDashboard,
  LayoutGrid, MessageSquare, Minimize2, Moon, Package, Palette, Plus, Search,
  Settings, ShoppingBag, SlidersHorizontal, Sparkles, Sun, Type, Users, WandSparkles,
} from 'lucide-react';

type ThemeId = 'kiosk' | 'sync' | 'kioskcrm' | 'weave' | 'bizflow';
type StyleId = 'classic' | 'modern' | 'premium' | 'minimal' | 'bold';
type FontId = 'inter' | 'figtree' | 'outfit' | 'dm-sans' | 'space-grotesk' | 'jakarta' | 'manrope' | 'sora';
type Density = 'compact' | 'comfortable' | 'spacious';
type Scale = 'small' | 'default' | 'large';
type Pattern = 'clean' | 'soft' | 'grid' | 'glass';
type Template = 'sidebar' | 'compact-sidebar' | 'topnav';
type Mode = 'light' | 'dark';

type Appearance = {
  theme: ThemeId;
  style: StyleId;
  font: FontId;
  density: Density;
  scale: Scale;
  pattern: Pattern;
  template: Template;
  mode: Mode;
  accent: string;
};

const defaultAppearance: Appearance = {
  theme: 'kiosk', style: 'modern', font: 'inter', density: 'comfortable', scale: 'default',
  pattern: 'clean', template: 'sidebar', mode: 'light', accent: '#7C3AED',
};

const nav = [
  [LayoutDashboard, 'Dashboard'], [Users, 'Customers'], [Package, 'Products'], [ShoppingBag, 'Orders'],
  [FileText, 'Invoices'], [Boxes, 'Inventory'], [MessageSquare, 'Messages'], [Settings, 'Settings'],
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

export function App() {
  const [page, setPage] = useState('Settings');
  const [settingsTab, setSettingsTab] = useState('Appearance');
  const [appearance, setAppearance] = useState<Appearance>(() => {
    try { return { ...defaultAppearance, ...JSON.parse(localStorage.getItem('kiosk-appearance') || '{}') }; }
    catch { return defaultAppearance; }
  });

  useEffect(() => { localStorage.setItem('kiosk-appearance', JSON.stringify(appearance)); }, [appearance]);
  const rootClass = useMemo(
    () => `theme-${appearance.theme} style-${appearance.style} mode-${appearance.mode} density-${appearance.density} scale-${appearance.scale} pattern-${appearance.pattern} template-${appearance.template} font-${appearance.font}`,
    [appearance],
  );
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
    <div className="section-title"><WandSparkles size={21}/><div><h2>Appearance</h2><p className="muted">Personalize the workspace with color, style, typography, layout and visual density.</p></div></div>

    <section className="settings-card">
      <div className="setting-head"><div><h3>Color themes</h3><p className="muted">Choose a polished color direction for the entire platform.</p></div><Palette size={19}/></div>
      <div className="theme-grid">{themes.map((t) => <button key={t.id} className={`theme-card ${appearance.theme === t.id ? 'selected' : ''}`} onClick={() => chooseTheme(t.id,t.accent)}><div className={`theme-preview preview-${t.id}`}><span/><div><i/><i/><i/></div></div><div className="theme-meta"><strong>{t.name}</strong>{appearance.theme === t.id && <Check size={17}/>}</div><p>{t.desc}</p></button>)}</div>
    </section>

    <section className="settings-card">
      <div className="setting-head"><div><h3>Theme style</h3><p className="muted">Change the visual character without changing your selected colors.</p></div><Gem size={19}/></div>
      <div className="style-grid">{stylePresets.map(({id,name,desc,icon:Icon}) => <button key={id} className={`style-card ${appearance.style === id ? 'selected' : ''}`} onClick={() => patch({style:id})}><div className="style-icon"><Icon size={20}/></div><div><div className="style-name"><strong>{name}</strong>{appearance.style === id && <Check size={16}/>}</div><p>{desc}</p></div></button>)}</div>
    </section>

    <section className="settings-card"><div className="setting-head"><div><h3>Typography</h3><p className="muted">Choose from the strongest font families available across the KIOSK design library.</p></div><Type size={18}/></div><div className="font-grid">{fonts.map(([id,label]) => <button key={id} onClick={() => patch({font:id})} className={`option-tile font-${id} ${appearance.font === id ? 'selected' : ''}`}><strong>{label}</strong><span>The quick brown fox</span>{appearance.font === id && <small>Selected</small>}</button>)}</div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Size & density</h3><p className="muted">Control text scale and information density across tables, cards and forms.</p></div><SlidersHorizontal size={18}/></div><div className="control-grid"><IconControl title="Text size" values={[['small','Small',CircleDot],['default','Default',CircleDot],['large','Large',CircleDot]]} active={appearance.scale} onChange={(v) => patch({scale:v as Scale})}/><IconControl title="Density" values={[['compact','Compact',Minimize2],['comfortable','Comfortable',LayoutGrid],['spacious','Spacious',Sparkles]]} active={appearance.density} onChange={(v) => patch({density:v as Density})}/></div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Layout & surface</h3><p className="muted">Choose the navigation structure and visual surface treatment independently.</p></div><LayoutDashboard size={18}/></div><div className="control-grid"><IconControl title="App layout" values={[['sidebar','Sidebar',LayoutDashboard],['compact-sidebar','Compact',Minimize2],['topnav','Top navigation',LayoutGrid]]} active={appearance.template} onChange={(v) => patch({template:v as Template})}/><IconControl title="Surface pattern" values={[['clean','Clean',CircleDot],['soft','Soft',Sparkles],['grid','Grid',Grid3X3],['glass','Glass',Gem]]} active={appearance.pattern} onChange={(v) => patch({pattern:v as Pattern})}/></div></section>

    <section className="settings-card"><div className="setting-head"><div><h3>Color mode & brand accent</h3><p className="muted">Light and dark mode work independently. Accent color can personalize any theme.</p></div></div><div className="mode-row"><div className="segmented"><button className={appearance.mode === 'light' ? 'selected' : ''} onClick={() => patch({mode:'light'})}><Sun size={16}/> Light</button><button className={appearance.mode === 'dark' ? 'selected' : ''} onClick={() => patch({mode:'dark'})}><Moon size={16}/> Dark</button></div><div className="color-row">{['#7C3AED','#2563EB','#059669','#0B1F3A','#E11D48','#D97706'].map(c => <button key={c} className={appearance.accent.toLowerCase() === c.toLowerCase() ? 'color selected' : 'color'} style={{background:c}} onClick={() => patch({accent:c})}/>) }<input type="color" value={appearance.accent} onChange={(e) => patch({accent:e.target.value})}/></div></div></section>
  </div>;
}

function IconControl({title,values,active,onChange}:{title:string;values:[string,string,typeof CircleDot][];active:string;onChange:(v:string)=>void}) {
  return <div><label>{title}</label><div className="segmented wrap icon-segmented">{values.map(([value,label,Icon]) => <button key={value} onClick={() => onChange(value)} className={active === value ? 'selected' : ''}><Icon size={15}/>{label}</button>)}</div></div>;
}

function Dashboard({page}:{page:string}) { return <><div className="page-heading"><div><p className="eyebrow">Overview</p><h1>{page}</h1><p className="muted">KIOSK module shell. Appearance choices apply here immediately.</p></div><button className="primary-btn"><Plus size={17}/> Quick create</button></div><div className="metric-grid">{metrics.map(([label,value,helper]) => <article className="card metric-card" key={label}><div className="metric-label">{label}</div><div className="metric-value">{value}</div><div className="metric-helper">{helper}</div></article>)}</div><div className="content-grid"><article className="card large-card"><h2>Business activity</h2><div className="chart-placeholder">{[40,58,46,76,64,88].map((h,i)=><div className="bar" key={i} style={{height:`${h}%`}}/>)}</div></article><article className="card"><h2>Quick actions</h2><div className="quick-actions"><button>Add customer</button><button>Create order</button><button>Add product</button><button>View inventory</button></div></article></div></>; }
