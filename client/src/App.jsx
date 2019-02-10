import React from 'react';
import Home from './pages/Home';
import HowTo from './pages/HowTo';
import AboutUs from './pages/AboutUs';
import Convo from './pages/Convo';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path ='/howto' component={HowTo}/>
        <Route exact path = '/aboutus' component={AboutUs}/>
        <Route exact path='/convo/:id' component={Convo} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
