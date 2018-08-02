import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import HowTo from './pages/HowTo';
import AboutUs from './pages/AboutUs';
import Convo from './pages/Convo';
import Login from './pages/login';
import Signup from './pages/signup'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path ='/howto' component={HowTo}/>
        <Route exact path = '/aboutus' component={AboutUs}/>
        <Route exact path='/convo/:id' component={Convo} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Home} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;
