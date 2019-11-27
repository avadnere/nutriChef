
import React, { Component } from 'react';
import Styled from "./styled";
import { Modal, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index"

class UpdateMeal extends Component {
  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    let meals = this.props.meals.meals.map((item) => {
      return (
        <div>
          <div>
            <h5>Meal 1</h5>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Form.Group controlId="cuisine_name">
                <Form.Label>Cuisine Name</Form.Label>
                <Form.Control type="text" placeholder="Chicken Kadhai" value={item.cuisine_name} onChange={this.handleChange} />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Form.Group controlId="meal_type">
                <Form.Label>Meal Type</Form.Label>
                <Form.Control as="select" value={item.meal_type} onChange={this.handleChange}>
                  <option>Breakfast</option>
                  <option>Lunch</option>
                  <option>Dinner</option>
                </Form.Control>
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <Form.Group controlId="calorie_intake">
                <Form.Label>Calorie Intake</Form.Label>
                <Form.Control type="number" placeholder="Calorie Intake" onChange={this.handleChange} value={item.calorie_intake} />
              </Form.Group>
            </div>
          </div>



        </div>
      )
    })
    return (
      <Styled.Container>
        <Modal dialogClassName="custom-modal" show={false} animation={true}>
          <Styled.ModalHeader closeButton >
            <Modal.Title className="title">Update Meal</Modal.Title>
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <Modal.Body>
              <Form>
                {meals}
              </Form>
            </Modal.Body>
          </Styled.ModalBody>
          <Styled.Footer>
            <Modal.Footer>

            </Modal.Footer>
          </Styled.Footer>
        </Modal>
      </Styled.Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    authModalShow: state.ui.authModalShow,
    authError: state.auth.authError
  };
}

const mapDispatchToProps = dispatch => {
  return {
    authModalToggle: () => dispatch(actionCreators.authModalToggle())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateMeal);