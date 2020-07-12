import React, { component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';

import $ from 'jquery';

import '../Css/mainAdm.css'

const SideBarAdm = () => {


  $(document).ready(function () {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  });

  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li><Link to="/admin/todas">Listado de todas las comidas</Link></li>
          <li><Link to="/admin/createfoods">Crear nuevas comidas</Link></li>
          <li><Link to="/admin/allorder">Listado de ordenes</Link></li>
        </ul>
      </div>

      {/* <!-- Page Content --> */}
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <a href="#" className="btn btn-secondary" id="menu-toggle"><span className="glyphicon glyphicon-menu-hamburger"></span></a>
              <h1 className="text-center">Tablero del administrador</h1>
              <h2 className="small text-center">Asturias bar</h2>
              <p className="text-center">En este menu de administrador podrás consultar, editar y crear nuevas comidas y tragos. También podrás ver las ordenes y sus estados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarAdm;
