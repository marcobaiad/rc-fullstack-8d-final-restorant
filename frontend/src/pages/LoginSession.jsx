import React from 'react'
import Swal from 'sweetalert2'
import '../Css/logUser.css'

const LoginSession = () => {

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
        <form className='form'>
          <h1 className='titulo'>Iniciar Sesión</h1>
          <div className="form-group">
            <input type="email" className="form-control item" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control item" id="exampleInputPassword1" placeholder="Contraseña" />
          </div>
          <div className="row">
            <div className="form-group col-md-3">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" for="customCheck1">Recordarme</label>
              </div>
            </div>
            <div className="col-md-9">
              <a type="" href="#" className="" data-toggle="modal" data-target="#exampleModalCentered">
                Olvide mi Contraseña
              </a>

              <div className="modal" id="exampleModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenteredLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="" id="exampleModalCenteredLabel">Recuperar contraseña</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div class="form-group">
                        <div class="col-md-12">
                          <label for="formGroupExampleInput">Ingresa tu email para recuperar tu contraseña</label>
                          <input type="email" className="form-control item" id="inputEmail3" placeholder="Email" />
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
          <button type="submit" className="btn btn-block create-account">Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default LoginSession;