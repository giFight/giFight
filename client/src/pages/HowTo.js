import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateBtn from '../Components/CreateBtn';
import CreateForm from '../Components/CreateForm';
import TopicBtn from '../Components/TopicBtn';


class HowTo extends Component {



  render(){
    return (
      <div className='home-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">How To</h1>
          <p>Pick a topic or create a new one.</p>
        </Jumbotron>
        

      </div>
    );
  }

}

export default HowTo