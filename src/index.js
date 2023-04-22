import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import supabase from './Supabase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SessionContextProvider supabaseClient={supabase}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SessionContextProvider>
);

