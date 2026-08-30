/*
 * Presentation nomenclature migration.
 *
 * The current unified shell still carries legacy internal preset IDs in App.tsx.
 * Until Appearance is moved into its dedicated state/store, this small compatibility
 * layer ensures those implementation/reference names are never customer-facing.
 * It does not change application data or navigation.
 */

const replacements: Record<string,string> = {
  'KIOSK Modern': 'Sleek',
  'Sync Workspace': 'Executive',
  'KIOSK CRM1 Clean': 'Compact',
  'Recommended: KIOSK purple/navy brand with the cleaner Sync-style SaaS shell.': 'Recommended. Clean enterprise workspace with compact navigation, restrained surfaces and strong information hierarchy.',
  'Emerald/deep workspace inspired by Sync CRM and KIOSK CRM 2.': 'A warmer, more expressive dashboard workspace with stronger visual hierarchy and larger focal cards.',
  'Bright blue/white workspace inspired by the cleaner KIOSK CRM 1 direction.': 'A dense operational workspace designed to keep more records and controls visible at once.',
  'Choose a complete visual preset, then continue customizing mode and other appearance controls. KIOSK Modern is the default recommendation.': 'Choose a workspace layout, then refine color theme, theme style, mode, typography, density and other appearance controls. Sleek is the default recommendation.'
};

function normalizeAppearanceLabels(root: ParentNode = document){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes:Text[]=[];
  while(walker.nextNode()) nodes.push(walker.currentNode as Text);
  for(const node of nodes){
    const value=node.nodeValue?.trim();
    if(value && replacements[value]) node.nodeValue=(node.nodeValue||'').replace(value,replacements[value]);
  }
}

export function installAppearanceNomenclature(){
  const run=()=>normalizeAppearanceLabels(document);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true}); else queueMicrotask(run);
  const observer=new MutationObserver(mutations=>{
    for(const mutation of mutations){
      for(const added of mutation.addedNodes){
        if(added.nodeType===Node.ELEMENT_NODE || added.nodeType===Node.DOCUMENT_FRAGMENT_NODE) normalizeAppearanceLabels(added as ParentNode);
        else if(added.nodeType===Node.TEXT_NODE){
          const text=added as Text; const value=text.nodeValue?.trim();
          if(value && replacements[value]) text.nodeValue=(text.nodeValue||'').replace(value,replacements[value]);
        }
      }
    }
  });
  observer.observe(document.documentElement,{subtree:true,childList:true});
}
