import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateForm from '../Components/CreateForm';
import TopicBtn from '../Components/TopicBtn';
import Footer from '../Components/Footer';
import Giphy from '../logo/giphy.png'



class HowTo extends Component {



  render(){
    return (
      <div className='page-container'>

        <Navbar />
        <div className='home-main-container col-lg-8 mx-auto'>
          <Jumbotron>
            <h1 className="display-4">How To</h1>
            <p>This app was created for those who would rather speak in GIFs.</p>
          </Jumbotron>
        
        {/*Step 1 */}
        <div class="media">
          <div class="media-left">
          <img class="media-object" src="https://media2.giphy.com/media/d2VNDNckZ1OQWbN6/200.webp" alt="...">
          </img>
        </div>
      <div class="media-body">
        <h4 class="media-heading"> Make us proud </h4>
        <p> First, you pick a topic to gifersation. It's quite simple, just click a button or create a new topic by typing it in!
          Start off simple, with a cat or a dog topic. Don't get overwhelmed.
        </p>
      </div>
      </div>

      
       

     {/*Step 2 */}
     <div class="media">
        <div class="media-left">
        <img class="media-object" src="https://media1.giphy.com/media/mCRJDo24UvJMA/200.webp" alt="...">
        </img>
      </div>
     <div class="media-body">
       <h4 class="media-heading"> Log In </h4>
       <p> Clicking a button will bring you to the chat page. Here you will create a unique username to chat with others.
       </p>
     </div>
     </div>
     
     {/*Step 3 */}
     <div class="media">
        <div class="media-left">
        <img class="media-object" src="https://media1.giphy.com/media/NgEt9Mqppd5qo/200.webp" alt="...">
        </img>
      </div>
     <div class="media-body">
       <h4 class="media-heading"> Gif Away </h4>
       <p> Gif Away! Pretty self explanatory - just type in what you would like to search for to start the chat. 
           Then click the button to the left of the GIF to add into the chat. ENJOY!
       </p>
     </div>
     </div>
    </div>
    <Footer/>
    </div>
    
   

    );
  }

}

export default HowTo;