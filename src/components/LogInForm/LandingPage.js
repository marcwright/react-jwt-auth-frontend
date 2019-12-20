import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//import { Container, Row, Col } from "react-bootstrap";
//import "./LogInForm.css";
import LogInForm from '../LogInForm/LogInForm'
import axios from 'axios'

const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_APP_URL
    : "http://localhost:3000";



class LandingPage extends Component {
    state = {
      email: "",
      password: "",
      isLoggedIn: false,
      user: null
    }
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
    if (localStorage.token) {
      axios(
        {
          method: 'post',
          url: `${databaseUrl}/api/users`,
          headers: { Authorization: `Bearer ${localStorage.token}` }
        })
        .then(response => {
          this.setState({
            isLoggedIn: true,
            user: response.data.user
          })
          this.props.history.push('/profile')
        })
        .catch(err => console.log(err))
    } else {
      this.setState({
        isLoggedIn: false
      })
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
        question: this.state.question
      }; };
  render() {
    return(
      <div>
        <h2>Let's Play</h2>
      </div>
    )
  }
    
    
}


export default LandingPage