import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import Jumbotron from './Components/Jumbotron';
import Navbar from './Components/Navbar';
import { Link } from "react-router-dom";
// import NoGifs from './Components/NoGifs';

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
        <Navbar />
        <Jumbotron />
        <div className="search-container">
          <div className="search-bar">
            <SearchForm handleSubmittedForm={this.handleSubmit} />      
          </div>  
          <div className='arrow-container' style={{position:'relative'}}>        
            <div className="outer-container mx-auto" style={{overflow:'auto', height:'22rem', width:'41rem', borderStyle: 'solid', borderColor:'cyan', borderRadius: '25px'}}>
              <GifList data={this.state.gifs} />
            </div>              
            <i className="fa fa-angle-left"  style={{cursor: 'pointer',fontSize: '6em', float:'left', position:'absolute', top:'50%', transform:'translateY(-50%)'}}></i>
            <i className="fa fa-angle-right"  style={{cursor: 'pointer',fontSize: '6em', float:'right', position:'absolute', top:'50%', transform:'translateY(-50%)', right: 0}}></i>
          </div>   
        </div>    
      </div>
    );
  }
}

export default App;
