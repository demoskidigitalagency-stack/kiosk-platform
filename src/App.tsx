import { Bell, Boxes, FileText, LayoutDashboard, MessageSquare, Package, Plus, Search, Settings, ShoppingBag, Users } from 'lucide-react';

const nav = [
  [LayoutDashboard, 'Dashboard'],
  [Users, 'Customers'],
  [Package, 'Products'],
  [ShoppingBag, 'Orders'],
  [FileText, 'Invoices'],
  [Boxes, 'Inventory'],
  [MessageSquare, 'Messages'],
  [Settings, 'Settings'],
] as const;

const metrics = [
  ['Total customers', '1,248', '+8.2%'],
  ['Orders this month', '386', '+12.4%'],
  ['Revenue', '₦8.42M', '+6.8%'],
  ['Low stock items', '14', 'Needs attention'],
];

export function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">K</div>
          <div>
            <div className="brand-name">KIOSK</div>
            <div className="brand-tagline">Your business, under one roof.</div>
          </div>
        </div>

        <nav>
          {nav.map(([Icon, label], index) => (
            <button key={label} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              <Icon size={18} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">KIOSK Platform v0.1</div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="search-wrap">
            <Search size={18} />
            <input aria-label="Global search" placeholder="Search anything…" />
          </div>

          <div className="topbar-actions">
            <button className="icon-btn primary" aria-label="Create"><Plus size={18} /></button>
            <button className="icon-btn" aria-label="Notifications"><Bell size={18} /></button>
            <div className="avatar" aria-label="User profile">AD</div>
          </div>
        </header>

        <section className="content">
          <div className="page-heading">
            <div>
              <p className="eyebrow">Overview</p>
              <h1>Dashboard</h1>
              <p className="muted">A clean starting shell for the new KIOSK platform.</p>
            </div>
            <button className="primary-btn"><Plus size={17} /> Quick create</button>
          </div>

          <div className="metric-grid">
            {metrics.map(([label, value, helper]) => (
              <article className="card metric-card" key={label}>
                <div className="metric-label">{label}</div>
                <div className="metric-value">{value}</div>
                <div className="metric-helper">{helper}</div>
              </article>
            ))}
          </div>

          <div className="content-grid">
            <article className="card large-card">
              <div className="card-head">
                <div>
                  <h2>Business activity</h2>
                  <p className="muted">Placeholder for charts and performance analytics.</p>
                </div>
              </div>
              <div className="chart-placeholder" aria-label="Business activity chart placeholder">
                <div className="bar" style={{ height: '40%' }} />
                <div className="bar" style={{ height: '58%' }} />
                <div className="bar" style={{ height: '46%' }} />
                <div className="bar" style={{ height: '76%' }} />
                <div className="bar" style={{ height: '64%' }} />
                <div className="bar" style={{ height: '88%' }} />
              </div>
            </article>

            <article className="card">
              <div className="card-head"><h2>Quick actions</h2></div>
              <div className="quick-actions">
                <button>Add customer</button>
                <button>Create order</button>
                <button>Add product</button>
                <button>View inventory</button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
