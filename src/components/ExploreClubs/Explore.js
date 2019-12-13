import React, { Component } from 'react';   

class Explore extends Component {
    state = {  }
    render() { 
        return (
            <div className='signup-wrap'>
        <h2>SIGN UP</h2>

        <form className='form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input className='submit' value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
          );
    }
}
 
export default Explore;