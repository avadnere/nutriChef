import { Form, Card, Accordion, Button, Table } from "react-bootstrap"
import React, { Component } from 'react';
import Styled from "./styled";
import moment from "moment"

class AccordianCard extends Component {
  state = {
    hasError: false,
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.log(new Date(this.props.mealDetail.meal_intake_date).toDateString());
    const meals = this.props.mealDetail.meals.map((meal)=>{
     return ( <tr>
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
                <Button className="primary" variant="secondary">Edit</Button>
                <Button className="secondary" variant="danger">Delete</Button>
              </footer>
            </Card.Body>

          </Accordion.Collapse>

        </Card>
      </Styled.Container>
    );
  }
}

export default AccordianCard;