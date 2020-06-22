import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../Css/Reguser.css';
import axios from 'axios';


const RegUser = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [ Registro, setRegistro ] = useState({ name: '', lastname: '', address: '', age: '', email: '', username: '', password: '' });

  const [ name, setName ] = useState('');
  const [ lastname, setLastName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ age, setAge ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ phonenumber, setPhoneNumber ] = useState('');
  
  const Usuarios = useCallback(async () => {
    const res = await axios.get(`/api/v1/usuarios/`);
        setUsuarios(res.data);
    }, []);

  useEffect(() => {
      Usuarios();
  }, [Usuarios]);

  console.log(usuarios);
  

  const onChangeName = (e) => {
      setName(e.target.value);
  } 

  const onChangeLastName = (e) => {
      setLastName(e.target.value);
  }

  const onChangeAddress = (e) => {
      setAddress(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangeAge = (e) => {
      setAge(e.target.value);
  }

  const onChangeUsername = (e) => {
      setUsername(e.target.value);
  }
  
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const onSubmitCreateHandler = async (a) => {
    const resetForm = document.getElementById("formulario-reset");
    a.preventDefault();
    try {
      await axios.post(`/api/v1/usuarios`, { name, lastname, address, age, username, password, email, phonenumber })
      resetForm.reset()
    } catch (e) {
      console.log(('No se pudo crear el usuario'));
    }
  }

  return (
    <>
      <div className='imgBackgroundReg registration-form'>
        <form onSubmit={onSubmitCreateHandler} id="formulario-reset" className='container-fluid'>
          <h1 className='titulo'>Registro de Usuario</h1>
          <div className="form-row">
            <div className="form-group col-md-6 mb-0">
              <input type="text" className="form-control item" name="name" onChange={onChangeName} placeholder="Nombre" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="text" className="form-control item" name="lastname" onChange={onChangeLastName} placeholder="Apellido" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="text" className="form-control item" name="username" onChange={onChangeUsername} placeholder="Usuario" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="password" className="form-control item" name="password" onChange={onChangePassword} placeholder="Contraseña" />
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control item" name="email" onChange={onChangeEmail} placeholder="Correo electrónico" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" name="address" onChange={onChangeAddress} placeholder="Dirección" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control item" name="number" onChange={onChangePhoneNumber} placeholder="N° Celular" />
            </div>
            <div class="form-group col-md-6">
              <input type="text" className="form-control item" name="age" onChange={onChangeAge} placeholder='Edad: Ej. "27"' />
            </div>
          </div>
          <button type="submit" className="btn btn-block create-account">Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default RegUser;

