import React, { Component } from 'react'

const serverUrl = "http://opentdb.com/api.php?amount=10";
// class Questions extends Component {
//   render () {
//     return (
//       <div>
//         <h2>Questions</h2>
//         </div>
//     )}


// }
// export default Questions

class Questions extends Component {
  constructor(props) {
      super()
      this.state = {
          Url: [],
          question: []


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
              let questionArray = this.state.Url.map((question, index) => {
                  return question
              })
              console.log(questionsArray)
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
               <button onClick={() => this.callAxios()}>Let's Play</button>

          </div >
      )
  }
}
export default Questions