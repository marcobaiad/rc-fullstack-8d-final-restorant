<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

=======
import React, { useEffect, useState } from 'react';
import Nabvar from '../src/components/Nabvar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clienteAxios from './config/axios';
>>>>>>> a905fcf813b6a1cc98cbed34bebece47c0972617
//pages
import HomePage from './pages/HomePage';
import RegUser from './pages/RegUser';
import LoginSession from './pages/LoginSession'
import Footer from '../src/components/Footer';

function App() {

  return (
   <Router>
     <Route component={Nabvar}/>  
     <Switch>
       <Route path="/reg" exact component={RegUser}/>
       <Route path="/log" exact component={LoginSession}/>
       <Route exact path="/" component={HomePage}/>
     </Switch>
     <Route component={Footer} />
   </Router>
  );
}

export default App;
