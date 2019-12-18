import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "./Thread.css";
import ThreadTopic from '../ThreadTopic/ThreadTopic.js';
import ThreadResponseCard from '../ThreadResponseCard/ThreadResponseCard.js'

class Thread extends Component {
  state = {};
  render() {
    return (
      <div class="row">
        <div  id='thread-area' class="col s12 m12 l7">
            <ThreadTopic />
        </div>

        <div id='response-area' class="col s12 m12 l5">
            <ThreadResponseCard />
            <ThreadResponseCard />
            <ThreadResponseCard />
        </div>
      </div>
    );
  }
}

export default Thread;
