import React from 'react';
import Header from '../src/components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


//pages
import HomePage from './pages/HomePage';
import RegUser from './pages/RegUser';
import LoginSession from './pages/LoginSession';
import Footer from '../src/components/Footer';
import AdmMenu from './pages/AdmMenu';
import PrivateRoute from './components/PrivateRoute';
import CreateFoodsPage from './pages/CreateFoodsPage'
import EditFoods from './pages/EditFoods'
import PlatoPage from './pages/PlatoPage';
import GetOrderPages from './pages/GetOrderPages'
import GetOrderUserPages from './pages/GetOrderUserPages'
import SideBarAdm from './components/SideBarAdm'



function App() {

	return (
		<Router>
			<Route component={Header} />
			<Switch>
				<PrivateRoute path="/admin/main" role={'admin'} exact component={SideBarAdm} />
				<PrivateRoute path="/admin/todas" role={'admin'} exact component={AdmMenu} />
				<PrivateRoute path="/admin/allorder" role={'admin'} exact component={GetOrderPages} />
				<PrivateRoute path="/admin/createfoods" role={'admin'} exact component={CreateFoodsPage} />
				<PrivateRoute path="/admin/edit/:id" exact role={'admin'} component={EditFoods} />
				<PrivateRoute path="/user/orders" exact role={'user'} component={GetOrderUserPages} />
				<Route path="/plato/:id" exact component={PlatoPage} />
				<Route path="/reg" exact component={RegUser} />
				<Route path="/log" exact component={LoginSession} />
				<Route exact path="/" component={HomePage} />
			</Switch>
			<Route component={Footer} />
		</Router>
	);

}

export default App;