import React, { Component } from 'react'
import './Profile.css'
import axios from 'axios'

class Profile extends Component {

  state = {
    user: {}
  }


  componentDidMount() {
    this.getLoggedInUser()
  }

  getLoggedInUser = () => {
    console.log(`${this.props.databaseUrl}/api/users/${window.localStorage.userID}`)
    console.log(`Bearer ${window.localStorage.token}`)
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`
      // headers: { Authorization: `Bearer ${window.localStorage.token}`}
    }).then(response => {
      console.log(response)
      this.setState({
        user: response.data
      })

    })
  }

  handleDeleteUser = () => {
      
  }


  updateUser = () => {

    const updatedUser = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }

    
    axios({
      method: "put",
      url: `${this.props.databaseUrl}/api/users/${window.localStorage.userID}`,
      data: updatedUser
    })
  }


  render() {
    if (window.localStorage.userID !== "") {
      return (
        <div>
          <h4> Is Logged In</h4>
            <div>
               <h2>Log Out</h2>

                <form>
                  <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
                </form>
              </div>
              <div className="col s12 l5 offset-l2 htmlForm-wrap">
              <form>
                <div className="input-field">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    name="username"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="label" htmlFor="name">
                    Username:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">contacts</i>
                  <input
                    name="firstName"
                    htmlFor="firstName"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="label" htmlFor="firstName">
                    First Name:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">contacts</i>
                  <input
                    name="lastName"
                    htmlFor="lastName"
                    type="text"
                    id="text"
                    onChange={this.props.handleInput}
                  />
                  <label className="label" htmlFor="name">
                    Last Name:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">email</i>
                  <input
                    name="email"
                    htmlFor="email"
                    type="email"
                    id="email"
                    onChange={this.props.handleInput}
                  />
                  <label className="label" htmlFor="email">
                    Email:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">lock</i>
                  <input
                    htmlFor="password"
                    onChange={this.props.handleInput}
                    name="password"
                    id="text"
                    type="text"
                  ></input>
                  <label className="label" htmlFor="message">
                    Password:
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">star</i>
                  <textarea
                    id="favorites"
                    className="materialize-textarea"
                    cols="20"
                    rows="20"
                  ></textarea>
                  <label className="label" htmlFor="favorites">
                    Name some of your favorite movies and television shows?
                  </label>
                </div>
                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.props.handleSignUp}
                  >
                    Submit
                  </button>
                  <button
                    className="btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={()=> this.handDeleteUser}
                  >
                    Delete Your Profile
                  </button>
                </div>
              </form>
            </div>
        </div>
      )
    } else {
      return (
        <div>
          <h4>You are not logged in Dude!</h4>
        </div>
      )
    }
  }

}

export default Profile
