import React, { Component } from "react";
import axios from "axios";
import LogInForm from "../LogInForm/LogInForm";
import "bootstrap/dist/css/bootstrap.min.css";

// const serverUrl = "http://opentdb.com/api.php?amount=10";
const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_APP_URL
    : "http://localhost:3000/api/questions/new";

    

class Question extends Component {
  constructor(props) {
    super();
    this.state = {
      Url: [],
      questions: "",
      answers: ""
    };
  }
  componentDidMount() {
    this.callAxios();
  }

  handleInput = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  callAxios() {
    axios({
      url: databaseUrl,
      method: "post"
    }).then(response => {
      this.setState({
        databaseUrl: response.question
      })
      
      })
      // handleChange = e => {
      // }
      // getQuestions = () => {
      //   axios({
      //     url: databaseUrl,
      //     method: "get"
      //   }).then(response => {
      //     this.setState({
      //       Questions: response.data.Questions
      //     });
      //   });
      // };
    
      // getAnswers = () => {
      //   axios({
      //     url: databaseUrl,
      //     method: "get"
      //   }).then(response => {
      //     this.setState({
      //       owners: response.data.answers
      //     });
      //   });
      // };

  
    return (
      <div>
        <h1>Personal Jeopardy</h1>
        <h2>{this.props.board}</h2>
      </div>
      
    );
  
 }
}
export default Question;
