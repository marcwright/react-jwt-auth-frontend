import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    let navBarItems = [
      <NavItem key={1} href="/">
        Home
      </NavItem>
    ];
    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem key={2} href="/logout">
          Log Out
        </NavItem>
      );
    } else {
      navBarItems.push(
        <NavItem key={3} href="/signup">
          Sign Up
        </NavItem>
      );
      navBarItems.push(
        <NavItem key={4} href="/login">
          Log In
        </NavItem>
      );
    }
    return (
      <Navbar brand="Lets Play Jeopardy" className="text-center">
        {navBarItems}
      </Navbar>
    );
  }

  newMethod(navBarItems) {
    if (this.props.isLoggedIn) {
      navBarItems.push(
        <NavItem key={6} href="/letsPlay">
          Choose
        </NavItem>
      );
    }
  }
}
export default NavBar;
