import React, { Component } from "react";
import image from "./curry.jpg";
import "./ClubCard.css";
import "materialize-css/dist/css/materialize.min.css";

class ClubCard extends Component {
  state = {};
  render() {
    return (
      <div class="club-wrap">
        <h3>FILM CLUBS</h3>

        <div className='btn-wrapper'>
          <a href="/CreateClub" className="btn create-club-button">
            Create Club
          </a>
        </div>

        <div className="container">
          <div className="row">
            <div className="col s12 l4">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Repo Man</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="card-action">
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons">cloud</i>
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
                    <i className="material-icons">cloud</i>
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
                    <i className="material-icons">cloud</i>
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
                    <i className="material-icons">cloud</i>
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
                    <i className="material-icons">cloud</i>
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

export default ClubCard;
