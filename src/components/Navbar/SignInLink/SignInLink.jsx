

import React, { Component } from 'react';
import Styled from "../styled";
import Authentication from "../../Authentication";
import { connect } from "react-redux";
import { BrowserRouter as  Link } from 'react-router-dom';
import * as actionCreators from "../../../store/actions/index"


class SignInLink extends Component {
  state = {
    hasError: false,
  }
  signInToggle() {
    this.setState({
      signInModalShow: !this.props.signInModalShow,
    })
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Styled.navlink className="nav-link" onClick={this.props.authModalToggle} >Sign in or Join</Styled.navlink>
          <Authentication show={this.props.authModalShow} onHide={this.props.authModalToggle} />
        </li>
        {/* <li className="nav-item">
          <Link to="/">
            <Styled.navlink className="nav-link" >Help</Styled.navlink>
          </Link>
        </li> */}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    authModalShow: state.ui.authModalShow
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle: () => dispatch(actionCreators.authModalToggle())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInLink);