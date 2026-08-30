type AppearanceState = {
  theme: 'royal-violet' | 'forest-gold' | 'heritage' | 'ocean-blue' | 'slate';
  style: 'classic' | 'modern' | 'premium' | 'minimal' | 'bold';
  font: 'inter' | 'figtree' | 'outfit' | 'dm-sans' | 'space-grotesk' | 'jakarta' | 'manrope' | 'sora';
  scale: 'small' | 'default' | 'large';
  density: 'compact' | 'comfortable' | 'spacious';
  layout: 'standard' | 'sleek' | 'compact-sidebar' | 'executive' | 'topnav';
  pattern: 'clean' | 'soft' | 'grid' | 'glass';
  mode: 'light' | 'dark';
  accent: string;
};

const defaults: AppearanceState = {
  theme: 'royal-violet', style: 'modern', font: 'inter', scale: 'default', density: 'comfortable',
  layout: 'sleek', pattern: 'clean', mode: 'light', accent: '#7C3AED',
};

const themes = [
  ['royal-violet','Royal Violet','Confident violet with a deep navy workspace.','#7C3AED'],
  ['forest-gold','Forest Gold','Rich emerald tones with warm prestige accents.','#047857'],
  ['heritage','Heritage','Calm emerald, cream surfaces and refined warmth.','#065F46'],
  ['ocean-blue','Ocean Blue','Crisp blue and cyan for a bright modern workspace.','#2563EB'],
  ['slate','Slate','Neutral business surfaces with flexible brand color.','#3B82F6'],
] as const;
const styles = [
  ['classic','Classic','Compact, structured and familiar.'],['modern','Modern','Balanced spacing, clean cards and soft depth.'],
  ['premium','Premium','Generous space, elegant radius and elevated surfaces.'],['minimal','Minimal','Quiet surfaces, fewer shadows and sharp hierarchy.'],
  ['bold','Bold','Stronger contrast, larger controls and expressive depth.'],
] as const;
const fonts = [['inter','Inter'],['figtree','Figtree'],['outfit','Outfit'],['dm-sans','DM Sans'],['space-grotesk','Space Grotesk'],['jakarta','Plus Jakarta Sans'],['manrope','Manrope'],['sora','Sora']] as const;
const layouts = [
  ['standard','Standard Sidebar','Balanced sidebar workspace.'],['sleek','Sleek Sidebar','Recommended enterprise SaaS workspace.'],
  ['compact-sidebar','Compact Sidebar','Maximum room for operational content.'],['executive','Executive Sidebar','Larger visual hierarchy for dashboards and leadership views.'],
  ['topnav','Top Navigation','Horizontal navigation for wide screens.'],
] as const;

let state: AppearanceState = (() => { try { return {...defaults,...JSON.parse(localStorage.getItem('kiosk-appearance')||'{}')} } catch { return defaults } })();

function apply(){
  const root=document.querySelector<HTMLElement>('.kiosk-app'); if(!root)return;
  [...root.classList].filter(c=>c.startsWith('appearance-')||c.startsWith('style-')||c.startsWith('font-')||c.startsWith('scale-')||c.startsWith('density-')||c.startsWith('layout-')||c.startsWith('pattern-')).forEach(c=>root.classList.remove(c));
  root.classList.add(`appearance-${state.theme}`,`style-${state.style}`,`font-${state.font}`,`scale-${state.scale}`,`density-${state.density}`,`layout-${state.layout}`,`pattern-${state.pattern}`);
  root.classList.toggle('mode-dark',state.mode==='dark'); root.classList.toggle('mode-light',state.mode==='light');
  root.style.setProperty('--accent',state.accent); localStorage.setItem('kiosk-appearance',JSON.stringify(state));
}
function set<K extends keyof AppearanceState>(key:K,value:AppearanceState[K]){state={...state,[key]:value};apply();renderIfNeeded(true)}
function btn(active:boolean,label:string,attrs:string){return `<button class="ap-option ${active?'selected':''}" ${attrs}>${label}${active?'<span class="ap-check">✓</span>':''}</button>`}

