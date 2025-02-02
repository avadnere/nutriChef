import React, { Component } from 'react';
import Styled from "./styled";
import { connect } from "react-redux";

class Dashboard extends Component {
  chartRef = React.createRef();
  state = {
    hasError: false,

  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.container>

      </Styled.container>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
}

export default connect(mapStateToProps)(Dashboard);
