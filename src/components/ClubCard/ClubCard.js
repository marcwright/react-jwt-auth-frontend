import React, { Component } from "react";
import image from "./curry.jpg";
import "./ClubCard.css";
import 'materialize-css/dist/css/materialize.min.css'

class ClubCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Mango Chickpea Curry</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean quis aliquam orci. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                  </p>
                </div>
                <div className='card-action'>
                    <a className='link' href='https://google.com' alt='test'><i className='material-icons'>cloud</i></a>
                </div>
              </div>
              
            </div>
            <div className="col s12 l6">
              <div className="card">
                <div className="card-image">
                  <img src={image} alt="" />
                </div>
                <div className="card-content">
                  <span className="card-title">Rainbow Pasta Salad</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean quis aliquam orci. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                  </p>
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
