import React from 'react';

const RegUser = () => {
  return ( 
    <>
    <form className='container'>
    <h1 className='text-center'>Registro de Usuario</h1>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Correo Electronico</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Contraseña</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Dirección</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Calle 1234"/>
  </div>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">Provincia</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">Ciudad</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Código Postal</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div> 
  <button type="submit" className="btn btn-primary">Registrarse</button>
</form>
    </>
   );
}
 
export default RegUser;

