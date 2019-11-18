'use strict';

import React, { Component } from 'react';
// import Styled from "./styled";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index"
import {Redirect} from "react-router-dom"

class Dashboard extends Component { 
  state = {
    hasError: false,
  }


  componentDidUpdate = () => {
    console.log('Dashboard did update');
  }

  componentWillUnmount = () => {
    console.log('Dashboard will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/"/>

    return (
     <div>
       Hello {this.props.profile.firstName}!
     </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
  };
}


export default connect(mapStateToProps)(Dashboard);
