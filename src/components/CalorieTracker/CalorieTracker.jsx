import React, { Component } from 'react';
import Styled from "./styled";
import { Form, Alert, Accordion, Button, Table } from "react-bootstrap"
import AccordianCard from "./AccordianCard"
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from "react-redux";
import { recordCalorie, hideSuccessAlert } from "../../store/actions"
import moment from "moment"


class CalorieTracker extends Component {
  state = {
    hasError: false,
    visible: false,
    cards: [],
    cuisine_name: "",
    meal_type: "",
    calorie_intake: "",
    meal_intake_date: "",
    erro: "",
    dangerVisibility: false,
  }
  onShowAlert = () => {
    this.setState({
      cuisine_name: "",
      meal_type: "",
      calorie_intake: "",
      meal_intake_date: "",
    })

    this.setState({ ...this.state, visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ ...this.state, visible: false })
      }, 2000)
    });
  }
  componentDidUpdate() {
    if (this.props.success_alert) {
      this.props.hideSuccessAlert()
      this.onShowAlert()
    }
  }
  handleChange = (e) => {
    this.setState({
      error: "",
      dangerVisibility: false,
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.cuisine_name === "" || this.state.cuisine_name === undefined || this.state.cuisine_name === null) {
      this.setState({
        error: "Cuisine name Empty",
        dangerVisibility: true,
      })
      return false
    }
    if (this.state.meal_type === "" || this.state.meal_type === undefined || this.state.meal_type === null) {
      this.setState({
        error: "meal type not selected",
        dangerVisibility: true,
      })
      return false;
    }
    if (this.state.meal_intake_date === "" || this.state.meal_intake_date === undefined || this.state.meal_intake_date === null) {
      this.setState({
        error: "meal date not selected",
        dangerVisibility: true,
      })
      return false
    }
    if (this.state.calorie_intake === "" || this.state.calorie_intake === undefined || this.state.calorie_intake === null) {
      this.setState({
        error: "calorie intake Empty",
        dangerVisibility: true,
      })
      return false
    }
    else {
      let calorieDetails = {
        cuisine_name: this.state.cuisine_name,
        meal_type: this.state.meal_type,
        calorie_intake: this.state.calorie_intake,
        meal_intake_date: this.state.meal_intake_date
      }
      this.props.recordCalorie(calorieDetails)
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let cardArray = [];
    if(this.props.calorie_intake !== undefined){
       cardArray=this.props.calorie_intake.map((item) => {
        return <AccordianCard key={item.docId} mealId={item.docId} mealDetail={item.docData}/>
      })
    }
   
    return (
      <Styled.Container>
        <div className="row">
          <div className="col-sm-7 col-lg-7 col-md-7">
            <h3 className="display-5">Calorie Intake History</h3><hr />
            <Accordion defaultActiveKey="0">
              {cardArray}
            </Accordion>
          </div>
          <div className="col-sm-4 col-lg-4 col-md-4">
            <h2 className="display-4">Record Calorie</h2><hr />
            <Alert show={this.state.visible} key="success" variant="success">
              Calorie Recorded Succesfully
            </Alert>
            <Alert show={this.state.dangerVisibility} key="danger" variant="danger">
              {this.state.error}
            </Alert>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="cuisine_name">
                <Form.Label>Cuisine Name</Form.Label>
                <Form.Control type="text" placeholder="Chicken Kadhai" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="meal_type">
                <Form.Label>Meal Type</Form.Label>
                <Form.Control as="select" onChange={this.handleChange}>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="calorie_intake">
                <Form.Label>Calorie Intake</Form.Label>
                <Form.Control type="number" placeholder="Calorie Intake" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="meal_intake_date">
                <Form.Label>Meal Date</Form.Label>
                <Form.Control type="date" placeholder="Meal Intake Date"  max={moment().format("YYYY-MM-DD")} onChange={this.handleChange} />
              </Form.Group>
              <Button variant="primary custom-primary-btn" size="md" type="submit">
                Add Calorie
            </Button>
            </Form>
            <hr />
            <div className="progress-tracker">
              <CircularProgressbarWithChildren className="circular-bar" value={this.props.current_day_calorie_intake} text={`${this.props.current_day_calorie_intake}%`} styles={buildStyles({
                pathColor: `#874F34`,
                textColor: '#874F34',
                backgroundColor: '#874F34'
              })}>
              <div style={{ fontSize: 12, marginTop: 180 }}>
                <strong>Daily Calorie Intake Progress</strong>
              </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="progress-tracker">
              <CircularProgressbarWithChildren className="circular-bar" value={this.props.current_week_calorie_intake} text={`${this.props.current_week_calorie_intake}%`} styles={buildStyles({
                pathColor: `#874F34`,
                textColor: '#874F34',
                backgroundColor: '#874F34'
              })}>
                <div style={{ fontSize: 12, marginTop: "50%" }}>
                  <strong>Weekely Calorie Intake Progress</strong>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </Styled.Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    success_alert: state.ui.success_alert,
    calorie_intake: state.calorie.calorieIntake,
    current_day_calorie_intake:state.calorie.current_day_calorie_intake,
    current_week_calorie_intake:state.calorie.current_week_calorie_intake_percentage
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    recordCalorie: (calorieDetails) => dispatch(recordCalorie(calorieDetails)),
    hideSuccessAlert: () => dispatch(hideSuccessAlert()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CalorieTracker)

