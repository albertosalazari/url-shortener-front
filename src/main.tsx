import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalCss } from '@styles/globals.ts';
import { UrlInfoProvider } from '@contexts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <UrlInfoProvider>
        <GlobalCss />
        <App />
      </UrlInfoProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
