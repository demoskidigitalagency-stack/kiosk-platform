import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { installAppearanceNomenclature } from './appearance-nomenclature';
import './unified-shell.css';
import './appearance-shell-correction.css';

installAppearanceNomenclature();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
