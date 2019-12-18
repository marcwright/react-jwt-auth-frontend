import React, { Component } from 'react'

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div className='login-wrap'>
        <h3 className='login-header'>Log In</h3>

        <form className='form-login-wrap'>
          <div>
            <label htmlFor='username'>Username:</label>
            <input name="username" type='text' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input name="password" type='text' name='password' onChange={this.props.handleInput} />
          </div>
          {/* <input value='Submit' type='submit' onClick={this.props.handleLogIn} /> */}
          <div className="btn-wrap">
                  <button
                    className="btn sign waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={this.props.handleLogIn}
                  >
                    Submit
                  </button>
                </div>
        </form>
      </div>
    )
  }
}

export default LogInForm
