import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DoctorProvider } from './context/DoctorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DoctorProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </DoctorProvider>
);


