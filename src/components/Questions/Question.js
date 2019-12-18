import React, { Component } from "react";
import axios from "axios";
const serverUrl = "http://opentdb.com/api.php?amount=10";

class Question extends Component {
  constructor(props) {
    super();
    this.state = {
      Url: [],
      question: ""
    };
  }
  componentDidMount() {
    this.callAxios();
  }
  callAxios() {
    axios({
      url: serverUrl,
      method: "get"
    }).then(response => {
      this.setState({
        Url: response.data.question
      });
      let questionArray = this.state.serverUrl((question, index) => {
        return question;
      });
      console.log("question");
      // console.log(response.data.question);
      // let randomGen = Math.floor(Math.random() * questionArray.length);
      this.setState({
        // question: question
      });
      console.log('question');
    });
  }

  render() {
    return (
      <div>
        <h1>Personal Jeopardy</h1>
      </div>
    );
  }
}
export default Question;
