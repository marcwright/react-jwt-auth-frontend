import React, { Component } from 'react';
import './ThreadCard.css';

class ThreadCard extends Component {
    state = {  }

  componentDidMount = () => {
    window.localStorage.setItem("threadID", this.props.movieData._id)
  }


    render() { 
        return ( 


            <div className="col sm12 m6 l4 xl2 zoom">
              <div className="card">
                <div className="card-image">
                  <a href='/Thread'><img src={this.props.movieData.thumbnailURL} alt="" /></a>
                </div>
                <div className="thread card-content">
                  <span className="card-title">{this.props.movieData.title}</span>
                  <p>
                      {this.props.movieData.prompt}
                  </p>
                </div>
              </div>
              </div>
  
     

         );
    }
}
 
export default ThreadCard;