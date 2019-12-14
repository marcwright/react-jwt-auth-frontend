import React, { Component } from 'react'
import { Button } from 'react-bootstrap/Button';
import Container from 'react-materialize/lib/Container';



class Container extends Component {

      render() { 
return (
   <div class="Container">
       </div>

	<div class = "Row">
		<Col>Social Media</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>
	<div class = "Row">
		<Col>Computer Science</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>
	<div class = "Row">
		<Col>Music</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>
	<div class = "Row">
		<Col>Games</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>
	<div class = "Row">
		<Col>Sports</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>
	<div class = "Row">
		<Col>Brands</Col>
		<Col>$200</Col>
		<Col>$400</Col>
		<Col>$600</Col>
		<Col>$800</Col>
		<Col>$1000</Col>
	</div>

    <Button id="newGameButton">New Game</Button>
)
         

   }

}

export default Container