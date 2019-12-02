import React, { Component } from 'react';
import User from "../User";
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/index"
class SecureBox extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    this.props.getNutritionAndCalorieFacts();
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
       <>
         <User/>
       </>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     auth: state.firebase.auth
//   };
// }
const mapDispatchToProps = (dispatch) => {
  return {
    getNutritionAndCalorieFacts:()=>dispatch(actionCreators.getNutritionAndCalorieFacts())
  };
}
export default connect(null, mapDispatchToProps)(SecureBox);
