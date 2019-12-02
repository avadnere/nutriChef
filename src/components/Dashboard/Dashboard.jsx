import React, { Component } from 'react';
import Styled from "./styled";
import { Card, Table} from "react-bootstrap"
import { connect } from "react-redux";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PieChart from 'react-minimal-pie-chart';

class Dashboard extends Component {
  chartRef = React.createRef();
  state = {
    hasError: false,

  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Styled.container>
        <div className="row">
          <div className="col-sm-12 col-lg-5 col-md-5 frame">
            <Card>
              <Card.Body>
                <h1>Hi {this.props.profile.firstName} </h1>
                <p>Good nutrition is an important part of leading a healthy lifestyle. Combined with physical activity, your diet can help you to reach and maintain a healthy weight, reduce your risk of chronic diseases (like heart disease and cancer), and promote your overall health.The number of calories in a food is a measurement of the amount of energy stored in that food. Your body uses calories from food for walking, thinking, breathing, and other important functions.

The average person needs to eat about 2,000 calories every day to maintain their weight.However, a person’s specific daily calorie intake can vary depending on their age, gender, and physical activity level.</p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-7 col-md-7 frame">
            <Card>
            <div className="table-div">
            <h3>BMI Chart Indicator</h3>
            <Table>
                <thead>
                  <tr>
                    <th>BMI</th>
                    <th>Classification</th>
                    <th>Health Risk</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>18.5 - 24.9</td>
                    <td>Normal Weight</td>
                    <td>Minimal</td>
                  </tr>
                  <tr>
                  <td>25 - 29.9</td>
                    <td>Overweight</td>
                    <td>Increased</td>
                  </tr>
                  <tr>
                  <td>30-34.9</td>
                    <td>Obese</td>
                    <td>High</td>
                  </tr>
                  <tr>
                  <td>35 - 39.9</td>
                    <td>Severly Obese</td>
                    <td>Very High</td>
                  </tr>

                  <tr>
                  <td>40 and Over</td>
                    <td>Morbidly Obese</td>
                    <td>Extremely High</td>
                  </tr>
                </tbody>
              </Table>
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 col-md-4 ">
            <Card className="custom-pad-div">

              <PieChart className="piechart"
                data={[
                  { title: 'Carbohydrates', value: 30, color: '#E38627' },
                  { title: 'Fats', value: 20, color: '#C13C37' },
                  { title: 'Protien', value: 50, color: '#6A2135' },
                ]}

                label={({ data, dataIndex }) => {
                  return data[dataIndex].title +'\n'+ data[dataIndex].value+"%";
                }
                }
                labelPosition={50}

                labelStyle={{
                  fill: 'white',
                  fontFamily: 'sans-serif',
                  fontSize: '5px'
                }}
                lengthAngle={360}
                lineWidth={100}
                onClick={undefined}
                onMouseOut={undefined}
                onMouseOver={undefined}
                paddingAngle={0}
                radius={50}
                rounded={false}
                startAngle={0}
                viewBoxSize={[
                  100,
                  100
                ]}
              />
              <div className="box-head">Recomended Nutrients Intake</div>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-4">
            <Card>
              <Card.Body>
                <h3>Some Great Saying</h3>
                <hr/>
                <div className="quotes">
                    <q> Insanity: Doing the same thing over and over again and expecting different results.</q>
                </div>
                <div className="quotes">
                <q> Food is an important part of a balanced diet.”  —Fran Lebowitz</q>
                </div>

                <div className="quotes">
                <q> Success is the sum of small efforts—repeated day-in and day-out.”  —Robert Collier</q>
                </div>

                <div className="quotes">
                <q> By choosing healthy over skinny, you are choosing self-love over self-judgement.”  —Steve Maraboli</q>
                </div>
               
                
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-lg-4 col-md-4">
            <Card>
              <div>
                <div className="metric">
                  <div className="value">{(this.props.profile.weight/Math.pow((this.props.profile.height/100),2)).toFixed(2)}</div>
                  <div className="unit">BMI</div>
                </div>

              </div>
            </Card><br/>
            <Card>
              <div>
                <div className="metric">
                  <div className="value">{this.props.profile.height}</div>
                  <div className="unit">Height(cm)</div>
                </div>

              </div>
            </Card><br/>
            <Card>
              <div>
                <div className="metric">
                  <div className="value">{this.props.profile.weight}</div>
                  <div className="unit">Weight(kg)</div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </Styled.container>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
}

export default connect(mapStateToProps)(Dashboard);
