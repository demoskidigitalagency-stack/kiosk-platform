import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { installAppearanceNomenclature } from './appearance-nomenclature';
import './unified-shell.css';
import './navigation-tree.css';
import './appearance-shell-correction.css';
import './appearance-system.css';
import './appearance-system';

installAppearanceNomenclature();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
