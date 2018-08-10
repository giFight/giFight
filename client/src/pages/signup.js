import React, { Component } from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom'
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import axios from 'axios'


class Signup extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }
  handleSubmit(event) {
    console.log('sign-up handleSubmit, username: ')
    console.log(this.state.username)
    event.preventDefault()

    axios
      .post('api/users/', {

        username: this.state.username,
        password: this.state.password
      })
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('successful signup')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('sign-up error')
        console.log()
      }
    }).catch(error => {
      console.log('sign up server error')
      console.log(error)
    })
  }


  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className='home-main-container'>
          <div className="admin-dashboard">
            <img src={require("../logo/fight.png")} className="bg" />
            <div className='home-main-container col-lg-8 mx-auto'>
              <Navbar />
              <Jumbotron>
                <div className="SignupForm">
                  <h1>Signup form</h1>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="confirmPassword">Confirm Password: </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                  <button onClick={this.handleSubmit}>Sign up</button>
                </div>
                <a className="btn btn-block btn-social btn-twitter" href='/auth/github'>
                  <span className="fa fa-github"></span> Sign in with Github</a>

              </Jumbotron>
            </div>
          </div>
        </div >
      )
    }
  }
}

export default Signup;