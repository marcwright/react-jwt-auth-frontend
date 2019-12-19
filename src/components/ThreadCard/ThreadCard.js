import React, { Component } from 'react';
import './ThreadCard.css';

class ThreadCard extends Component {
    state = {  }




 

  setLocalStorage = () => {
    window.localStorage.setItem("threadID", this.props.movieData._id)
  }






    render() { 
        return ( 




                <div class="thread-wrap col s12 m7">
                <h2 class="header">Horizontal Card</h2>
                <div class="card horizontal">
                  <div class="card-image">
                  <a href='/Thread'onClick={(event) => {this.setLocalStorage(event)}}><img src={this.props.movieData.thumbnailURL} alt="" /></a>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                    <span className="card-title">{this.props.movieData.title}</span>
                      <p>{this.props.movieData.prompt}</p>
                    </div>
                    <div class="card-action">
                      <a href="/thread" onClick={(event) => {this.setLocalStorage(event)}}><i class="material-icons">arrow_forward</i></a>
                    </div>
                  </div>
                </div>
              </div>


           
     

         );
    }
}
 
export default ThreadCard;