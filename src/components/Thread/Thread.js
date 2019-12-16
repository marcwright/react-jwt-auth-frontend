import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "./Thread.css";

class Thread extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div  id='thread-area' class="col s12 m12 l7">
            {/* Thread  */}
        </div>

        <div id='response-area' class="col s12 m12 l5">

        </div>
          {/* Create Response text-area with submit btn */}
          {/* response cards */}
      </div>
    );
  }
}

export default Thread;
