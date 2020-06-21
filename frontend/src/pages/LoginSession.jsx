
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import '../Css/logUser.css'



import clienteAxios from '../config/axios';

const LoginSession = (props) => {

  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const logUser = e => {
    e.preventDefault();

    clienteAxios.post('/api/v1/usuarios/login', { username, password })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token)
        props.history.push('/')
      })
  }

  const recoverPass = () => {
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado",
      showConfirmButton: false,
      timer: 3000
    });
  }

  return (
    <>
      <div className="imgBackgroundLog registration-form log-form">
        <form className='form'
          onSubmit={logUser}
        >
          <h1 className='titulo'>Iniciar Sesión</h1>
          <div className="form-group">
            <input
              type="tex"
              className="form-control item"
              placeholder="Usuario"
              name="username"
              onChange={(e) => { setUser(e.target.value) }} />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              placeholder="Contraseña"
              name="password"
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
              </div>
            </div>
            <div className="col-md-9">
              <a type="" href="#" className="" data-toggle="modal" data-target="#exampleModalCentered">
                Olvide mi Contraseña
              </a>

              <div className="modal" id="exampleModalCentered" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="" id="exampleModalCenteredLabel">Recuperar contraseña</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <div className="col-md-12">
                          <label htmlFor="formGroupExampleInput">Ingresa tu email para recuperar tu contraseña</label>
                          <input
                            type="email"
                            className="form-control item"
                            id="inputEmail3"
                            placeholder="Email" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-block create-account" onClick={recoverPass}>Recuperar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-block create-account"
          >Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default LoginSession;