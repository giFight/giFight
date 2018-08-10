import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import NotFoundGif from '../Components/NotFoundGif';


class AboutUs extends Component {



  render() { 
    return (
      <div>
        <Navbar />
        <div className='home-main-container col-lg-8 mx-auto'>
          <Jumbotron>
            <h1 className="display-4">PAGE NOT FOUND!</h1>
          </Jumbotron>
          <NotFoundGif />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;