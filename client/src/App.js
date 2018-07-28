import React from 'react';
import Home from './pages/Home';
import Search from './pages/Search';
import HowTo from './pages/HowTo';
import AboutUs from './pages/AboutUs';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/search' component={Search} />
        <Route exact path ='/howto' component={HowTo}/>
        <Route exact path = '/aboutus' component={AboutUs}/>
      </Switch>
    </div>
  </Router>
);

export default App;
