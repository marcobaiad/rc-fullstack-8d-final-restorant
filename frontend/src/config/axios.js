import axios from 'axios'

const clienteAxios = axios.create({
  baseURL: 'http://localhost:3001'
  // baseURL: 'https://asturiasrestorant.herokuapp.com'
});

export default clienteAxios;