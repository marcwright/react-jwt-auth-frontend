import React, { Component } from "react";
import "./ThreadGallery.css";
import ThreadCard from "../ThreadCard/ThreadCard.js";

class ThreadGallery extends Component {
  state = {
    
  };

  createThreads = () => {
    let threads = [];
    for (let i = 0; i < 10; i++) {
      threads.push(<ThreadCard />);
    }
    return threads;
  };

  render() {
    console.log(this.props.databaseUrl);
    //   const threadEls = this.state.threads.map(thread => {
    //   return <ThreadCard thread={thread} />;
    // })
    return (
      <div className="row">
        {this.createThreads()}
      </div>
    );
  }
}

export default ThreadGallery;