function panel(){
  return `<div class="appearance-full" data-kiosk-appearance>
    <div class="ap-intro"><div><h2>Appearance</h2><p>Personalize the workspace with color, style, typography, layout and visual density.</p></div><button class="ap-reset" data-reset>Reset defaults</button></div>
    <section class="ap-section"><div class="ap-head"><h3>Color themes</h3><p>Choose a polished color direction for the entire platform.</p></div><div class="ap-theme-grid">${themes.map(([id,name,desc,accent])=>`<button class="ap-theme ${state.theme===id?'selected':''}" data-theme="${id}" data-accent="${accent}"><div class="ap-theme-preview preview-${id}"><i></i><span></span></div><strong>${name}</strong><small>${desc}</small>${state.theme===id?'<b>✓</b>':''}</button>`).join('')}</div></section>
    <section class="ap-section"><div class="ap-head"><h3>Theme style</h3><p>Change the visual character without changing your selected colors.</p></div><div class="ap-style-grid">${styles.map(([id,name,desc])=>`<button class="ap-style ${state.style===id?'selected':''}" data-style="${id}"><strong>${name}</strong><small>${desc}</small>${state.style===id?'<b>✓</b>':''}</button>`).join('')}</div></section>
    <section class="ap-section"><div class="ap-head"><h3>Typography</h3><p>Choose from the strongest font families available across the KIOSK design library.</p></div><div class="ap-font-grid">${fonts.map(([id,name])=>`<button class="ap-font ${state.font===id?'selected':''} font-${id}" data-font="${id}"><strong>${name}</strong><span>The quick brown fox</span>${state.font===id?'<small>Selected</small>':''}</button>`).join('')}</div></section>
    <section class="ap-section"><div class="ap-head"><h3>Size & density</h3><p>Control text scale and information density across tables, cards and forms.</p></div><div class="ap-two"><div><label>Text size</label><div class="ap-segment">${btn(state.scale==='small','Small','data-scale="small"')}${btn(state.scale==='default','Default','data-scale="default"')}${btn(state.scale==='large','Large','data-scale="large"')}</div></div><div><label>Density</label><div class="ap-segment">${btn(state.density==='compact','Compact','data-density="compact"')}${btn(state.density==='comfortable','Comfortable','data-density="comfortable"')}${btn(state.density==='spacious','Spacious','data-density="spacious"')}</div></div></div></section>
    <section class="ap-section"><div class="ap-head"><h3>Layout & surface</h3><p>Choose navigation structure and surface treatment independently.</p></div><div class="ap-two"><div><label>Workspace layout</label><div class="ap-stack">${layouts.map(([id,name,desc])=>`<button class="ap-layout ${state.layout===id?'selected':''}" data-layout="${id}"><span><strong>${name}</strong><small>${desc}</small></span>${state.layout===id?'<b>✓</b>':''}</button>`).join('')}</div></div><div><label>Surface pattern</label><div class="ap-segment wrap">${btn(state.pattern==='clean','Clean','data-pattern="clean"')}${btn(state.pattern==='soft','Soft','data-pattern="soft"')}${btn(state.pattern==='grid','Grid','data-pattern="grid"')}${btn(state.pattern==='glass','Glass','data-pattern="glass"')}</div></div></div></section>
    <section class="ap-section"><div class="ap-head"><h3>Color mode & brand accent</h3><p>Light and dark mode work independently. Accent color can personalize any theme.</p></div><div class="ap-mode-row"><div class="ap-segment">${btn(state.mode==='light','Light','data-mode="light"')}${btn(state.mode==='dark','Dark','data-mode="dark"')}</div><div class="ap-colors">${['#7C3AED','#2563EB','#059669','#0B1F3A','#E11D48','#D97706'].map(c=>`<button class="ap-color ${state.accent.toLowerCase()===c.toLowerCase()?'selected':''}" data-accent-only="${c}" style="background:${c}"></button>`).join('')}<input aria-label="Custom accent" type="color" value="${state.accent}" data-custom-accent></div></div></section>
  </div>`;
}

function wire(container:HTMLElement){
  container.querySelectorAll<HTMLElement>('[data-theme]').forEach(el=>el.onclick=()=>{state={...state,theme:el.dataset.theme as AppearanceState['theme'],accent:el.dataset.accent||state.accent};apply();renderIfNeeded(true)});
  container.querySelectorAll<HTMLElement>('[data-style]').forEach(el=>el.onclick=()=>set('style',el.dataset.style as AppearanceState['style']));
  container.querySelectorAll<HTMLElement>('[data-font]').forEach(el=>el.onclick=()=>set('font',el.dataset.font as AppearanceState['font']));
  container.querySelectorAll<HTMLElement>('[data-scale]').forEach(el=>el.onclick=()=>set('scale',el.dataset.scale as AppearanceState['scale']));
  container.querySelectorAll<HTMLElement>('[data-density]').forEach(el=>el.onclick=()=>set('density',el.dataset.density as AppearanceState['density']));
  container.querySelectorAll<HTMLElement>('[data-layout]').forEach(el=>el.onclick=()=>set('layout',el.dataset.layout as AppearanceState['layout']));
  container.querySelectorAll<HTMLElement>('[data-pattern]').forEach(el=>el.onclick=()=>set('pattern',el.dataset.pattern as AppearanceState['pattern']));
  container.querySelectorAll<HTMLElement>('[data-mode]').forEach(el=>el.onclick=()=>set('mode',el.dataset.mode as AppearanceState['mode']));
  container.querySelectorAll<HTMLElement>('[data-accent-only]').forEach(el=>el.onclick=()=>set('accent',el.dataset.accentOnly||state.accent));
  const custom=container.querySelector<HTMLInputElement>('[data-custom-accent]'); if(custom)custom.oninput=()=>set('accent',custom.value);
  const reset=container.querySelector<HTMLElement>('[data-reset]'); if(reset)reset.onclick=()=>{state={...defaults};apply();renderIfNeeded(true)};
}

function renderIfNeeded(force=false){
  const settings=document.querySelector<HTMLElement>('.settings-panel'); if(!settings)return;
  const isAppearance=/appearance/i.test(settings.textContent||'')||!!settings.querySelector('[data-kiosk-appearance]');
  if(!isAppearance)return;
  if(force||!settings.querySelector('[data-kiosk-appearance]')){settings.innerHTML=panel();wire(settings)}
}

const observer=new MutationObserver(()=>{apply();renderIfNeeded(false)});
function start(){apply();renderIfNeeded(false);observer.observe(document.body,{subtree:true,childList:true})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
