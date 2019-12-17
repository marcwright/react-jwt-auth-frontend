import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const apiKey = "dbea230ad54bcb5ce323189b53264a7f";
  const movieDatabase = "https://api.themoviedb.org/3/";

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({ data: [] });

  const handleInput = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const searchMovie = event => {
    event.preventDefault();
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/multi?api_key=dbea230ad54bcb5ce323189b53264a7f&language=en-US&query=${searchTerm}&page=1&include_adult=true`
    }).then(response => {
      console.log(response);
      setSearchResults(searchResults.data);
      console.log(searchResults);
      console.log(
        `https://image.tmdb.org/t/p/w1280${searchResults.results[0].backdrop_path}`
      );
    });
  };

  return (
    <div>
      {searchResults ? (
        <div>
          <form onSubmit={searchMovie}>
            <label>
              Search:
              <input
                placeholder="Enter a movie or TV Show"
                type="text"
                value={searchTerm}
                onChange={handleInput}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <img
            src={`https://image.tmdb.org/t/p/w1280${searchResults.results[0].backdrop_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/w780${searchResults.results[0].poster_path}`}
          />{" "}
        </div>
      ) : (
        <form onSubmit={searchMovie}>
          <label>
            Search:
            <input
              placeholder="Enter a movie or TV Show"
              type="text"
              value={searchTerm}
              onChange={handleInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
};

export default MovieSearch;
