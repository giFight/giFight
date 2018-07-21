import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

class App extends Component {
  
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
        <div className="search-container" style={{width: ''}}>
          <div className="search-bar">
            <SearchForm handleSubmittedForm={this.handleSubmit} />      
          </div>   
          <div className="main-content mx-auto">
            <GifList data={this.state.gifs} />
          </div>
        </div>    
      </div>
    );
  }
}

export default App;
