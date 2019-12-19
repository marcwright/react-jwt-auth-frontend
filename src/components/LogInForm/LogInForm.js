import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LogInForm.css";


class LogInForm extends Component {
  render() {
    return (
      <div>
        <h1>Personal Jeopardy</h1>
        <Container>
          <Row>
            <Col>
              <h2>Sign Up</h2>
              <form>
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
                <input
                  value="Submit"
                  type="Submit"
                  onClick={this.props.handleLogIn}
                />
                 {/* <input value='Continue Play' type='ContinuePlay' onClick={this.props.handleLogIn} />
          <input value='History' type='History' onClick={this.props.handleLogIn} /> */}
              </form>
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
                <input
                  value="Submit"
                  type="Submit"
                  onClick={this.props.handleLogIn}
                />
                </form>
              <form>
                 {/* <input value='Log Out' type='submit' onClick={this.props.handleLogOut} /> */}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LogInForm;
