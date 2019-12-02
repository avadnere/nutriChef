import React, { Component } from 'react';
import Styled from "./styled";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import LandingPage from '../Landing';
import SignOutLink from "./SignOutLink"
import SignInLink from "./SignInLink"
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index"
import User from '../User';
import SecureBox from '../SecureBox';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
     hasError: false
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const {auth} = this.props;
    const links = auth.uid ? <SignOutLink/> : <SignInLink/>
    return (
      <Styled.customNav>
        <Router>
          <nav className="navbar navbar-expand-md navbar-light bg-white custom-nav">
            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/">
                    <Styled.navlink className="nav-link" >Home</Styled.navlink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <Styled.navlink className="nav-link">Articles</Styled.navlink>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto order-0">
              <Link to="/">
                <span className="navbar-brand mx-auto" >
                  <Styled.navbarheading className="display-4"> Nutri-Chef </Styled.navbarheading>
                </span>
              </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <Styled.navlink className="navbar-toggler-icon"></Styled.navlink>
              </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                {links}
            </div>
          </nav>
          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/user" exact component={SecureBox}/>
            </Switch>
          </div>
        </Router>
      </Styled.customNav>
    )
  }
}

const mapStateToProps = state =>{
  return{
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle:() => dispatch(actionCreators.authModalToggle())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);