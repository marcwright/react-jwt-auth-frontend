import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LogInForm.css";
import LandingPage from "../LogInForm/LandingPage";

const databaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_BACKEND_APP_URL
    : "http://localhost:3000";

class LogInForm extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
             <Col>
             <h2>Sign Up</h2>
              
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' onChange={this.props.handleInput} />
              </div>

              <div>
                <label htmlFor='password'>Password</label>
                <input type='text' name='password' onChange={this.props.handleInput} />
              </div>
              <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
            </form>
                 {/* <input
                  value="New Game"
                  type="New Game"
                  onClick={e => this.handleInput(e)}
                />
                <input
                  value="History"
                  type="History"
                  onClick={e => this.handleInput(e)}
                /> */}
            </Col>
            <Col>
              <form>
                <h2>Log In</h2>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    onChange={this.props.handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    onChange={this.props.handleInput}
                  />
                </div>

                <input value='Submit' type='submit' onClick={this.props.handleLogIn} />
              </form>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LogInForm;
