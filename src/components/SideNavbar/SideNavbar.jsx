import { Nav} from 'react-bootstrap';
import Styled from "./styled";
import React, {Component} from 'react';
 
export default class Example extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
          isVisible: false,
        };
    }
 
    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }
 
    render() {
        return (
       
          <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/user/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/user/dietaryPlan" >Dietary Plan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/user/calTracker" eventKey="link-2">Calorie Tracker</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/user/profile" eventKey="link-2">Profile</Nav.Link>
          </Nav.Item>
        </Nav>
        
        );
    }
}