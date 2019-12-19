import React, { Component } from 'react'

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='login-wrap'>
        <h3 className='login-header'>Log In</h3>

        <form className='col s12 l5 form-login-wrap'>
          <div>
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
        </form>
      </div>
    )
  }
}

export default LogInForm
