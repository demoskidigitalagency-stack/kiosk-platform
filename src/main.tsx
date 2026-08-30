import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './styles.css';
import './appearance-enhancements.css';
import './today.css';
import './dashboard-customization.css';
import './commerce-shell.css';
import './crm-shell.css';
import './dashboard-mount';
import './commerce-shell';
import './crm-shell';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
