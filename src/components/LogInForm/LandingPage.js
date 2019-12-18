import React, { Component } from "react";




class LandingPage extends Component {
    state = {
      email: "",
      password: "",
      isLoggedIn: false,
      user: null
    };
    componentDidMount() {
        if (localStorage.token) {
          this.setState({
            isLoggedIn: true
          });
        } else {
          this.setState({
            isLoggedIn: false
          });
        }
    }

    handleLogOut = e => {
        e.preventDefault();
        window.localStorage.clear();
        this.setState({
          email: "",
          password: "",
          isLoggedIn: false
        });
        this.props.history.push("/login");
      };
    
      handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleSignUp = e => {
        e.preventDefault();
        let newUser = {
          email: this.state.email,
          password: this.state.password,
          // question: this.state.question
        }; };

}
export default LandingPage