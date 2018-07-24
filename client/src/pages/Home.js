import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';


class Home extends Component {



  render() { 
    return (
      <div className='home-main-container'>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }

}

export default Home;
