import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { AppContextProvider } from './context/context.provider';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
