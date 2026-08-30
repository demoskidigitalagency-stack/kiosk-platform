import { createRoot, type Root } from 'react-dom/client';
import {
  Barcode, Boxes, ChevronDown, ChevronRight, CircleDollarSign, GalleryVerticalEnd,
  LayoutDashboard, Package, PackageOpen, ScanLine, Store, Upload, Warehouse,
} from 'lucide-react';

const catalogItems = [
  ['Catalog Overview', LayoutDashboard],
  ['Products', Package],
  ['Collections & Categories', GalleryVerticalEnd],
  ['Variants & Options', PackageOpen],
  ['Price Books', CircleDollarSign],
  ['Inventory', Boxes],
  ['Warehouses', Warehouse],
  ['Bulk Import', Upload],
  ['Dropship Import', Store],
  ['Barcode Tools', Barcode],
  ['Product Data Tools', ScanLine],
  ['Sales Channels', Store],
] as const;

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let open = true;

function openExistingPage(label: string) {
  const button = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'))
    .find(el => el.textContent?.trim() === label);
  button?.click();
}

function CatalogNavigation() {
  return <div className="module-nav-block catalog-nav-block">
    <button className="module-nav-heading" onClick={() => { open = !open; render(); }}>
      <span>Catalog</span>{open ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}
    </button>
    {open && <div className="module-nav-content">
      {catalogItems.map(([label, Icon]) => <button className="nav-item catalog-nav-item" key={label} onClick={() => openExistingPage(label)}>
        <Icon size={17}/><span>{label}</span>
      </button>)}
    </div>}
  </div>;
}

function render() { if (root && host) root.render(<CatalogNavigation/>); }

function mountCatalogNavigation() {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (!sidebar) return;
  if (host && sidebar.contains(host)) return;
  root?.unmount(); host?.remove();

  const workspaceLabel = Array.from(sidebar.querySelectorAll<HTMLElement>('.overview-nav-label'))
    .find(label => label.textContent?.trim() === 'Workspace');
  if (!workspaceLabel) return;

  host = document.createElement('div');
  host.className = 'catalog-nav-host';
  sidebar.insertBefore(host, workspaceLabel);
  root = createRoot(host);
  render();
}

const observer = new MutationObserver(() => requestAnimationFrame(mountCatalogNavigation));
observer.observe(document.documentElement, { childList: true, subtree: true });
requestAnimationFrame(mountCatalogNavigation);
