import React, { Component } from "react";

class ThreadResponseCard extends Component {
  state = {};
  render() {
    return (
      <div className="response-card-wrap">
        <div class="row">
          <div class="col s12 m12 l12" >
         
            <div class="card blue-grey darken-1">
            <div class="card-action">
          <a href="#"><i class="material-icons left">account_circle</i></a>
          <a href="#"><i class="material-icons right">favorite_border</i></a>
        </div>
              <div class="card-content white-text response">
                <p>
                  {this.props.responseData.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreadResponseCard;
