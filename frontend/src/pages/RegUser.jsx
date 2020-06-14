import React from 'react';
import './Reguser.css'
const RegUser = () => {
  return (
    <>
      <div className='imgBackgroundReg registration-form'>
        <form className='container-fluid'>
          <h1 className='titulo'>Registro de Usuario</h1>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control item" id="formGroupExampleInput" placeholder="Nombre" />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control item" id="formGroupExampleInput2" placeholder="Apellido" />
            </div>
            <div className="form-group col-md-6">
              <input type="email" className="form-control item" id="inputEmail4" placeholder="Correo electrónico" />
            </div>
            <div className="form-group col-md-6">
              <input type="password" className="form-control item" id="inputPassword4" placeholder="Contraseña" />
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" id="inputAddress" placeholder="Dirección" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control item" id="inputCity" placeholder="Provincia" />
            </div>
            <div className="form-group col-md-6">
              <select id="inputState" className="form-control item">
                <option selected>Choose...</option>
                <option>Capital</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control item" id="inputZip" placeholder="Código Postal" />
            </div>
            <div class="form-group col-md-6">
              <input type="text" className="form-control item" id="phone-number" placeholder="Numero Telefónico" />
            </div>
          </div>
          <button type="submit" className="btn btn-block create-account">Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default RegUser;

