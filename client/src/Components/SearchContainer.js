import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import SearchForm from '../Components/SearchForm';
import GifList from '../Components/GifList';


class SearchContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      addToConvoBtn: false,
      currentGifURL: ""
    };
  } 

  // display trending gifs by default
  componentDidMount() { 
    const apiKey = process.env.REACT_APP_SECRET_KEY
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  
  // handles gif search form input
  handleSubmit = (e, input) => {
    const apiKey = process.env.REACT_APP_SECRET_KEY
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${apiKey}`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error.message);
      });
  }

  // when a gif is clicked the select button is shown and the url of the clicked gif is captured
  handleGifClick = (e) => {
    console.log('from handleGifClick', e.target.src);
    this.setState({
      addToConvoBtn: true,
      currentGifURL: e.target.src
    });
  }

  // state gets changed when the select button is hit 
  handleConvoButton = (e) => {
    this.props.convoButton(e, this.state.currentGifURL);
  }

  // this renders select button and listens for the click event
  renderSelectBtn = () => {
    return this.state.addToConvoBtn ? <i className="fas fa-plus" onClick={this.handleConvoButton}></i> : ''
  }

  render() { 
    console.log(this.state);
    return (      
      <div className="search-container">
        <div className="search-bar">
          <SearchForm handleSubmittedForm={this.handleSubmit} />      
        </div>  
        <div className='arrow-container'>        
          <div className="outer-container mx-auto">
            <GifList data={this.state.gifs} selectedGif={this.handleGifClick} />
          </div>              
          {this.renderSelectBtn()}
        </div>   
      </div>    
    );
  }
}

export default withRouter(SearchContainer);