'use strict';

import React, { Component } from 'react';
import Styled from "../styled";
import { connect } from "react-redux";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import * as actionCreators from "../../../store/actions/index"

class SignOutLink extends Component { 
  state = {
    hasError: false,
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to="/dashboard">
          <Styled.navlink className="nav-link" >Hi {this.props.profile.firstName} !</Styled.navlink>
        </Link>
      </li>
      <li className="nav-item">
        <a onClick={this.props.signOut}>
          <Styled.navlink className="nav-link" >Sign Out</Styled.navlink>
        </a>
      </li>
    </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    authModalShow: state.ui.authModalShow,
    profile:state.firebase.profile
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle: () => dispatch(actionCreators.authModalToggle()),
    signOut:() => dispatch(actionCreators.signOut())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignOutLink);
