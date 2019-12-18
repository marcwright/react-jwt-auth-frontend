import React, { Component } from 'react'
import './Profile.css'

class Profile extends Component {
  render() {
    console.log(this.props)
    if (this.props.user != null) {
      return (
        <div>
          <h4>{this.props.user.firstName} Is Logged In</h4>
            <div>
               <h2>Log Out</h2>

                <form>
                  <input value='Log Out' type='submit' onClick={this.props.handleLogOut} />
                </form>
              </div>
        </div>
      )
    } else {
      return (
        <div>
          <h4>You are not logged in Dude!</h4>
        </div>
      )
    }
  }

}

export default Profile
