import React, { Component } from "react";
import axios from "axios";
import ClubCard from "../ClubCard/ClubCard";

class Explore extends Component {
  state = {
    clubs: []
  };

  //  componentDidMount() {
  //      this.getClubs();
  //  }

  // getClubs = (e) => {
  //     e.preventDefault()
  //     axios(
  //         {
  //           method: 'get',
  //           url: `${this.props.databaseUrl}/api/clubs`,
  //         })
  //         .then(response => {
  //           console.log(response)
  //           this.setState({
  //               clubs: response.data.clubs
  //           });
  //         })
  //         .catch(err => console.log(err))
  //   }

  render() {
    return (
      <div className="club-wrap">
        <h3>Clubs</h3>

        <ClubCard />
      </div>
    );
  }
}

export default Explore;
