import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateForm from '../Components/CreateForm';


class Home extends Component {



  render() { 
    return (
      <div className='home-main-container'>
        <div className="admin-dashboard">
          <img src={require("../logo/g.png")} className="bg" />
      <div className='home-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">Hello, Matthew!</h1>
          <p>Pick a topic or create a new one.</p>
        </Jumbotron>
        <CreateForm />
      </div>
    </div>
  </div>
    );
  }

}

export default Home;
