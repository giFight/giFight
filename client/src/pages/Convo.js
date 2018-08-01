import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import ConvoThread from '../Components/ConvoThread';
import SearchContainer from '../Components/SearchContainer';




class Convo extends Component {

  constructor() {
    super();
    this.state = {
      topic: "",
      gifs: [], 
    };
  } 


  // this is displaying (on page load) all the saved gifs belonging to the convo
  componentDidMount() {
    const currentConvo = this.props.match.params.id;
    axios.get(`/api/convos/${currentConvo}`)
      .then(response => {
        this.setState(prevState => ({
          topic: response.data.topicName,
          gifs: [...response.data.gifUrls]
        }));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error.message);
      });
  }

  
  // if length of gifThread is 0 (0 is equal to false) then show no gifs message
  renderNoGifsMessage = () => {
    return this.state.gifs.length ? <ConvoThread data={this.state.gifs} /> : <h1>No Gifs Yet</h1>;
  }


  // this is the funcionality for the select gif button that sends the user's clicked/selected gif to the convo
  handleSelectButton = (e, gifUrl) => {    
    const currentConvo = this.props.match.params.id;
    axios.put(`/api/convos/${currentConvo}`, {
      gifUrls: gifUrl
    })
      .then(response => {
        this.setState(prevState => ({
          gifs: [...prevState.gifs, response.data.gifUrl]
        }));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error.message);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className='convo-main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron>
          <h1 className="display-4">{this.state.topic.length ? this.state.topic : "Topic name"}</h1>
        </Jumbotron>
        <div className='convo-section'>  
          <div className='searchContainer'>
            <SearchContainer convoButton={this.handleSelectButton} />    
          </div>   
          <div className="outer-convo-container mx-auto">
            {this.renderNoGifsMessage()}
          </div>              
        </div>
      </div>
    );
  }

}

export default Convo;