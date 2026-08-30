import { useMemo, useState, type ComponentType } from 'react';
import {
  Bell, Bot, Boxes, BriefcaseBusiness, Building2, ChevronDown, ChevronRight, CircleDollarSign,
  ContactRound, GraduationCap, Grid2X2, Handshake, Headphones, Inbox, LayoutDashboard, Library,
  LineChart, Package, Settings, ShoppingBag, Sparkles, Users, Workflow, Zap,
} from 'lucide-react';

type IconType = ComponentType<{ size?: number }>;

export type TreeNode = {
  id: string;
  label: string;
  parentId: string;
  icon?: IconType;
  children?: TreeNode[];
};

const leaf = (parentId:string, label:string, id?:string):TreeNode => ({
  id: id || `${parentId}:${label.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,
  label,
  parentId,
});

export const kioskNavigationTree:TreeNode[] = [
  { id:'dashboard', parentId:'dashboard', label:'Overview', icon:LayoutDashboard, children:[
    leaf('dashboard','Dashboard','dashboard'), leaf('today','Today','today'), leaf('dashboard','Activity','activity'),
  ]},
  { id:'crm', parentId:'crm', label:'CRM & Customers', icon:ContactRound, children:[
    leaf('crm','Overview'),
    {id:'crm:contacts',label:'Contacts',parentId:'crm',children:[leaf('crm','All Contacts'),leaf('crm','Contact Profile'),leaf('crm','Import / Export'),leaf('crm','Duplicates')]},
    {id:'crm:customers',label:'Customers',parentId:'crm',children:[leaf('crm','Customer List'),leaf('crm','Customer Center'),leaf('crm','Rewards')]},
    {id:'crm:leads',label:'Leads',parentId:'crm',children:[leaf('crm','All Leads'),leaf('crm','New Leads'),leaf('crm','Lead Pipeline'),leaf('crm','Lead Assignment')]},
    leaf('crm','Companies'), leaf('crm','Deals & Pipeline'), leaf('crm','Activities & Follow-ups'), leaf('crm','Meetings'),
    {id:'crm:capture',label:'Capture & Enrichment',parentId:'crm',children:[leaf('crm','Forms'),leaf('crm','Lead Capture'),leaf('crm','Enrichment'),leaf('crm','Verification')]},
    leaf('crm','Product Interests'),
    {id:'crm:segmentation',label:'Segmentation',parentId:'crm',children:[leaf('crm','Segments'),leaf('crm','Smart Lists')]},
    leaf('crm','CRM Intelligence'),
    {id:'crm:data',label:'Data & Customization',parentId:'crm',children:[leaf('crm','Custom Fields'),leaf('crm','Tags'),leaf('crm','Import / Export'),leaf('crm','Duplicate Rules')]},
  ]},
  { id:'inbox', parentId:'inbox', label:'Inbox & Communications', icon:Inbox, children:[
    {id:'inbox:inbox',label:'Inbox',parentId:'inbox',children:[leaf('inbox','All Conversations'),leaf('inbox','My Conversations'),leaf('inbox','Unassigned'),leaf('inbox','Pinned')]},
    {id:'inbox:whatsapp',label:'WhatsApp',parentId:'inbox',children:[leaf('inbox','Conversations'),leaf('inbox','Contacts'),leaf('inbox','Templates')]},
    {id:'inbox:email',label:'Email',parentId:'inbox',children:[leaf('inbox','Inbox'),leaf('inbox','Sent'),leaf('inbox','Templates')]},
    {id:'inbox:sms',label:'SMS',parentId:'inbox',children:[leaf('inbox','Conversations'),leaf('inbox','History')]},
    {id:'inbox:social',label:'Social Messaging',parentId:'inbox',children:[leaf('inbox','Instagram'),leaf('inbox','Messenger'),leaf('inbox','Telegram')]},
    leaf('inbox','Web Chat'),
    {id:'inbox:voice',label:'Voice & Calling',parentId:'inbox',children:[
      leaf('inbox','Dialer'),leaf('inbox','Calls'),leaf('inbox','Phone Numbers'),
      {id:'inbox:voice:routing',label:'Routing',parentId:'inbox',children:[leaf('inbox','IVR'),leaf('inbox','Queues'),leaf('inbox','Routing Rules')]},
      leaf('inbox','Recordings'),leaf('inbox','Voicemail'),leaf('inbox','Notes'),leaf('inbox','Dispositions'),leaf('inbox','Voice Analytics'),leaf('inbox','Agent Performance'),
    ]},
  ]},
  { id:'commerce', parentId:'commerce', label:'Commerce', icon:ShoppingBag, children:[
    leaf('commerce','Overview'),
    {id:'commerce:sell',label:'Sell',parentId:'commerce',children:[leaf('commerce','POS'),leaf('commerce','Orders'),leaf('commerce','Quotes'),leaf('commerce','Contracts')]},
    {id:'commerce:revenue',label:'Revenue',parentId:'commerce',children:[leaf('commerce','Invoices'),leaf('commerce','Payments')]},
    {id:'commerce:returns',label:'Returns',parentId:'commerce',children:[leaf('commerce','Returns'),leaf('commerce','Refunds')]},
    {id:'commerce:conversion',label:'Conversion',parentId:'commerce',children:[leaf('commerce','Carts'),leaf('commerce','Checkout'),leaf('commerce','Abandoned Carts'),leaf('commerce','Discounts')]},
    {id:'commerce:fulfillment',label:'Fulfillment',parentId:'commerce',children:[leaf('commerce','Assignment'),leaf('commerce','Shipping'),leaf('commerce','Delivery')]},
    leaf('commerce','My Store'),leaf('commerce','Storefront'),
    {id:'commerce:reviews',label:'Reviews',parentId:'commerce',children:[leaf('commerce','Product Reviews'),leaf('commerce','Store Reviews'),leaf('commerce','Review Requests'),leaf('commerce','Moderation'),leaf('commerce','Ratings')]},
  ]},
  { id:'catalog', parentId:'catalog', label:'Catalog', icon:Package, children:[
    leaf('catalog','Overview'),leaf('catalog','Products'),leaf('catalog','Collections'),leaf('catalog','Categories'),leaf('catalog','Variants & Options'),leaf('catalog','Price Books'),leaf('catalog','Price Manager'),
    {id:'catalog:inventory',label:'Inventory',parentId:'catalog',children:[leaf('catalog','Stock List'),leaf('catalog','Adjustments'),leaf('catalog','Physical Inventory'),leaf('catalog','Reminders')]},
    {id:'catalog:warehouses',label:'Warehouses',parentId:'catalog',children:[leaf('catalog','Locations'),leaf('catalog','Transfers')]},
    {id:'catalog:imports',label:'Imports',parentId:'catalog',children:[leaf('catalog','Bulk Import'),leaf('catalog','Dropship Import')]},
    leaf('catalog','Barcode Tools'),leaf('catalog','Product Data Tools'),leaf('catalog','Sales Channels'),
  ]},
  { id:'purchasing', parentId:'purchasing', label:'Purchasing', icon:Boxes, children:[leaf('purchasing','Overview'),leaf('purchasing','Suppliers'),leaf('purchasing','Purchase Orders'),leaf('purchasing','Receiving'),leaf('purchasing','Supplier Returns'),leaf('purchasing','Procurement'),leaf('purchasing','Purchasing History')]},
  { id:'marketing', parentId:'marketing', label:'Marketing & Growth', icon:Zap, children:[
    leaf('marketing','Overview'),leaf('marketing','Campaigns'),
    {id:'marketing:broadcasts',label:'Broadcasts',parentId:'marketing',children:[leaf('marketing','WhatsApp'),leaf('marketing','SMS'),leaf('marketing','Email')]},
    {id:'marketing:audience',label:'Audience',parentId:'marketing',children:[leaf('marketing','Audiences'),leaf('marketing','Segments'),leaf('marketing','Smart Lists')]},
    leaf('marketing','Templates'),leaf('marketing','Content Calendar'),leaf('marketing','Creative Library'),
    {id:'marketing:ads',label:'Advertising',parentId:'marketing',children:[leaf('marketing','Meta Ads'),leaf('marketing','Google Ads'),leaf('marketing','Attribution')]},
    leaf('marketing','Promotions'),leaf('marketing','Loyalty & Rewards'),leaf('marketing','Recovery'),leaf('marketing','Experimentation / A/B Tests'),leaf('marketing','Affiliates'),
    {id:'marketing:delivery',label:'Campaign Delivery',parentId:'marketing',children:[leaf('marketing','Scheduling'),leaf('marketing','Batching'),leaf('marketing','Speed Controls'),leaf('marketing','Quiet Hours'),leaf('marketing','Retries')]},
    {id:'marketing:lead-generation',label:'Lead Generation',parentId:'marketing',children:[leaf('marketing','Dashboard'),leaf('marketing','Google Maps Prospector'),leaf('marketing','Website Scraper'),leaf('marketing','Directory Prospector'),leaf('marketing','Lead Lists'),leaf('marketing','Saved Searches'),leaf('marketing','Scrape Jobs'),leaf('marketing','Enrichment'),leaf('marketing','Verification'),leaf('marketing','Deduplication'),leaf('marketing','Review Leads'),leaf('marketing','Push to CRM'),leaf('marketing','Export')]},
  ]},
  { id:'funnels', parentId:'funnels', label:'Funnels', icon:Workflow, children:[leaf('funnels','Overview'),leaf('funnels','All Funnels'),leaf('funnels','Funnel Builder'),leaf('funnels','Funnel Templates'),leaf('funnels','Steps & Pages'),leaf('funnels','Landing Pages'),leaf('funnels','Forms'),leaf('funnels','Split Tests'),leaf('funnels','Leads & Conversions'),leaf('funnels','Funnel Analytics'),leaf('funnels','Settings')]},
  { id:'build', parentId:'build', label:'Build', icon:Grid2X2, children:[leaf('build','Website Builder'),leaf('build','Storefront Builder'),leaf('build','Pages'),leaf('build','Navigation'),leaf('build','Landing Pages'),leaf('build','Forms Builder'),leaf('build','Lead Forms'),leaf('build','Sales Forms'),leaf('build','Order Forms'),leaf('build','Sales Page Builder'),leaf('build','Pop-ups'),leaf('build','Templates'),leaf('build','Themes'),leaf('build','Domains'),leaf('build','AI Page Builder')]},
  { id:'venture', parentId:'venture', label:'Venture', icon:Sparkles, children:[leaf('venture','Overview'),leaf('venture','Venture Forge'),{id:'venture:discover',label:'Discover',parentId:'venture',children:[leaf('venture','Opportunity Discovery'),leaf('venture','Niche Finder')]},leaf('venture','Offer Builder'),leaf('venture','Product Library'),leaf('venture','Funnel Generator'),leaf('venture','Launch Center'),leaf('venture','Ads & Social Content'),leaf('venture','Export Center')]},
  { id:'service', parentId:'service', label:'Customer Service', icon:Headphones, children:[leaf('service','Overview'),leaf('service','Tickets'),leaf('service','Complaints'),leaf('service','Knowledge Base'),leaf('service','Customer Portal'),leaf('service','Service Workspace'),leaf('service','Service Reports')]},
  { id:'operations', parentId:'operations', label:'Operations', icon:BriefcaseBusiness, children:[leaf('operations','Overview'),{id:'operations:projects',label:'Projects',parentId:'operations',children:[leaf('operations','Project Overview'),leaf('operations','Kanban'),leaf('operations','List'),leaf('operations','Timeline'),leaf('operations','Milestones'),leaf('operations','Calendar'),leaf('operations','Files'),leaf('operations','Activity'),leaf('operations','Analytics')]},leaf('operations','Tasks'),leaf('operations','Calendar'),leaf('operations','Meetings'),leaf('operations','Approvals'),leaf('operations','Workflows / Checklists'),leaf('operations','Documents'),leaf('operations','E-Signature'),leaf('operations','Locations / Branch Operations')]},
  { id:'team', parentId:'team', label:'Team', icon:Users, children:[leaf('team','Overview'),leaf('team','People'),leaf('team','Teams'),leaf('team','Departments'),leaf('team','Roles & Permissions'),leaf('team','Locations & Assignment'),{id:'team:agents',label:'Sales & Delivery Agents',parentId:'team',children:[leaf('team','Agent Profiles'),leaf('team','Territory'),leaf('team','Availability'),leaf('team','Assignment'),leaf('team','Performance'),leaf('team','Commission Plan')]},leaf('team','Team Performance'),leaf('team','Team Communication')]},
  { id:'hr', parentId:'hr', label:'HR', icon:Building2, children:[leaf('hr','Overview'),leaf('hr','Employee Directory'),leaf('hr','Attendance'),leaf('hr','Shifts & Scheduling'),leaf('hr','Leave & Time Off'),leaf('hr','Payroll & Compensation'),leaf('hr','Performance Reviews'),leaf('hr','Documents & Policies'),leaf('hr','Onboarding'),leaf('hr','Offboarding')]},
  { id:'finance', parentId:'finance', label:'Finance & Accounting', icon:CircleDollarSign, children:[leaf('finance','Overview'),leaf('finance','Revenue'),leaf('finance','Sales Finance'),leaf('finance','Expenses'),leaf('finance','Customer Payments'),leaf('finance','Accounts & Wallets'),leaf('finance','Accounting'),leaf('finance','Cash Management'),leaf('finance','Taxes'),{id:'finance:earnings',label:'Earnings & Commissions',parentId:'finance',children:[leaf('finance','My Earnings'),leaf('finance','Staff Earnings'),leaf('finance','Agent Commissions'),leaf('finance','Affiliate Earnings'),leaf('finance','Commission Rules'),leaf('finance','Pending'),leaf('finance','Approved'),leaf('finance','Paid'),leaf('finance','Adjustments'),leaf('finance','Payout History')]},leaf('finance','Financial Reports')]},
  { id:'planning', parentId:'planning', label:'Planning & Strategy', icon:Library, children:[leaf('planning','Strategy Overview'),leaf('planning','Business Planning'),leaf('planning','Market Analysis'),leaf('planning','Competitive Analysis'),leaf('planning','Business Model'),{id:'planning:models',label:'Financial Models',parentId:'planning',children:[leaf('planning','Five-Year Projection'),leaf('planning','DCF'),leaf('planning','Break-even')]},{id:'planning:special',label:'Specialized Models',parentId:'planning',children:[leaf('planning','SaaS'),leaf('planning','E-commerce')]},leaf('planning','Scenario Planning'),leaf('planning','Burn Rate / Runway'),leaf('planning','KPI Dashboard'),leaf('planning','Execution Planning'),leaf('planning','Roadmaps'),leaf('planning','Project Charter')]},
  { id:'reports', parentId:'reports', label:'Reports & Analytics', icon:LineChart, children:[leaf('reports','Overview'),leaf('reports','Analytics'),leaf('reports','Reports'),leaf('reports','Custom Reports'),leaf('reports','Custom Dashboards'),leaf('reports','Sales Analytics'),leaf('reports','Revenue Analytics'),leaf('reports','Customer Analytics'),{id:'reports:attribution',label:'Attribution',parentId:'reports',children:[leaf('reports','Source'),leaf('reports','Campaign'),leaf('reports','Ad'),leaf('reports','Funnel'),leaf('reports','Revenue')]},leaf('reports','Marketing Reports'),leaf('reports','Channel Reports'),leaf('reports','Affiliate Reports'),leaf('reports','Funnel Reports'),leaf('reports','Team / Agent Performance'),leaf('reports','Operations Reports'),leaf('reports','Project Reports'),{id:'reports:comms',label:'Communications Analytics',parentId:'reports',children:[leaf('reports','WhatsApp'),leaf('reports','Email'),leaf('reports','SMS'),leaf('reports','Voice')]},leaf('reports','Financial & Strategic Intelligence')]},
  { id:'notifications', parentId:'notifications', label:'Notifications', icon:Bell, children:[leaf('notifications','Notification Center'),leaf('notifications','Business Alerts'),leaf('notifications','System Alerts'),leaf('notifications','Reminders'),leaf('notifications','Notification Rules')]},
  { id:'automation', parentId:'automation', label:'Automation', icon:Workflow, children:[leaf('automation','Overview'),leaf('automation','Workflows'),leaf('automation','Workflow Builder'),leaf('automation','Trigger Library'),leaf('automation','Action Library'),leaf('automation','Conditions & Branches'),leaf('automation','Templates'),leaf('automation','Scheduled Automations'),leaf('automation','Active'),leaf('automation','Paused'),leaf('automation','Run History'),leaf('automation','Logs'),leaf('automation','Failed Runs'),leaf('automation','Automation Analytics')]},
  { id:'ai', parentId:'ai', label:'AI Studio', icon:Bot, children:[leaf('ai','Overview'),leaf('ai','AI Assistant'),{id:'ai:agents',label:'AI Agents',parentId:'ai',children:[leaf('ai','Agent Library'),leaf('ai','Create Agent'),leaf('ai','Instructions'),leaf('ai','Data Sources'),leaf('ai','Skills'),leaf('ai','Permissions'),leaf('ai','Actions'),leaf('ai','Test Runs'),leaf('ai','Activity'),leaf('ai','Analytics')]},leaf('ai','Content Generation'),leaf('ai','Image Generation'),leaf('ai','Reply Suggestions'),leaf('ai','Sentiment & Insights'),leaf('ai','Product Intelligence'),leaf('ai','Brand Voice'),leaf('ai','Research'),leaf('ai','AI Autofill'),leaf('ai','Installed Skills'),leaf('ai','AI Activity'),leaf('ai','AI Settings')]},
  { id:'integrations', parentId:'integrations', label:'Integrations', icon:Handshake, children:[leaf('integrations','Overview'),leaf('integrations','Connected Apps'),{id:'integrations:marketplace',label:'Marketplace',parentId:'integrations',children:[leaf('integrations','Apps'),leaf('integrations','Plugins'),leaf('integrations','Extensions'),leaf('integrations','Templates'),leaf('integrations','AI Skills')]},leaf('integrations','Commerce Connectors'),leaf('integrations','Marketing Connectors'),{id:'integrations:comms',label:'Communication Connectors',parentId:'integrations',children:[leaf('integrations','WhatsApp'),leaf('integrations','Email'),leaf('integrations','SMS'),leaf('integrations','Voice'),leaf('integrations','Social')]},leaf('integrations','Payment Connectors'),leaf('integrations','Business Connectors'),leaf('integrations','Webhooks'),leaf('integrations','Sync Activity')]},
  { id:'learning', parentId:'learning', label:'Learning & Academy', icon:GraduationCap, children:[leaf('learning','Overview'),leaf('learning','Academy Home'),leaf('learning','Course Catalog'),leaf('learning','Categories'),leaf('learning','Featured Courses'),leaf('learning','My Learning'),leaf('learning','Courses'),leaf('learning','Course Builder'),leaf('learning','Students'),leaf('learning','Instructors'),leaf('learning','Enrollments'),leaf('learning','Cohorts'),leaf('learning','Progress'),leaf('learning','Certificates'),leaf('learning','Learning Analytics')]},
  { id:'settings', parentId:'settings', label:'Settings', icon:Settings, children:[
    {id:'settings:organization',label:'Organization & Locations',parentId:'settings',children:[leaf('settings','Organization Profile'),leaf('settings','Workspaces'),leaf('settings','Locations')]},
    {id:'settings:users',label:'Users & Access',parentId:'settings',children:[leaf('settings','Users'),leaf('settings','Roles'),leaf('settings','Permissions')]},
    leaf('settings','Business & Financial'),leaf('settings','Documents & Receipts'),
    {id:'settings:appearance',label:'Brand & Appearance',parentId:'settings',children:[leaf('settings','Color Themes'),leaf('settings','Theme Style'),leaf('settings','Typography'),leaf('settings','Text Size'),leaf('settings','Density'),leaf('settings','Workspace Layout'),leaf('settings','Surface Pattern'),leaf('settings','Light / Dark'),leaf('settings','Brand Accent')]},
    leaf('settings','Notifications'),leaf('settings','Integrations'),
    {id:'settings:security',label:'Security & Verification',parentId:'settings',children:[leaf('settings','Email Verification'),leaf('settings','Phone Verification'),leaf('settings','2FA'),leaf('settings','Security Policies')]},
    {id:'settings:developer',label:'Developer',parentId:'settings',children:[leaf('settings','API Keys'),leaf('settings','API Explorer'),leaf('settings','OAuth'),leaf('settings','Tokens'),leaf('settings','API Usage'),leaf('settings','Rate Limits'),leaf('settings','Logs')]},
    {id:'settings:audit',label:'Audit, Backup & Recovery',parentId:'settings',children:[leaf('settings','Audit Log'),leaf('settings','Security Events'),leaf('settings','Data Changes'),leaf('settings','Backup'),leaf('settings','Restore'),leaf('settings','Restore Points'),leaf('settings','Export'),leaf('settings','Reset Data')]},
    leaf('settings','System'),
    {id:'settings:billing',label:'Plans & Billing',parentId:'settings',children:[leaf('settings','Starter'),leaf('settings','Growth'),leaf('settings','Business'),leaf('settings','Enterprise'),leaf('settings','KIOSK Credits'),leaf('settings','Usage'),leaf('settings','Payment Method'),leaf('settings','KIOSK Invoices'),leaf('settings','Billing History')]},
  ]},
];

function containsId(node:TreeNode, id:string):boolean {
  if (node.id===id || node.parentId===id) return true;
  return !!node.children?.some(child=>containsId(child,id));
}

export function HierarchicalNavigation({activeId,collapsed,onNavigate}:{activeId:string;collapsed:boolean;onNavigate:(id:string,label?:string)=>void}){
  const defaultOpen=useMemo(()=>new Set(['dashboard']),[]);
  const [open,setOpen]=useState<Set<string>>(defaultOpen);
  const toggle=(id:string)=>setOpen(current=>{const next=new Set(current);next.has(id)?next.delete(id):next.add(id);return next});

  const renderNode=(node:TreeNode,depth=0) => {
    const hasChildren=!!node.children?.length;
    const isOpen=open.has(node.id);
    const Icon=node.icon;
    const active=containsId(node,activeId) && (node.id===activeId || depth===0);
    return <div className={`tree-node depth-${depth}`} key={node.id}>
      <button
        className={`tree-row ${active?'active':''}`}
        style={{'--tree-depth':depth} as React.CSSProperties}
        title={collapsed?node.label:undefined}
        onClick={()=>{
          if(hasChildren){ toggle(node.id); if(depth===0) onNavigate(node.parentId,node.label); }
          else onNavigate(node.parentId,node.label);
        }}
      >
        {Icon?<Icon size={18}/>:<span className="tree-dot"/>}
        <span className="tree-label">{node.label}</span>
        {hasChildren&&!collapsed?<span className="tree-chevron">{isOpen?<ChevronDown size={14}/>:<ChevronRight size={14}/>}</span>:null}
      </button>
      {hasChildren&&isOpen&&!collapsed?<div className="tree-children">{node.children!.map(child=>renderNode(child,depth+1))}</div>:null}
    </div>;
  };

  return <div className="hierarchical-nav">{kioskNavigationTree.map(node=>renderNode(node))}</div>;
}
