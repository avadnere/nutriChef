import { Card, Accordion, Button, Table } from "react-bootstrap"
import React, { Component } from 'react';
import Styled from "./styled";
import { connect } from "react-redux";
import { deleteCalorie } from "../../../store/actions"


class AccordianCard extends Component {
  state = {
    hasError: false,
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    const meals = this.props.mealDetail.meals.map((meal, index)=>{
     return ( <tr key={index}>
      <td> {meal.cuisine_name}</td>
      <td>{ meal.meal_type}</td>
      <td>{meal.calorie_intake}</td>
      </tr>
      )
    })
    return (
      <Styled.Container>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" className="header-toggle" eventKey={this.props.mealId}>
           {/* { moment(this.props.mealDetail.meal_intake_date, "YYYY-MM-DD").format("MMMM Do YYYY")} */}
           {new Date(this.props.mealDetail.meal_intake_date).toDateString()}
      </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={this.props.mealId}>
            <Card.Body>
              <Table>
                <thead>
                  <tr>
                    <th> Name</th>
                    <th>Type</th>
                    <th>Energy in Kcal</th>
                  </tr>
                </thead>
                <tbody>
                {meals}
                </tbody>
              </Table>
              <footer className="pull-right">
                {/* <Button className="primary" variant="secondary">Edit</Button> */}
                <Button className="secondary" variant="danger" onClick={()=>this.props.deleteCalorie(this.props.mealId)}>Delete</Button>
              </footer>
            </Card.Body>

          </Accordion.Collapse>

        </Card>
      </Styled.Container>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   
    deleteCalorie:(mealId) => dispatch(deleteCalorie(mealId))
  };
}
export default connect(null , mapDispatchToProps)(AccordianCard)

