import React from 'react'

const LoginSession = () => {
  return (
    <>
      <form className='container'>
        <h1 className='text-center'>Iniciar Sesión</h1>
        <div className="form-group">
          <label for="exampleInputEmail1">Usuario</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary ">Enviar</button>
      </form>
    </>
  );
}

export default LoginSession;