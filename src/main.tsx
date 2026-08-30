import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { installAppearanceNomenclature } from './appearance-nomenclature';
import { installAllModulesNavigation } from './all-modules-navigation';
import './unified-shell.css';
import './appearance-shell-correction.css';
import './appearance-system.css';
import './appearance-system';

installAppearanceNomenclature();
installAllModulesNavigation();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
