import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from '../src/utils/auth';
import axios from 'axios';
import clienteAxios from './config/axios';

clienteAxios.interceptors.request.use(config => {
  if (Auth.isAuthenticated()) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    console.log('Interceptor ejecutado');
    return response;
  }, error => {
  const { response } = error;
  if (response.status === 401 && response.data.mensaje.includes("Fuera: No Autorizado")) {
    Auth.logOut();
    window.location('/log');
  }
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

