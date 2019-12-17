import React, { Component } from 'react'

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div className='login-wrap'>
        <h2>Log In</h2>

        <form>
          <div>
            <label htmlFor='username'>Username</label>
            <input name="username" type='text' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input name="password" type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
        </form>
      </div>
    )
  }
}

export default LogInForm
