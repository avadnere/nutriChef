import React, { Component } from 'react';
import Styled from "./styled";
import Meal from "./Meal"
import { Card, Button, Table } from "react-bootstrap";
import { connect } from "react-redux";

class DietaryPlan extends Component {

  state = {
    hasError: false,
    meal: false,
    breakfast: false,
    dinner: false,
    lunch: false,
  }
  toggle = () => {
    this.setState({
      meal: false,
      breakfast: false,
      dinner: false,
      lunch: false,
    })
  }

  clickHandler = (meal_type) => {

    this.setState({
      [meal_type]: true,
      meal: true,

    })

  }
  getDay = () => {
    let date = new Date();
    let numericDay = date.getDay();
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[numericDay];
    return day;
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    if (!this.state.meal) {
      return (
        <Styled.Container>
          <div className="row">
            <div className="col-sm-12 col-lg-8 col-md-12">
              <div className="row">
                <div className="col-sm-12 col-lg-6 col-md-12 card-view">
                  <Card className="breakfast-card card-body">
                    <Card.Body>
                      <Card.Title>Breakfast</Card.Title>
                      <Card.Text>
                        Breakfast kick-starts your metabolism, helping you burn calories throughout the day.
                      </Card.Text>
                      <Button variant="primary" className="service-btn" onClick={() => this.clickHandler("breakfast")} >Check out</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-12 card-view">
                  <Card className="lunch-card card-body">
                    <Card.Body>
                      <Card.Title>Lunch</Card.Title>
                      <Card.Text>
                        Lunch re-energizes and can raise blood sugar levels when concentration are flagging.
                   </Card.Text>
                      <Button variant="primary" className="service-btn" onClick={() => this.clickHandler("lunch")}>Check out</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-12 col-lg-12 col-md-12 card-view">
                  <Card className="dinner-card card-body">
                    <Card.Body>
                      <Card.Title>Dinner</Card.Title>
                      <Card.Text>
                        Dinner is important for our body to recover strength late in day
          </Card.Text>
                      <Button variant="primary" className="service-btn" onClick={() => this.clickHandler("dinner")}>Check out</Button>
                    </Card.Body>
                  </Card>
                </div>
                {/* <div className="col-sm-6 col-lg-6 col-md-6 card-view">
                  <Card className="week-meal card-body">
                    <Card.Body>
                      <Card.Title>Week Meal</Card.Title>
                      <Card.Text>
                        Your this week meal plan detailing about the targeted calories.
          </Card.Text>
                      <Button variant="primary" className="service-btn" >Check out</Button>
                    </Card.Body>
                  </Card>
                </div> */}
              </div>
            </div>
            <div className="col-sm-12 col-lg-4 col-md-12">
              <Table>
                <thead>
                  <tr>
                    <th> Targeted Nutrients</th>
                    <th>   Energy in Kcal</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> Carbohydrates</td>
                    <td>{this.props.nutritionFact.carbohydrates}</td>
                  </tr>
                  <tr>
                    <td> Fats</td>
                    <td>{this.props.nutritionFact.fats}</td>
                  </tr>
                  <tr>
                    <td> Protiens</td>
                    <td>{this.props.nutritionFact.protein}</td>
                  </tr>
                  <tr>
                    <td> Vitamins A</td>
                    <td>{this.props.nutritionFact.vitamin}</td>
                  </tr>

                  <tr>
                    <td>Calcium</td>
                    <td>{this.props.nutritionFact.calcium}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="cal-disp">
                <div className="cal-val">
                  <span className="metric-val">{this.props.dailyCalorieIntake}</span> <span className="metric-unit">kcal</span>
                </div>
                <div className=" cal-desc">
                  Daily Calories Targeted
                </div>
              </div>
            </div>
          </div>

        </Styled.Container>
      );
    }
    else {
      return (
        <Styled.Container>
          <div className="left-alignment">
          <Button className="toggle-btn" onClick={() => this.toggle()}><img className="btn-icon" src={require("../../Images/back_arrow.png")} /></Button>
            <Meal day={this.getDay()} meal={this.props.weekely_meal_plan[this.getDay()]} breakfast={this.state.breakfast} lunch={this.state.lunch} dinner={this.state.dinner} />
          </div>
            
        </Styled.Container>
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    nutritionFact: state.dietaryPlan.nutrition_facts,
    dailyCalorieIntake: state.dietaryPlan.daily_calorie_intake,
    weekely_meal_plan:state.dietaryPlan.weekely_meal_plan
  };
}
export default connect(mapStateToProps)(DietaryPlan);