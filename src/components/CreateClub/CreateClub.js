import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "./CreateClub.css";
class CreateClub extends Component {
  state = {
    title: "",
    currentTopic: "",
    currentMovieURL: "",
    searchTerm: "",
    searchResults: []
  };
  apiKey = "dbea230ad54bcb5ce323189b53264a7f";
  movieDatabase = "https://api.themoviedb.org/3/";
  // handleMovieSearchInput = event => {
  //   event.preventDefault();
  //   this.setState({ searchTerm: event.target.value });
  //   console.log(this.state);
  // };
  // searchMovie = event => {
  //   if (this.state.searchResults !== "") {
  //     event.preventDefault();
  //     this.setState({ searchTerm: event.target.value });
  //     axios({
  //       method: "get",
  //       url: `https://api.themoviedb.org/3/search/multi?api_key=dbea230ad54bcb5ce323189b53264a7f&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=true`
  //     }).then(response => {
  //       this.setState({ searchResults: response.data });
  //       console.log(this.state.searchResults);
  //       console.log(
  //         `https://image.tmdb.org/t/p/w1280${this.state.searchResults.results[0].backdrop_path}`
  //       );
  //       // this.movieOptionTags();
  //     });
  //   }
  // };
  handleCreateClub = event => {
    event.preventDefault();
    const newClub = {
      title: this.state.title,
      description: this.state.description,
      currentTopic: this.state.currentTopic,
      currentMovieURL: this.state.currentMovieURL
    };
    const userID = window.localStorage.userID;
    axios({
      method: "post",
      url: `${this.props.databaseUrl}/api/users/${userID}/clubs`,
      data: newClub
    }).then(response => {
      console.log(response);
    });
    console.log("Club Created!");
  };
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // movieOptionTags = () => {
  //   const optionTags = this.state.searchResults.results.map(movie => {
  //     <option key={movie.id.original_name} value={movie.id}>
  //       {movie.original_name}
  //     </option>;
  //   });
  //   return optionTags;
  // };
  // optionTags = this.state.searchResults.results.map(movie => {
  //   <option key={movie.id.original_name} value={movie.id}>
  //     {movie.original_name}
  //   </option>;
  // });
  render() {
    return (
      <div className="create-club-wrap">
        {/* INTRODCTION TO SIGN UP */}
        <section className="section container scrollspy" id="contact">
            {/* title: { type: String, required: true },
  description: { type: String },
  currentTopic: { type: String },
  currentMovieURL: { type: String }, */}
            {/* SIGN UP FORM */}
            <div className="col s12 l5 offset-l2 form-wrap">
              <form id='create-club-form'>
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
                    // onChange={event => this.searchMovie(event)}
                  />
                  <label className="label" htmlFor="current-movie">
                    STARTING MOVIE:
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
            </div>
          
        </section>
      </div>
    );
  }
}
export default CreateClub;