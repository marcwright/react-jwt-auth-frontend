import React, { Component } from "react";
import "./ThreadGallery.css";
import ThreadCard from "../ThreadCard/ThreadCard.js";

class ThreadGallery extends Component {
  state = {};
  render() {
    console.log(this.props.databaseUrl);
    //   const threadEls = this.state.threads.map(thread => {
    //   return <ThreadCard thread={thread} />;
    // });
    return (
      <div className="thread-wrap">
        {/* SUBMIT BUTTON */}
        <div className="btn-wrap">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            <a href="/CreateThread" className="create-thread-button">
              Create Thread
            </a>
          </button>
        </div>

        {/* SIGN UP FORM */}
        <div className="col s12 l12 thread-gallery ">
          <p>The list of thread cards will go here</p>
          <p>
            Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero.
            Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.
          </p>
        </div>
      </div>
    );
  }
}

export default ThreadGallery;
