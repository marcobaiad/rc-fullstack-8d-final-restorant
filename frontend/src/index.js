import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import auth from './utils/auth'

import clienteAxios from './config/axios';

clienteAxios.interceptors.request.use(config => {
  if (auth.isAuthenticated()) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

