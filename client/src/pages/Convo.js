import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
// import GifList from '../Components/GifList';
import axios from 'axios';
import ConvoThread from '../Components/ConvoThread';
// import NoGifs from './Components/NoGifs';




class Convo extends Component {

  constructor() {
    super();
    this.state = {
      topic: "",
      gifs: [], //for the modal?
      // nextPageBtn: false,
      isModalOpen: false
    };
  } 

  //* for the modal
  componentDidMount() {
    const currentConvo = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/convos/${currentConvo}`)
      .then(response => {
        this.setState(prevState => ({
          topic: response.data.topicName,
          gifs: [...response.data.gifUrls]
        }));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  handleModalOpen = () => {
    this.setState(prevState => ({
      isModalOpen: true
    }))
  }
  

  // <ConvoThread data={this.state.gifThread} selectedGif={this.handleGifClick} /> 
  // if length of gifThread is 0 (0 is equal to false) then show no gifs message
  renderNoGifsMessage = () => {
    return this.state.gifs.length ? <ConvoThread data={this.state.gifs} /> : <h1>No Gifs</h1>;
  }

  renderModal = () => {
    // return this.state.isModalOpen ? <Modal ...> : null;
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
          <div className="outer-convo-container mx-auto">
            {this.renderNoGifsMessage()}
          </div>              
          <i className="far fa-comment-alt" onClick={this.handleModalOpen}></i>
        </div>
        {this.renderModal()}
      </div>
    );
  }

}

export default Convo;