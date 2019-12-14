import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import Questions from "../Questions/Questions";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../NavBar/NavBar";
import SignUpForm from "../SignUpForm/SignUpForm";
import LogInForm from "../LogInForm/LogInForm";
import LogOut from "../LogOut/LogOut";
import Profile from "../Profile/Profile";
import "./App.css";
import Container from "../Questions/Container";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
const serverUrl = "http://opentdb.com/api.php?amount=10";
const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BACKEND_APP_URL
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
    };
    axios({
      method: "post",
      url: `${databaseUrl}/api/users/signup`,
      data: newUser
    })
      .then(response => {
        console.log(response);
        const location = {
          pathname: "/login",
          state: { fromDashboard: true }
        };
        this.props.history.replace(location);
      })
      .catch(err => console.log(err));
  };

  handleLogIn = e => {
    e.preventDefault();
    let loginUser = {
      email: this.state.email,
      password: this.state.password
    };
    axios({
      method: "post",
      url: `${databaseUrl}/api/users/login`,
      data: loginUser
    })
      .then(response => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          email: "",
          password: ""
        });
        const location = {
          pathname: "/profile",
          state: { fromDashboard: true }
        };
        this.props.history.replace(location);
      })
      .catch(err => console.log(err));
  };

  // handleChange = e => {
  //   let inputField =
  //     // console.log(e.target.)
  //     this.setState({ [e.target.name]: e.target.value })

  getQuestions = () => {
    axios({
      url: serverUrl,
      method: "get"
    }).then(response => {
      this.setState({
        Questions: response.data.Questions
      });
    });
  };

  getAnswers = () => {
    axios({
      url: serverUrl,
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
                  <SignUpForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
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
              path="/questions"
              render={props => {
                return (
                  <Container
                    isLoggedIn={this.state.isloggedin}
                    handleInput={this.state.handleInput}
                  />
                );
              }}
            />

            <Route
              path="/questions"
              render={props => {
                return (
                  <Questions
                    isLoggedIn={this.state.isloggedin}
                    handleInput={this.state.handleInput}
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
