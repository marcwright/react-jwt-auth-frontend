import React, { Component } from 'react'
import { Button } from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import { Container, Row, Col } from "react-bootstrap";
import LogInForm from '../LogInForm/LogInForm'
import axios from 'axios'

const databaseUrl = 
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_APP_URL
    : "http://localhost:3000";

 
class Board extends Component {
		state = {
			Row: "",
			col: "",
			newGame: ""
		}
		getNewGame= e => {
			e.preventDefault();
			let id = this.state.getNewGame.id;
			let intId = Number(id);
			console.log(intId)
			axios({
			  url: `${databaseUrl}/newGame/${intId}`,
			  method: "get",
			  data: { getNewGame: this.state.getNewGame }
			}).then(response => {
			  
			  this.setState(prevState => ({
				newGame: [...prevState.game, response.data.game]
			  }));
			});
		  };


      
 render() {
	return(
   
   
<div>
<Container> 
	<Row>
		<Col>Social Media</Col>
		<Col>Computer Science</Col>
		<Col>Music</Col>
		<Col>Games</Col>
		<Col>Sports</Col>
		<Col>Brands</Col>
	</Row>
	<Row>
		<Col>$200</Col>
		<Col>$200</Col>
		<Col>$200</Col>
		<Col>$200</Col>
		<Col>$200</Col>
		<Col>$200</Col>
	</Row>
	<Row>
		<Col>$400</Col>
		<Col>$400</Col>
		<Col>$400</Col>
		<Col>$400</Col>
		<Col>$400</Col>
		<Col>$400</Col>
	</Row>
	<Row>
		<Col>$600</Col>
		<Col>$600</Col>
		<Col>$600</Col>
		<Col>$600</Col>
		<Col>$600</Col>
		<Col>$600</Col>
	</Row>
	<Row>
		<Col>$800</Col>
		<Col>$800</Col>
		<Col>$800</Col>
		<Col>$800</Col>
		<Col>$800</Col>
		<Col>$800</Col>
	</Row>
	<Row>
		<Col>$1000</Col>
		<Col>$1000</Col>
		<Col>$1000</Col>
		<Col>$1000</Col>
		<Col>$1000</Col>
		<Col>$1000</Col>
	</Row>
	 </Container> 

	</div>
 )}
 
}

export default Board