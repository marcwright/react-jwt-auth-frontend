import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  render() {
    if (this.props.user != null) {
      return (
        <div>
          <h4>{this.props.user.email}</h4>
          <h4>Is Logged In</h4>
        </div>
      )
    } else {
      return (
        <div>
          <h4>Profile Page</h4>
        </div>
      )
    }
  }

}

export default Profile
