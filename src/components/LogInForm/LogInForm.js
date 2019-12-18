import React, { Component } from 'react'

import './LogInForm.css'

class LogInForm extends Component {
  render () {
    return (
      <div>
        <h1>Personal Jeopardy</h1>
        <h2>Log In</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='Submit' onClick={this.props.handleLogIn} />
          {/* <input value='Continue Play' type='ContinuePlay' onClick={this.props.handleLogIn} />
          <input value='History' type='History' onClick={this.props.handleLogIn} /> */}
        </form>
          
      </div>
    )
  }
}

export default LogInForm
