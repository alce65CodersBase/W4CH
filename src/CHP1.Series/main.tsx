import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './css/styles.css';
import { AppContextProvider } from './context/app.context.provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
