import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./Thread.css";
import axios from "axios";

import ThreadResponseCard from "../ThreadResponseCard/ThreadResponseCard.js";

class Thread extends Component {
  state = {
    responsesArray: null,
    currentThread: null
  };

  componentDidMount = () => {
    this.getResponses();
    this.getThread();
  };

  getResponses = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/threads/${window.localStorage.threadID}/responses`
    })
      .then(response => {
        // console.log(response.data)
        this.setState({
          responsesArray: response.data
        });
      })
      .catch(err => console.log(err));
  };

  getThread = () => {
    axios({
      method: "get",
      url: `${this.props.databaseUrl}/api/threads/${window.localStorage.threadID}`
    })
      .then(response => {
        this.setState({
          currentThread: response.data
        });
        console.log(this.state.currentThread);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      // {this.state.currentThread ? () : null}
      <div class="row">
        <div id="thread-area" class="col s12 m12 l7">
          <div className="thread-topic-wrap">
            <p>
              {this.state.currentThread ? this.state.currentThread.title : null}
            </p>
          </div>
          <div>
            {this.state.currentThread ? this.state.currentThread.prompt : null}
          </div>
        </div>

        <div id="response-area" class="col s12 m12 l5">
          <form>
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
          {this.state.responsesArray
            ? this.state.responsesArray.map(response => {
                return <ThreadResponseCard responseData={response} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Thread;
