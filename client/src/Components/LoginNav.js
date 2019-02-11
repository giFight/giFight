import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class LoginNav extends Component {


  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:'2rem'}}>
        <img style={{marginLeft:'5rem'}} id="logo" src={require('../logo/gifersation.png')} alt="logo" />
        <form className="form-inline" style={{marginLeft:'35rem'}}>
          <input className="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search" />
          <input className="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search" />
          <button className="btn btn-color sign out" type="submit">Log In</button>
        </form>
      </nav>
     </div>
    )
  }

  
}