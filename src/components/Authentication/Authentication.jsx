
import React, { Component } from 'react';
import Styled from "./styled";
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import SignIn from "./Signin"
import SignUp from "./Signup"
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index"

class Authentication extends Component {
  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const {authError} = this.props;
    return (
      <Styled.AuthenticationModal>
        <Modal dialogClassName="custom-modal" show={this.props.authModalShow} onHide={this.props.authModalToggle} animation={true}>
          <Styled.ModalHeader closeButton >
            <Modal.Title className="title"><Styled.Logo>Nutri-Chef</Styled.Logo></Modal.Title>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Tabs className="authenticationTabs" variant="pills">
              <Tab className="signIn-Tab" eventKey="signIn" title="Sign In">
                
                <Styled.authError>
                    {authError?<p>{authError}</p>:null}
                </Styled.authError>
                <SignIn />
              </Tab>
              <Tab eventKey="signUp" title="New Account">
              <Styled.authError>
                    {authError?<p>{authError}</p>:null}
                </Styled.authError>
                <SignUp />
              </Tab>
            </Tabs>
          </Styled.ModalBody>
          <Modal.Footer>
            <Styled.Footer>
            Copyright 2019 Nutri-Chef. All Rights Reserved.
                {/* <p>Connect with using: </p>
                <FacebookLoginButton align="center" iconSize="15px" size="35px" >
                  <span className="social-media-btn">Continue with Facebook</span>
                </FacebookLoginButton >
                <GoogleLoginButton align="center" iconSize="15px" size="40px">
                  <span className="social-media-btn">Continue with Google</span>
                </GoogleLoginButton> */}
            </Styled.Footer>
          </Modal.Footer>
        </Modal>
      </Styled.AuthenticationModal>
    );
  }
}
const mapStateToProps = state =>{
  return{
    authModalShow: state.ui.authModalShow,
    authError:state.auth.authError
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle:() => dispatch(actionCreators.authModalToggle())
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Authentication);