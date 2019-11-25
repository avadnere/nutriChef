import React, { Component } from 'react';
import Styled from "./styled";
import { Form, Card, Accordion, Button, Table } from "react-bootstrap"
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

class CalorieTracker extends Component {
  state = {
    hasError: false,
    cards:[]
  }
  
  componentDidMount(){
    let cards=[]
    for(let i=1;i<15;i++){
      cards.push(<Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={i}>
            {i} November 2019
        </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={i}>
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
                <tr>
                  <td> Salad</td>
                  <td> Breakfast</td>
                  <td>200 cal</td>
                </tr>
                <tr>
                  <td> Pulses</td>
                  <td> Lunch</td>
                  <td>200 cal</td>
                </tr>
                <tr>
                  <td> Mutton Pulao</td>
                  <td> DInner</td>
                  <td>800 cal</td>
                </tr>
              </tbody>
            </Table>
            <footer className="pull-right">
            <Button className="primary" variant="secondary">Edit</Button>
            <Button className="secondary" variant="danger">Delete</Button>
            </footer>
          </Card.Body>
          
        </Accordion.Collapse>
       
      </Card>)
    }
    this.setState({
      cards:cards
    })
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Styled.Container>
        <div className="row">
          <div className="col-sm-7 col-lg-7 col-md-7">
            <h3 className="display-5">Calorie Intake History</h3><hr />
            <Accordion defaultActiveKey="0">
              {this.state.cards}
            </Accordion>
          </div>
          <div className="col-sm-4 col-lg-4 col-md-4">
            <h2 className="display-4">Record Calorie</h2><hr/>
            <Form>
              <Form.Group controlId="Cuisine">
                <Form.Label>Cuisine Name</Form.Label>
                <Form.Control type="text" placeholder="Chicken Kadhai" />
              </Form.Group>
              <Form.Group controlId="mealType">
                <Form.Label>Meal Type</Form.Label>
                <Form.Control as="select">
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="calorieIntake">
                <Form.Label>Calorie Intake</Form.Label>
                <Form.Control type="number" placeholder="Calorie Intake" />
              </Form.Group>
              <Button variant="primary custom-primary-btn" size="md" type="submit">
                Add Calorie
            </Button>
            </Form>
            <hr/>
            <div className="progress-tracker">
              <CircularProgressbarWithChildren className="circular-bar" value={23} text={`${23}%`} styles={buildStyles({
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
              <CircularProgressbarWithChildren className="circular-bar" value={50} text={`${50}%`} styles={buildStyles({
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

export default CalorieTracker;