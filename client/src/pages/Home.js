import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';


class Home extends Component {



  render() { 
    return (
      <div className='home-main-container'>
        <div className="admin-dashboard">
          <img src={require("../logo/fight.png")} className="logo" />
        <Navbar />
        <Jumbotron />
      </div>
    </div>
    );
  }

}

export default Home;
