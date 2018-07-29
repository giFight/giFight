import React, { Component } from 'react';

export default class Navbar extends Component {


  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom:'2rem'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand">Gifersation</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How to</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <img id="logo" src={require('../logo/gifersation.png')} alt="logo" />
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Username
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">My Convos</button>
              <button className="dropdown-item" type="button">My Likes</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" type="button">Sign Out</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}