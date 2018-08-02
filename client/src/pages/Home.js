import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateForm from '../Components/CreateForm';
import Footer from '../Components/Footer';
import TopicBtn from '../Components/TopicBtn'


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
          <p></p>
        </Jumbotron>
        <CreateForm />
        <div class="media">
     <div class="media-body">
       <h4 class="media-heading"> Here are some ideas if you aren't creative enough </h4>
       <p> If you can't think of your own, try one of these. Type whichever you choose in the space above.
       </p>
       <TopicBtn/>
     </div>
     </div>
       
      </div>
      
    </div>
  </div>
  
  
    );
  }

}

export default Home;
