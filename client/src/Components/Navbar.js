import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {


  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:'2rem'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <a className="navbar-brand">Gifersation</a> */}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/howto">How to</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
            </li>
          </ul>
          <img id="logo" src={require('../logo/gifersation.png')} alt="logo" />
          <div className="btn-group">
            <button type="button" className="btn btn-color dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Username
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">My Convos</button>
              <button className="dropdown-item" type="button">My Likes</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" type="button"><a href='/login'>Log In</a></button>
              <button className="dropdown-item" type="button"><a href='/signup'>Sign Up</a></button>
              <div class="dropdown-divider"></div>
              <button className="dropdown-item" type="button"><a href='/logout'>Log Out</a></button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}