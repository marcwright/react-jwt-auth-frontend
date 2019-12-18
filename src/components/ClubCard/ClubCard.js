import React, { Component } from "react";
import "./ClubCard.css";
import "materialize-css/dist/css/materialize.min.css";

class ClubCard extends Component {
  state = {};
  render() {
    console.log(this.props.club)
    return (
      
        

  
            <div className="col m6 l2">
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img class="activator" src={this.props.club.currentMovieURL} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{this.props.club.title}<i class="material-icons right">more_vert</i></span>
                  <p><a href="#">This is a link</a></p>
                  </div>
                  <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{this.props.club.title}<i class="material-icons right">close</i></span>
              <p className='current-topic'>
                    {this.props.club.currentTopic}
                  </p>
                  <p className='club-description'>{this.props.club.description}</p>
                  <div className="card-action">
                <a className="link" href="/ThreadGallery" alt="test">
                    <i className="material-icons right">arrow_forward</i>
                  </a>
                  <a className="link" href="https://google.com" alt="test">
                    <i className="material-icons right">add_circle</i>
                  </a>
                </div>
              </div>
            </div>
            </div>

                  
                
                
             


            
           
          
        
      
    );
  }
}

export default ClubCard;
