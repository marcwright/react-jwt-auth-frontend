import React, { Component } from 'react'

import './SignUpForm.css'

class SignUpForm extends Component {
  render () {
    return (
      <div className='signup-wrap'>
        
        <section className="section container scrollspy" id="contact">
    <div className="row">
      <div className="col s12 l5">
        <h2 className="indigo-text text-darken-4">Get Started</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
        <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
        
      </div>
      <div className="col s12 l5 offset-l2 form-wrap">
        <form>
          <div className="input-field">
            <i className="material-icons prefix">contacts</i>
            <input type="text" id="text" />
            <label for="name">Full Name:</label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">person</i>
            <input type="text" id="text" />
            <label for="name">Username:</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">email</i>
            <input type="email" id="email" />
            <label for="email">Email:</label>
          </div>
          <div class="input-field">
            <i class="material-icons prefix">lock</i>
            <input id="text" type='text'></input>
            <label for="message">Password:</label>
          </div>
          <div className='input-field'>
            <i className='material-icons prefix'>star</i>
            <textarea id='favorites' className='materialize-textarea' cols='20' rows='20'></textarea>
            <label for='favorites'>Name some of your favorite movies and television shows?</label>
          </div>
          <div className='btn-wrap'>
          <button className='btn waves-effect waves-light' type='submit' name='action'>
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  </section>
      </div>
    )
  }
}

export default SignUpForm

{/* <form className='form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input className='submit' value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form> */}
