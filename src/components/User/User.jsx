import React, { Component } from 'react';
import Styled from "./styled";
import Dashboard from '../Dashboard';
import UserProfile from '../UserProfile';
import { Redirect } from "react-router-dom"
import { Nav } from 'react-bootstrap';
import DietaryPlan from '../DietaryPlan';
import CalorieTracker from '../CalorieTracker';
import { connect } from "react-redux";
import { getIntakeCalorie, 
        getCurrentDayCalorieIntake, 
        getCurrentWeekCalorieIntake, 
        getNutritionAndCalorieFacts
      } from "../../store/actions"

class User extends Component {
  state = {
    activeKey: "dashboard",
    dashboard:true,
  }
  clearState= {
    dashboard:false,
    userProfile:false,
    dietaryPlan:false,
    calorieTracker:false
  }
  componentWillMount(){
    this.props.getNutritionAndCalorieFacts();
  }
  componentDidMount(){
    this.props.getIntakeCalorie();
    this.props.getCurrentWeekCalorieIntake();
    this.props.getCurrentDayCalorieIntake();
  }
  handleSelect = eventKey => {
    this.setState(this.clearState)
    this.setState({
      [eventKey]: true,
      activeKey:eventKey
    })
  }
  render() {

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />
    const dashboard = this.state.dashboard ? <Dashboard /> : null;
    const dietaryPlan = this.state.dietaryPlan ? <DietaryPlan /> : null;
    const calorieTracker = this.state.calorieTracker ? <CalorieTracker /> : null;
    const userProfile = this.state.userProfile ? <UserProfile/> : null;
    return (
      <>
      <Styled.SubNav>
        <Nav className="justify-content-center"  activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <Nav.Item >
            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="dietaryPlan">Dietary Plan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="calorieTracker">Calorie Tracker</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="userProfile">Profile</Nav.Link>
          </Nav.Item>
        </Nav>
        </Styled.SubNav>
        {dashboard}
        {dietaryPlan}
        {calorieTracker}
        {userProfile}
        <hr/>
        <Styled.footer className="container">
          <div className="footer-desc">
            <p>Nutri-Chef is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
            <p>Copyright 2019 Nutri-Chef. All Rights Reserved.</p>
          </div>
        </Styled.footer>
      </>
    )}
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getIntakeCalorie:() => dispatch(getIntakeCalorie()),
    getCurrentDayCalorieIntake:()=>dispatch(getCurrentDayCalorieIntake()),
    getCurrentWeekCalorieIntake:()=>dispatch(getCurrentWeekCalorieIntake()),
    getNutritionAndCalorieFacts:()=>dispatch(getNutritionAndCalorieFacts())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);