import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
import axios from "axios";
import "./CreateClub.css";
class CreateClub extends Component {
  state = {
    title: "",
    currentTopic: "",
    currentMovieURL: "",
    searchTerm: "",
<<<<<<< HEAD
    searchResults: null,
    selectedMovie: null
  };
  apiKey = "dbea230ad54bcb5ce323189b53264a7f";
  movieDatabase = "https://api.themoviedb.org/3/";
  handleMovieSearchInput = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
    console.log(this.state);
  };
=======
    searchResults: []
  };

  apiKey = "dbea230ad54bcb5ce323189b53264a7f";
  movieDatabase = "https://api.themoviedb.org/3/";

  // handleMovieSearchInput = event => {
  //   event.preventDefault();
  //   this.setState({ searchTerm: event.target.value });
  //   console.log(this.state);
  // };

>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
  searchMovie = event => {
    if (this.state.searchResults !== "") {
      event.preventDefault();
      this.setState({ searchTerm: event.target.value });
<<<<<<< HEAD
=======

>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/multi?api_key=dbea230ad54bcb5ce323189b53264a7f&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=true`
      }).then(response => {
        this.setState({ searchResults: response.data });
        console.log(this.state.searchResults);
        console.log(
          `https://image.tmdb.org/t/p/w1280${this.state.searchResults.results[0].backdrop_path}`
        );
<<<<<<< HEAD
      });
    }
  };
  handleCreateClub = event => {
    event.preventDefault();
    const newClub = {
      title: this.state.selectedMovie.title,
      description: this.state.description,
      currentTopic: this.state.currentTopic,
      backdropURL: `https://image.tmdb.org/t/p/w1280${this.state.selectedMovie.backdrop_path}`,
      thumbnailURL: `https://image.tmdb.org/t/p/w1280${this.state.selectedMovie.poster_path}`
=======
        // this.movieOptionTags();
      });
    }
  };

  handleCreateClub = event => {
    event.preventDefault();
    const newClub = {
      title: this.state.title,
      description: this.state.description,
      currentTopic: this.state.currentTopic,
      currentMovieURL: this.state.currentMovieURL
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
    };
    const userID = window.localStorage.userID;
    axios({
      method: "post",
      url: `${this.props.databaseUrl}/api/users/${userID}/clubs`,
      data: newClub
    }).then(response => {
      console.log(response);
    });
<<<<<<< HEAD
    console.log("Club Created!");
  };
=======

    console.log("Club Created!");
  };

>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
<<<<<<< HEAD
  setSelectedMovie = (event, selectedMovie) => {
    this.setState({ selectedMovie: selectedMovie });
    console.log(this.state.selectedMovie);
  };
  render() {
    return (
      <div className="create-club-wrap">
=======

  movieOptionTags = () => {
    const optionTags = this.state.searchResults.results.map(movie => {
      <option key={movie.id.original_name} value={movie.id}>
        {movie.original_name}
      </option>;
    });
    return optionTags;
  };

  // optionTags = this.state.searchResults.results.map(movie => {
  //   <option key={movie.id.original_name} value={movie.id}>
  //     {movie.original_name}
  //   </option>;
  // });

  render() {
    return (
      <div className="signup-wrap">
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
        {/* INTRODCTION TO SIGN UP */}
        <section className="section container scrollspy" id="contact">
          {/* title: { type: String, required: true },
  description: { type: String },
  currentTopic: { type: String },
  currentMovieURL: { type: String }, */}
<<<<<<< HEAD
          {/* SIGN UP FORM */}
          <div className="col s12 l5 offset-l2 form-wrap">
            <form id="create-club-form">
              <h2 className="indigo-text text-darken-4 signhead">
                Create your own film club...
              </h2>
              <div className="club input-field">
                <i className="material-icons prefix">group</i>
                <input
                  name="title"
                  type="text"
                  id="title"
                  onChange={event => this.handleInput(event)}
                />
                <label className="label" htmlFor="title">
                  CLUB TITLE:
                </label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">movie</i>
                <input
                  value={this.state.searchTerm}
                  name="currentTopic"
                  type="text"
                  id="current-movie"
                  onChange={event => this.searchMovie(event)}
                />
                <label className="label" htmlFor="current-movie">
                  STARTING MOVIE:
                </label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">edit</i>
                <textarea
                  onChange={event => this.handleInput(event)}
                  name="description"
                  id="description"
                  className="materialize-textarea input-field"
                  cols="20"
                  rows="20"
                ></textarea>
                <label className="label" htmlFor="description">
                  TOPIC:
                </label>
              </div>
              {/* SUBMIT BUTTON */}
              <div className="create-club-btn">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                  onClick={event => this.handleCreateClub(event)}
                >
                  Create
                </button>
              </div>
            </form>
=======

            {/* SIGN UP FORM */}
            <div className="col s12 l5 offset-l2 form-wrap">
              <form>
                <div className="input-field">
                  <i className="material-icons prefix">group</i>
                  <input
                    name="title"
                    type="text"
                    id="title"
                    onChange={event => this.handleInput(event)}
                  />
                  <label className="label" htmlFor="title">
                    Create a club title
                  </label>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">movie</i>
                  <input
                    value={this.state.searchTerm}
                    name="currentTopic"
                    type="text"
                    id="current-movie"
                    onChange={event => this.searchMovie(event)}
                  />

                  <label className="label" htmlFor="current-movie">
                    Choose a starting movie
                  </label>
                  {this.state.searchResults.results ? (
                    <select name="doctorId">{this.movieOptionTags()}</select>
                  ) : null}
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">edit</i>
                  <textarea
                    onChange={event => this.handleInput(event)}
                    name="description"
                    id="description"
                    className="materialize-textarea input-field"
                    cols="20"
                    rows="20"
                  ></textarea>
                  <label className="label" htmlFor="description">
                    Choose a topic for your club (this can be changed later).
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="btn-wrap">
                  <button
                    className="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={event => this.handleCreateClub(event)}
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
          </div>
        </section>
        <div>
          {this.state.searchResults
            ? this.state.searchResults.results.map(result => {
                return (
                  <div>
                    {result.title}{" "}
                    <button
                      onClick={event => this.setSelectedMovie(event, result)}
                    >
                      Select
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD
export default CreateClub;
=======

export default CreateClub;
>>>>>>> c3fea99fcf9be2ef365bf006f4e8ae477f271aa6
