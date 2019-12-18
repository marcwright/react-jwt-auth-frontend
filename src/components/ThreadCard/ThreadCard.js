import React, { Component } from 'react';
import './ThreadCard.css';

class ThreadCard extends Component {
    state = {  }
    render() { 
        return ( 

          
            <div className="col sm12 m6 l4 xl2 zoom">
              <div className="card">
                <div className="card-image">
                  <a href='/Thread'><img src={'https://image.tmdb.org/t/p/w1280/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg'} alt="" /></a>
                </div>
                <div className="thread card-content">
                  <span className="card-title">Thread Title</span>
                  <p>
                      This should contain the a few lines of the thread prompt
                  </p>
                </div>
              </div>
              </div>
  
     

         );
    }
}
 
export default ThreadCard;