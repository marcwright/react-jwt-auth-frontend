import React, { Component } from "react";
import ThreadGallery from '../ThreadGallery/ThreadGallery.js';
import "./CreateThread.css";

class SignUpForm extends Component {
  render() {
   
    console.log(window.localStorage)
    return (
      <div className="create-thread-wrap">
        <form action="/action_page.php" id="usrform">
          <div className="thread input-field">
            <i className="material-icons prefix">stars</i>
            <input className="thread-title" type="text" id="text" />
            <label id="thread-title" className="label" for="name">
              Title:
            </label>
          </div>

          <div className="text-area-wrap">
            <textarea className="text-area" name="comment" form="usrform">
              Start a discussion...
            </textarea>
          </div>
          <input
            id="thread-btn"
            className="btn waves-effect waves-light"
            type="submit"
          />
        </form>
        <ThreadGallery databaseUrl={this.props.databaseUrl}/>
      </div>
    );
  }
}

export default SignUpForm;

{
  /* <form className='form'>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input className='submit' value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form> */
}
