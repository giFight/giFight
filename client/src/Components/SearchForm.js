import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    search: '',
  }
  
  onSearchChange = e => {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({ [name]: val });

  }
  
  handleSubmit = e => {
    const input = this.state.search;
    this.props.handleSubmittedForm(e, input);
    this.setState({ search: '' });
  }
  
  render() {  
    return (
      <form className="form-inline md-form form-sm active-cyan" onSubmit={this.handleSubmit} >
        <i className="fa fa-search" aria-hidden="true" style={{fontSize: '25px',padding: '.5em 0 .5em', marginRight: '-25px'}}></i>
        <input type="text"
              name="search"
              value={this.state.search}
               className="form-control form-control-sm" 
               onChange={this.onSearchChange}
               aria-label="Search" 
               placeholder="Search..."
               autoComplete="off"
               style={{borderRadius: 0, flex:1,padding: '1em .5em .5em 35px', fontSize: '18px', lineHeight:1, background: 'transparent'}}/>
      </form>      
    );
  }
}






