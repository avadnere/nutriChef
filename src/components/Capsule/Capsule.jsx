import React, { Component } from 'react';
import Navbar from '../Navbar'

class Capsule extends Component { 
  state = {
    hasError: false,
  }
  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Navbar/>
    );
  }
}

export default Capsule;