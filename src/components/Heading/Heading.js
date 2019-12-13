import React, { Component } from 'react'
import './Heading.css'



class Heading extends Component {

  render() {
    return (
        <div>
            <header class="header">
                
            </header>

            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Film</span>
                    <span class="heading-primary--sub">ReelTalk is a place for movie lovers to form groups based on their common interests and discuss all topics related to film and televison.</span>
                </h1>
                <div className='btn-wrap'>
                <a href="#" class="button button--white button--animated">Try</a>
                <a href="#" class="button button--white button--animated">Explore</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Heading