import React, { Component } from 'react';

export default class CreateForm extends Component {
  
  state = {
    topic: '',
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
      <form className="form-inline md-form form-sm active-cyan" style={{marginBottom:'2rem'}} onSubmit={this.handleSubmit} >
        <i className="fa fa-quote-left" aria-hidden="true" style={{fontSize: '25px',padding: '.5em 0 .5em', marginRight: '-25px'}}></i>
        <input type="text"
              name="search"
              value={this.state.search}
               className="form-control form-control-sm" 
               onChange={this.onSearchChange}
               aria-label="Search" 
               placeholder="Create a new topic..."
               autoComplete="off"
               style={{borderRadius: 0, flex:1,padding: '1em .5em .5em 35px', fontSize: '18px', lineHeight:1, background: 'transparent'}}/>
        <i className="fa fa-quote-right" aria-hidden="true" style={{fontSize: '25px',padding: '.5em 0 .5em', marginLeft: '-25px'}}></i>
      </form>      
    );
  }
}