import React, { Component } from "react";

import "./LogInForm.css";

class LogInForm extends Component {
<<<<<<< HEAD
  render () {
    console.log(this.props)
    return (
      <div className='login-wrap'>
        <h3 className='login-header'>Log In</h3>
=======
  render() {
    return (
      <div className="login-wrap">
        <h2>Log In</h2>
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6

        <form className='col s12 l5 form-login-wrap'>
          <div>
<<<<<<< HEAD
          <i className="material-icons prefix">account_circle</i>
            <label htmlFor='username'>Username:</label>
            <input name="username" type='text' onChange={this.props.handleInput} />
          </div>
          <div>
            <i class="material-icons prefix">lock</i>
            <label htmlFor='password'>Password:</label>
            <input name="password" type='text' name='password' onChange={this.props.handleInput} />
          </div>
          {/* <input value='Submit' type='submit' onClick={this.props.handleLogIn} /> */}
          <div className="log btn-wrap">
                  <button
                    className="log btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.props.handleLogIn}
    
                  >
                    Submit
                  </button>
                </div>
=======
            <label htmlFor="username">Email</label>
            <input
              type="text"
              name="username"
              onChange={this.props.handleInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            onClick={this.props.handleLogIn}
          />
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
        </form>
      </div>
    );
  }
}

export default LogInForm;
