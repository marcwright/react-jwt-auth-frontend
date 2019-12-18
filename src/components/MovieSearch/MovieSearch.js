import React from "react";
import axios from "axios";

class MovieSearch extends React.Component {
  state = {
    searchTerm: "",
    searchResults: null
  };

  apiKey = "dbea230ad54bcb5ce323189b53264a7f";
  movieDatabase = "https://api.themoviedb.org/3/";

  handleInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  searchMovie = event => {
    event.preventDefault();
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=dbea230ad54bcb5ce323189b53264a7f&language=en-US&query=${this.state.searchTerm}&page=1&include_adult=true`
    }).then(response => {
      console.log(response);
      this.setState({ searchResults: response.data });
      console.log(this.state.searchResults);
      console.log(
        `https://image.tmdb.org/t/p/w1280${this.state.searchResults.results[0].backdrop_path}`
      );
    });
  };
  render() {
    return (
      <div>
        {this.state.searchResults ? (
          <div>
            <form onSubmit={this.searchMovie}>
              <label>
                Search:
                <input
                  placeholder="Enter a movie or TV Show"
                  type="text"
                  value={this.state.searchTerm}
                  onChange={() => this.handleInput}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
            <img
              src={`https://image.tmdb.org/t/p/w1280${this.state.searchResults.results[0].backdrop_path}`}
            />
            <img
              src={`https://image.tmdb.org/t/p/w780${this.state.searchResults.results[0].poster_path}`}
            />{" "}
          </div>
        ) : (
          <form onSubmit={this.searchMovie}>
            <label>
              Search:
              <input
                placeholder="Enter a movie or TV Show"
                type="text"
                value={this.state.searchTerm}
                onChange={this.handleInput}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }
}

export default MovieSearch;
