import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import { toast, ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer
      position={'top-right'}
      autoClose={5000}
      hideProgressBar={false}
    />
    {/* <toast autodismiss autodismissTimeout={5000} placement="top-left"> */}
    <App />

    {/* </toast> */}
  </React.StrictMode>
);
