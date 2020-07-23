import React, { component } from 'react';
import clienteAxios from '../config/axios'
import Auth from '../utils/auth';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import $ from 'jquery';
import '../Css/mainAdm.css'
import sweet from 'sweetalert2';


import PrivateRoute from './PrivateRoute';
import AdmMenu from '../pages/AdmMenu';
import CreateFoodsPage from '../pages/CreateFoodsPage'
import GetOrderPages from '../pages/GetOrderPages'
import EditFoods from '../pages/EditFoods'

const MenuAdm = () => {

	const history = useHistory()

	$(document).ready(function () {
		$("#menu-toggle").click(function (e) {
			e.preventDefault();
			$("#wrapper").toggleClass("menuDisplayed");
		});
	});

	const LogUotHandler = async () => {
		try {
			await clienteAxios.get(`/api/v1/usuarios/logout`,
			);
			Auth.logOut();
			history.push('/')
		} catch (e) {
			const { response } = e;
			console.log(response);
			sweet.fire({
				icon: 'error',
				title: 'No se pudo desloguear'
			});
		}
	}

	return (
		<Router>
			<div className="container-fluid" id="wrapper">
				<div className="row">
					<div className="col-12 justify-content-center" id="sidebar-wrapper">
						<ul className="sidebar-nav">
							<li><Link to="/admin/todas">Listado de todas las comidas</Link></li>
							<li><Link to="/admin/createfoods">Crear nuevas comidas</Link></li>
							<li><Link to="/admin/allorder">Listado de ordenes</Link></li>
							<li><Link onClick={LogUotHandler}>Cerrar Sesión</Link></li>
						</ul>
					</div>
				</div>

				<div className="row" id="page-content-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<a href="#" className="btn btn-secondary" id="menu-toggle"><span className="glyphicon glyphicon-menu-hamburger"></span></a>
								<h1 className="text-center">Tablero del administrador</h1>
								<h2 className="small text-center">Asturias bar</h2>
								<p className="text-center">En este menu de administrador podrás consultar, editar y crear nuevas comidas y tragos. También podrás ver las ordenes y sus estados.</p>

								<Switch>
									<PrivateRoute exact path="/admin/todas" component={AdmMenu} />
									<PrivateRoute exact path="/admin/createfoods" component={CreateFoodsPage} />
									<PrivateRoute exact path="/admin/allorder" component={GetOrderPages} />
									<PrivateRoute path="/admin/edit/:id" exact role={'admin'} component={EditFoods} />
								</Switch>

							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default MenuAdm;
