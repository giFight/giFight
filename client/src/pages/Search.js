import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import SearchForm from '../Components/SearchForm';
import GifList from '../Components/GifList';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
// import NoGifs from './Components/NoGifs';

class Search extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  } 

  handleSubmit = (e, input) => {
    e.preventDefault();
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }



  render() { 
    console.log(this.state.gifs);
    return (
      <div className='main-container col-lg-8 mx-auto'>
        <Navbar />
        <Jumbotron> 
          <h1 className="display-4">Topic goes here...</h1>
        </Jumbotron>
        <div className="search-container">
          <div className="search-bar">
            <SearchForm handleSubmittedForm={this.handleSubmit} />      
          </div>  
          <div className='arrow-container'>        
            <div className="outer-container mx-auto">
              <GifList data={this.state.gifs} />
            </div>              
            <i className="fa fa-angle-left"></i>
            <i className="fa fa-angle-right"></i>
          </div>   
        </div>    
      </div>
    );
  }
}

export default Search;