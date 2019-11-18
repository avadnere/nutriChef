import React, { Component } from 'react';
import Navbar from '../Navbar'

class Capsule extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Capsule mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Capsule getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Capsule did update');
  }

  componentWillUnmount = () => {
    console.log('Capsule will unmount');
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