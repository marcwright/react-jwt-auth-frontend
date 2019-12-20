import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import Question from "../Questions/Question";
//import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../NavBar/NavBar";
import SignUpForm from "../SignUpForm/SignUpForm";
import LogInForm from "../LogInForm/LogInForm";
import LogOut from "../LogOut/LogOut";
import Profile from "../Profile/Profile";
import "./App.css";
import Board from "../Questions/Board";
import LandingPage from "../LogInForm/LandingPage";
//import { homedir } from "os";
//const serverUrl = "http://opentdb.com/api.php?amount=10";
const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_APP_URL
    : "http://localhost:3000";

class App extends Component {
  state = {
    email: "",
    password: "",
    isLoggedIn: false,
    user: null,
    Question: "",
    Answers: ""
  };

  // componentDidMount() {
  //   if (localStorage.token) {
  //     this.setState({
  //       isLoggedIn: true
  //     });
  //   } else {
  //     this.setState({
  //       isLoggedIn: false
  //     });
  //   }
  // if (localStorage.token) {
  //   axios(
  //     {
  //       method: 'post',
  //       url: `${databaseUrl}/api/users`,
  //       headers: { Authorization: `Bearer ${localStorage.token}` }
  //     })
  //     .then(response => {
  //       this.setState({
  //         isLoggedIn: true,
  //         user: response.data.user
  //       })
  //       this.props.history.push('/profile')
  //     })
  //     .catch(err => console.log(err))
  // } else {
  //   this.setState({
  //     isLoggedIn: false
  //   })
  // }
  // }

  // handleLogOut = e => {
  //   e.preventDefault();
  //   window.localStorage.clear();
  //   this.setState({
  //     email: "",
  //     password: "",
  //     isLoggedIn: false
  //   });
  //   this.props.history.push("/login");
  // };

  // handleInput = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // handleSignUp = e => {
  //   e.preventDefault();
  //   let newUser = {
  //     email: this.state.email,
  //     password: this.state.password,
  //     question: this.state.question
  //   }; };

  getQuestions = () => {
    axios({
      url: databaseUrl,
      method: "get"
    }).then(response => {
      this.setState({
        Questions: response.data.Questions
      });
    });
  };

  getAnswers = () => {
    axios({
      url: databaseUrl,
      method: "get"
    }).then(response => {
      this.setState({
        owners: response.data.answers
      });
    });
  };

  render() {
    return (
      <div>
         <NavBar isLoggedIn={this.state.isLoggedIn} user={this.state.user} />  
        <div className="body">
          <Switch>
            <Route
              path="/signup"
              render={props => {
                return (
                  <LogInForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={props => {
                return (
                  <LogInForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
            <Route
              path="/profile"
              render={props => {
                return (
                  <Profile
                    isLoggedIn={this.state.isLoggedIn}
                    user={this.state.user}
                  />
                );
              }}
            />
            <Route
              path="/signup"
              render={props => {
                return (
                  <SignUpForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
                  />
                );
              }}
            />
             <Route
              path="/Board"
              render={props => {
                return (
                  <Board
                    isLoggedIn={this.state.isloggedin}
                    handleInput={this.state.Board}
                  />
                );
              }}
            />
            <Route
              path="/questions"
              render={props => {
                return (
                  <Question
                    isLoggedIn={this.state.isloggedin}
                    game={this.state.handleInput}
                  />
                );
              }}
            />
             <Route
              path="/logout"
              render={props => {
                return (
                  <LogOut
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={e => this.handleLogOut(e)}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
