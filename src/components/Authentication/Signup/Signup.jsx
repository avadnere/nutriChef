import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'
import Styled from "./styled";
import {connect} from "react-redux";
import {signUp} from "../../../store/actions/index"

class Signup extends Component {
  state = {
    hasError: false,
    passwordMatch:true
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.id]:e.target.value 
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
  this.props.signup(this.state);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.AuthenticationForm>
        <Form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6 col-lg-6 col-md-6">
              <Form.Group>
                <Form.Control id="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
              </Form.Group>
            </div>
            <div className="col-sm-6 col-lg-6 col-md-6">
              <Form.Group>
                <Form.Control id="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}/>
              </Form.Group>
            </div>
          </div>
          <Form.Group >
            <Form.Control id="email" type="email" placeholder="Email" onChange={this.handleChange}/>
          </Form.Group>

          <div className="row">
            <div className="col-sm-6 col-lg-6 col-md-6">
              <Form.Group >
                <Form.Control id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
              </Form.Group>
            </div>
            <div className="col-sm-6 col-lg-6 col-md-6">
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Control onChange={this.handleChange} id="confirmPassword" type="password" placeholder="Confirm Password" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-lg-4 col-md-4">
              <Form.Group >
                <Form.Control id="age" type="number" placeholder="Age" min={10} max={100}  onChange={this.handleChange}/>
              </Form.Group>
            </div>
            <div className="col-sm-4 col-lg-4 col-md-4">
              <Form.Group >
                <Form.Control id="weight" type="number" placeholder="Weight (Kg)"  min={15} max={350}  onChange={this.handleChange}/>
              </Form.Group>
            </div>
            <div className="col-sm-4 col-lg-4 col-md-4">
              <Form.Group >
                <Form.Control id="height" type="number" placeholder="Height (cm)" min={50} max={250} onChange={this.handleChange}/>
              </Form.Group>
            </div>
          </div>


          <Styled.FormText>
            {/* {this.state.passwordMatch?null:"Password does not match !"} */}
          </Styled.FormText>
          <Button variant="primary" className="auth-btn" size="md" type="submit" block>
            Submit
          </Button>
        </Form>
        <Styled.ConfirmationText>By submitting. I accept Nutri-Chef's term of use</Styled.ConfirmationText>
      </Styled.AuthenticationForm>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   signup:(creds) => dispatch(signUp(creds))
  };
}
export default connect(null,mapDispatchToProps)(Signup)