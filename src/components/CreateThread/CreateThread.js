import React, { Component } from "react";
import ThreadGallery from '../ThreadGallery/ThreadGallery.js';
import "./CreateThread.css";
import axios from "axios";

class CreateThread extends Component {

  state = {
    title: "",
    prompt: ""
  }

  handleCreateThread = event => {
    event.preventDefault();
    const newThread = {
      title: this.state.title,
      prompt: this.state.prompt
    };
    const clubID = window.localStorage.clubID;
    axios({
      method: "post",
      url: `${this.props.databaseUrl}/api/clubs/${clubID}/threads`,
      data: newThread
    }).then(response => {
      console.log(response);
    });
  };
  
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)
  }

  render() {
   
    console.log(window.localStorage)
    return (
      <div className="create-thread-wrap">
        <form action="/action_page.php" id="usrform">
          <div className="thread input-field">
            <i className="material-icons prefix">stars</i>
            <input className="thread-title" type="text" id="text" name="title" onChange={event => this.handleInput(event)}/>
            <label id="thread-title" className="label" for="name">
              Title:
            </label>
          </div>

          <div className="text-area-wrap">
            <textarea className="text-area" name="prompt" form="usrform" onChange={event => this.handleInput(event)}>
              Start a discussion...
            </textarea>
          </div>
          <input
            id="thread-btn"
            className="btn waves-effect waves-light"
            type="submit"
            onClick={event => this.handleCreateThread(event)}
          />
        </form>
        <ThreadGallery databaseUrl={this.props.databaseUrl}/>
      </div>
    );
  }
}

export default CreateThread;

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
