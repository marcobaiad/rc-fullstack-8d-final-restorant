import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Auth from '../src/utils/auth';
import axios from 'axios';
import clienteAxios from './config/axios';


/* axios.interceptors.request.use(config => {
  if (Auth.isAuthenticated()) {
    config.headers.authorization = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
}); */

axios.interceptors.response.use(
  response => {
    console.log('Interceptor ejecutado');
    return response;
  }, error => {
  const { response } = error;
  if (response.status === 401 && response.data.error) {
    Auth.logOut();
    window.location('/log');
  }
  return Promise.reject(error);
});



clienteAxios.interceptors.request.use(config => {
  if (Auth.isAuthenticated()) {
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

