import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    let navBarItems = [];
    if (this.props.isLoggedIn) {
<<<<<<< HEAD
      navBarItems.push(<NavItem key={7} href='/explore'>CLUBS</NavItem>)
      navBarItems.push(<NavItem key={2} href='/logout'>LOG OUT</NavItem>, <NavItem key={4} href="/profile"><i className="material-icons prefix">account_circle</i></NavItem>)
=======
      navBarItems.push(
        <NavItem key={2} href="/logout">
          LOG OUT
        </NavItem>
      );
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
      if (this.props.user != null) {
        navBarItems.push(
          <NavItem key={5} href="/profile">
            {this.props.user.email}
          </NavItem>
        );
      }
    } else {
<<<<<<< HEAD
      navBarItems.push(<NavItem key={3} href='/signup'>SIGN UP</NavItem>)
      navBarItems.push(<NavItem key={6} href='/login'>LOG IN</NavItem>)
      navBarItems.push(<NavItem key={7} href='/explore'>CLUBS</NavItem>)
=======

      navBarItems.push(
        <NavItem key={3} href="/signup">
          SIGN UP
        </NavItem>
      );
      navBarItems.push(
        <NavItem key={10} href="/login">
          LOG IN
        </NavItem>
      );
      navBarItems.push(
        <NavItem key={40} href="/explore">
          CLUBS
        </NavItem>
      );
      navBarItems.push(
        <NavItem key={42} href="/explore">
          MOVIES
        </NavItem>
      );

     

>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
    }
    return (
      <Navbar brand="FILM CLUB" className="nav logo" right>
        {navBarItems}
      </Navbar>
    );
  }
}

export default NavBar;

// } else {
//   navBarItems.push(<NavItem key={3} href='/signup'>SIGN UP</NavItem>)
//   navBarItems.push(<NavItem key={4} href='/login'>LOG IN</NavItem>)
//   navBarItems.push(<NavItem key={4} href='/login'>MOVIES</NavItem>)
//   navBarItems.push(<NavItem key={4} href="/explore">CLUBS</NavItem>)
// }
