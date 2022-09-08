import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { toast, ToastContainer } from 'react-toastify';
import { AuthProvider } from './providers/AuthProvider'; // surrounded the "app" component by authprovider so that auth state can be
//available throughout the app.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer
        position={'top-right'}
        autoClose={5000}
        hideProgressBar={false}
      />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
