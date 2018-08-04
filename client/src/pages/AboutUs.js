import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import Colten from '../Components/Colten';
import Andrew from '../Components/Andrew';
import Katie from '../Components/Katie';
import Matt from '../Components/Matt';
import Footer from '../Components/Footer';

class AboutUs extends Component {



  render() { 
    return (
      <div className = 'page-container'>
      <div className='home-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">About the Creators</h1>
          <br></br>
          <p> Just a group of four creating a giftastic final project </p>
        </Jumbotron>
        <Colten/>
        <Andrew/>
        <Matt/>
        <Katie/>
        
      </div>
      <Footer/>
      </div>
      

    


    );

  }

}

export default AboutUs;
