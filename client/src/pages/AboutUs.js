import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateBtn from '../Components/CreateBtn';
import CreateForm from '../Components/CreateForm';
import TopicBtn from '../Components/TopicBtn';
import Colten from '../Components/Colten';
import Andrew from '../Components/Andrew';
import Katie from '../Components/Katie';
import Matt from '../Components/Matt';

class AboutUs extends Component {



  render() { 
    return (
      <div className='home-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">About the Creators</h1>
          <p>This app was created for those who would rather speak in GIFs</p>
        </Jumbotron>
        <Colten/>
        <Andrew/>
        <Matt/>
        <Katie/>
      </div>

    


    );

  }

}

export default AboutUs;
