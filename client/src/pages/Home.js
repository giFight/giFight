import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import CreateForm from '../Components/CreateForm';
import Footer from '../Components/Footer';
import TopicBtn from '../Components/TopicBtn';
import axios from "axios";



class Home extends Component {

  state = {
    buttons: []
  }

  componentDidMount = async () => {
    
    const res = await axios.get(`/api/convos/all`);
    const convos = await res.data;

    const btns = convos.map(convo => {
      return <TopicBtn id={convo._id} key={convo.topicName} name={convo.topicName} />;
    });

    this.setState(prevState => ({
      buttons: [...prevState.buttons, ...btns]
    }));
  }

  handleSubmittedForm = (input) => {

    axios.post('/api/convos', { topicName: input})
      .then(response => {
        const btn = <TopicBtn  key={response.data.topicName} name={response.data.topicName} />;
        this.setState(prevState => ({
          buttons: [...prevState.buttons, btn] 
        }))
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }

  render() { 
    console.log(this.state)
    return (
      <div className='home-main-container'>
        <div className="admin-dashboard">
          <img src={require("../logo/g.png")} className="bg" />
            <Navbar />
            <div className='home-main-container col-lg-8 mx-auto'>
              <Jumbotron>
                <h1 className="display-4">Hello, Matthew!</h1>
              </Jumbotron>
              <CreateForm handleSubmittedForm={this.handleSubmittedForm}/>
              {/* <TopicBtn/> */}
              <div class="media">
                <div class="media-body">
                  <h4 class="media-heading"> Here are some topic ideas </h4>
                  <p> If you can't think of your own, try one of these. Type in the space above to add more buttons.
                  </p>
                  {this.state.buttons}
                </div>
              </div>
            </div> 
          </div>
          <Footer/>
        </div> 
    
       
        
       
    );
  }

}

export default Home;
