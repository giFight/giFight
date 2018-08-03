import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import NotFoundGif from '../Components/NotFoundGif';


class AboutUs extends Component {



  render() { 
    return (
      <div className='home-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">Page Not Found!</h1>
        </Jumbotron>
        <NotFoundGif />
      </div>

    


    );

  }

}

export default AboutUs;