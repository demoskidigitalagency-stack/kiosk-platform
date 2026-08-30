import { createRoot, type Root } from 'react-dom/client';
import {
  BadgeDollarSign, ChevronDown, ChevronRight, CircleDollarSign, FileSignature,
  LayoutDashboard, PackageCheck, ReceiptText, RotateCcw, ShoppingCart, Store,
  Tags, Truck, WalletCards,
} from 'lucide-react';

const commerceGroups = [
  {
    label: 'Sell',
    items: [
      ['Point of Sale', ShoppingCart],
      ['Orders', ReceiptText],
      ['Quotes & Contracts', FileSignature],
    ],
  },
  {
    label: 'Revenue',
    items: [
      ['Invoices', ReceiptText],
      ['Payments', WalletCards],
      ['Returns & Refunds', RotateCcw],
    ],
  },
  {
    label: 'Conversion',
    items: [
      ['Carts & Checkout', ShoppingCart],
      ['Abandoned Carts', ShoppingCart],
      ['Discounts', Tags],
    ],
  },
  {
    label: 'Fulfillment',
    items: [
      ['Order Assignment', PackageCheck],
      ['Shipping & Delivery', Truck],
    ],
  },
  {
    label: 'Store',
    items: [['Storefront', Store]],
  },
] as const;

let host: HTMLDivElement | null = null;
let root: Root | null = null;
let open = true;

function CommerceNavigation() {
  const openPage = (label: string) => {
    const workspaceButton = Array.from(document.querySelectorAll<HTMLButtonElement>('.sidebar .nav-item'))
      .find(button => button.textContent?.trim() === label);
    workspaceButton?.click();
  };

  return <div className="commerce-nav-block">
    <button className="commerce-nav-heading" onClick={() => { open = !open; render(); }}>
      <span>Commerce</span>{open ? <ChevronDown size={15}/> : <ChevronRight size={15}/>}
    </button>
    {open && <div className="commerce-nav-content">
      <button className="nav-item commerce-overview-item" onClick={() => openPage('Commerce Overview')}>
        <LayoutDashboard size={18}/><span>Commerce Overview</span>
      </button>
      {commerceGroups.map(group => <div className="commerce-nav-group" key={group.label}>
        <div className="commerce-nav-group-label">{group.label}</div>
        {group.items.map(([label, Icon]) => <button className="nav-item commerce-child" key={label} onClick={() => openPage(label)}>
          <Icon size={17}/><span>{label}</span>
        </button>)}
      </div>)}
    </div>}
  </div>;
}

function render() {
  if (!root || !host) return;
  root.render(<CommerceNavigation/>);
}

function mountCommerceNavigation() {
  const sidebar = document.querySelector<HTMLElement>('.sidebar');
  if (!sidebar) return;
  if (host && sidebar.contains(host)) return;
  root?.unmount();
  host?.remove();

  const labels = Array.from(sidebar.querySelectorAll<HTMLElement>('.overview-nav-label'));
  const workspaceLabel = labels.find(label => label.textContent?.trim() === 'Workspace');
  const workspaceNav = workspaceLabel?.nextElementSibling;
  if (!workspaceLabel || !workspaceNav) return;

  host = document.createElement('div');
  host.className = 'commerce-nav-host';
  sidebar.insertBefore(host, workspaceLabel);
  root = createRoot(host);
  render();
}

const observer = new MutationObserver(() => requestAnimationFrame(mountCommerceNavigation));
observer.observe(document.documentElement, { childList: true, subtree: true });
requestAnimationFrame(mountCommerceNavigation);
