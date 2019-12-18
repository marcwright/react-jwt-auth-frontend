import React, { Component } from "react";
import "./ThreadGallery.css";
import image from "./rambo.jpg";

class ThreadGallery extends Component {
  state = { selectedClub: "" };
  render() {
    console.log(this.props);
    console.log(this.state.selectedClub);
    return (
      <div class="club-wrap">
        <h3>Thread Gallery</h3>

        <div className="container">
          <div className="row">
            <div className="col s12 l4">
              <div className="card">
                <form>
                  <div className="input-field">
                    <i className="material-icons prefix">account_circle</i>
                    <input type="text" id="title" />
                    <label className="label" for="title">
                      Title:
                    </label>
                  </div>

                  <div className="input-field">
                    <i className="material-icons prefix">star</i>
                    <textarea
                      id="prompt"
                      className="materialize-textarea"
                      cols="20"
                      rows="20"
                    ></textarea>
                    <label className="label" for="prompt">
                      Prompt
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="btn-wrap">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                      name="action"
                    >
                      Submit
                    </button>
                    <p className="login-message">
                      Already a member? <a href="/login">Login</a>
                    </p>
                  </div>
                </form>
                <div className="card-action">
                  <a className="link" href="/ThreadGallery" alt="test">
                    <i className="material-icons right">add</i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Taxi Driver</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="card-action">
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Blade Runner</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="card-action">
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Before Sunrise</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="card-action">
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">My Dinner with Andre</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="card-action">
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreadGallery;
