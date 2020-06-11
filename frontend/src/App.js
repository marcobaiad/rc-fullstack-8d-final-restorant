import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//pages
import HomePage from './pages/HomePage';
import RegUser from './pages/RegUser';
import LoginSession from './pages/LoginSession'



function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route exact path="/reg" component={RegUser}/>
       <Route exact path="/log" component={LoginSession}/>

     </Switch>
   </Router>
  );
}

export default App;
