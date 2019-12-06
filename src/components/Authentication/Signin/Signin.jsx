

import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap'
import Styled from "./styled";
import {connect} from "react-redux";
import {signIn} from "../../../store/actions/authAction"

class Signin extends Component {
  state = {
    hasError: false,
    email:'',
    password:'',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)

  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.SigninForm className="jumbotron">
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Group >
            <Form.Control id="email" type="email" placeholder="Enter email" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group >
            <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>
          <Button variant="primary" className="auth-btn" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
        <Styled.FormNote>Forget your Password?</Styled.FormNote>
      </Styled.SigninForm>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
   signIn:(creds) => dispatch(signIn(creds))
  };
}
export default connect(null,mapDispatchToProps)(Signin)