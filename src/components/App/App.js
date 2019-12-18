import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import "materialize-css/dist/css/materialize.min.css";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";
import SignUpForm from "../SignUpForm/SignUpForm";
import LogInForm from "../LogInForm/LogInForm";
import LogOut from "../LogOut/LogOut";
import Profile from "../Profile/Profile";
import Explore from "../ExploreClubs/Explore";
import CreateClub from "../CreateClub/CreateClub";
import Thread from "../Thread/Thread";
import "./App.css";
import ThreadGallery from "../ThreadGallery/ThreadGallery";
import MovieSearch from "../MovieSearch/MovieSearch";

const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.BACKEND_APP_URL
    : "http://localhost:3000";

class App extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    isLoggedIn: false,
    user: null,
    selectedClub: ""
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
  // function to lift up state
  passProps = selectedClub => {
    this.setState({
      selectedClub: selectedClub
    });
  };

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
    console.log(this.state);
  };

  handleSignUp = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
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
      username: this.state.username,
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
        window.localStorage.setItem("userID", response.data.user._id);
        this.setState({
          isLoggedIn: true,
          user: response.data.user,
          username: "",
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

  render() {
    console.log(this.state.selectedClub);
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
            {/* <Route
              path="/MovieSearch"
              render={props => {
                return <MovieSearch isLoggedIn={this.state.isLoggedIn} />;
              }}
            /> */}
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
            <Route exact path="/" component={Landing} />
            // has data that needs to be passed
            <Route
              path="/explore"
              component={() => (
                <Explore passProps={this.passProps} databaseUrl={databaseUrl} />
              )}
            />
            <Route
              path="/CreateClub"
              component={() => (
                <CreateClub
                  searchTerm={this.state.searchTerm}
                  databaseUrl={databaseUrl}
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  user={this.state.user}
                  handleMovieSearchInput={this.handleMovieSearchInput}
                  searchMovie={this.searchMovie}
                />
              )}
            />
            <Route
              path="/Thread"
              component={() => <Thread databaseUrl={databaseUrl} />}
            />
            // needs to be passed the selected Club
            <Route
              path="/ThreadGallery"
              component={() => (
                <ThreadGallery
                  databaseUrl={databaseUrl}
                  selectedClub={this.state.selectedClub}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
