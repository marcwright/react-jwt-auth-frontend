import React, { Component } from "react";

class ThreadResponseCard extends Component {
  state = {};
  render() {
    return (
      <div className="response-card-wrap">
        <div class="row">
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text response">
                <span class="card-title"><a href="#"><i class="material-icons">account_circle</i></a></span>
                <p>
                  This is my witty comment regarding this post.
                </p>
                <a href="#"><i class="material-icons">thumb_up</i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreadResponseCard;
