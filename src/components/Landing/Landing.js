import React, { Component } from 'react'
import './Landing.css'



class Landing extends Component {

  render() {
    return (
        <div>
            <header className="header">
                
            </header>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Cinema</span>
                    <span className="heading-primary--sub">ReelTalk is a place for movie lovers to form groups based on their common interests and discuss all topics related to film and televison.</span>
                </h1>
                <div classNameName='btn-wrap'>
                <a href="/signup" className="button button--white button--animated">Try</a>
                <a href="/explore" className="button btn2 button--white button--animated">Explore</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Landing