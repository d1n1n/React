import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { CounterProvider } from './context/counter-reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CounterProvider>
);