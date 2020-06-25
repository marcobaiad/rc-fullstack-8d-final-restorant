import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import '../Css/Reguser.css';
import axios from 'axios';
import swal from 'sweetalert2';


class RegUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      lastname: '', 
      address: '', 
      age: '', 
      email: '', 
      username: '', 
      password: '', 
      phonenumber: '',
      registro: []
    };
  }
  
   
  handleChange = (e) => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name; 
    this.setState({ [name]: value });      
  }
  
  onSubmitCreateHandler = async (e) => {
    let registro = this.state.registro;
    registro.push({ name: this.state.name, lastname: this.state.lastname, address: this.state.address, age: this.state.age, username: this.state.username , password: this.state.password, phonenumber: this.state.phonenumber, email: this.state.email });
    this.setState({ registro })
    e.preventDefault();
    
    try {
      await axios.post(`/api/v1/usuarios`, { name: this.state.name, lastname: this.state.lastname, address: this.state.address, age: this.state.age, username: this.state.username , password: this.state.password, phonenumber: this.state.phonenumber, email: this.state.email });
      await swal.fire({
        icon: 'success',
        title: 'Registro correcto',
      });
      this.props.history.push('/');
    } catch (e) {
      swal.fire({
        icon: 'error',
        title: 'No se pudo registrar'
      });
      console.log(('No se pudo crear el usuario'));
    }    
  }


  OnlyNumber = (event) => {
    if (event.charCode <= 47 ) {
      swal.fire({
        icon: 'error',
        title: 'Solo puede ingresar números'
      });
      return false
    } 
    if (event.charCode >= 58) {
      swal.fire({
        icon: 'error',
        title: 'Solo puede ingresar números'
      });
      return false
    }
  }

  render() {
    return(
      <div className='imgBackgroundReg registration-form'>
        <form onSubmit={this.onSubmitCreateHandler} id="formulario-reset" className='container-fluid'>
          <h1 className='titulo'>Registro de Usuario</h1>
          <div className="form-row">
            <div className="form-group col-md-6 mb-0">
              <input autoFocus type="text" className="form-control item" name="name" onChange={this.handleChange} required placeholder="Nombre" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="text" className="form-control item" name="lastname" onChange={this.handleChange} required placeholder="Apellido" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="text" maxLength="10" className="form-control item" onKeyPress={this.OnlyNumber} name="phonenumber" onChange={this.handleChange} required title="3810000000" placeholder="N° Celular" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="text" className="form-control item" onKeyPress={this.OnlyNumber} name="age" onChange={this.handleChange} required placeholder='Edad: Ej. "27"' />
            </div>
          </div>
          <div className="form-group">
            <input type="email" className="form-control item" name="email" onChange={this.handleChange} title="ejemplo@mail.com" required placeholder="Correo electrónico" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control item" name="address" onChange={this.handleChange} required placeholder="Dirección" />
          </div>
          <div className="form-row">
          <div className="form-group col-md-6 mb-0">
              <input type="text" minLength="4" className="form-control item" name="username" onChange={this.handleChange} title="El usuario debe contener al menos 4 caracteres"  required placeholder="Usuario" />
            </div>
            <div className="form-group col-md-6 mb-0">
              <input type="password" minLength="8" className="form-control item" name="password" onChange={this.handleChange} title="La contraseña debe tener al menos 8 caracteres y una mayuscula" required placeholder="Contraseña" />
            </div>
          </div>
          <button type="submit" className="btn btn-block create-account">Registrarse</button>
        </form>
      </div>
    )
  }
}

export default RegUser;