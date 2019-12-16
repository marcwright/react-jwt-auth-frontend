import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "./Thread.css";

class Thread extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div  id='thread-area' class="col s12 m8 l7"></div>

        <div id='response-area' class="col s12 m4 l5"></div>
      </div>
    );
  }
}

export default Thread;
