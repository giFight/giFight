import React, { Component } from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Navbar from '../Components/Navbar';
import axios from 'axios'
import CreateBtn from '../Components/CreateBtn';
import CreateForm from '../Components/CreateForm';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

    axios
      .post('/user/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log('login response: ')
        console.log(response)
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          })
          // update the state to redirect to home
          this.setState({
            redirectTo: '/'
          })
        }
      }).catch(error => {
        console.log('login error: ')
        console.log(error);

      })
  }


  render() {
    return (
      <div className='home-main-container'>
        <div className="admin-dashboard">
          <img src={require("../logo/fight.png")} className="bg" />
          <div className='home-main-container col-lg-8 mx-auto'>
            <Navbar />
            <Jumbotron>
              <div>
                <h4>Login</h4>
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-1 col-ml-auto">
                      <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <div className="col-3 col-mr-auto">
                      <input className="form-input"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-1 col-ml-auto">
                      <label className="form-label" htmlFor="password">Password: </label>
                    </div>
                    <div className="col-3 col-mr-auto">
                      <input className="form-input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <div className="col-7"></div>
                    <button
                      className="btn btn-primary col-1 col-mr-auto"

                      onClick={this.handleSubmit}
                      type="submit">Login</button>
                  </div>
                </form>
              </div>
              <a class="btn btn-block btn-social btn-twitter" href='/auth/github'>
                <span class="fa fa-github"></span> Sign in with Github</a>
            </Jumbotron>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;