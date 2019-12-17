import React, { Component } from 'react'
import axios from 'axios'
const serverUrl = "http://opentdb.com/api.php?amount=10";

class Questions extends Component {
  constructor(props) {
      super()
      this.state = {
          Url: [],
          question: [],
          questionArray: []


      }
  }
  componentDidMount() {
      this.callAxios()
  }
  callAxios() {
      axios({
          url: serverUrl,
          method: 'get'
      })
          .then(response => {
              this.setState({
                  Url: response.data.questions

              })
              let questionArray = this.state.serverUrl.map((question, index) => {
                  return question
              })
              console.log('questionsArray')
              console.log(response.data.questions)
              let randomGen = Math.floor(Math.random() * questionArray.length)
              this.setState({
                  question: questionArray[randomGen]
              })
              console.log(randomGen)
          })
  }



  render() {
      return (

          <div>
              <h1>Jeopardy</h1>

          </div >
      )
  }
}
export default Questions