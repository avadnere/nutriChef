import React, { Component } from 'react';
import Styled from "./styled";
import { Table } from "react-bootstrap";

class Meal extends Component {
  state = {
    hasError: false,
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    console.table(this.props.meal);
    console.log(this.props.day)
    if (this.props.breakfast) {
      return (
        <Styled.Container>
          <h1>{this.props.meal.breakfast.title}</h1>
          <h2>{this.props.day} Breakfast</h2>
          <hr width="70%" align="left"/>
          <p className="head-desc">Studies find that what you eat for breakfast influences what you eat the rest of the day. So nutrichef recommend you to start your {this.props.day} morning with a meal full of protien</p>
          <div className="row breakfast-desc">
            <div className="col-sm-12 col-md-12 col-lg-8 left-alignment">
              <q>
                When you eat breakfast you're telling your body that there are plenty of calories to be had for the day. When you skip breakfast the message your body gets is that it needs to conserve rather than burn any incoming calories.
            </q>
              <p>
                When you eat breakfast you're telling your body that there are plenty of calories to be had for the day.When you skip breakfast the message your body gets is that it needs to conserve rather than burn any incoming calories."Studies have found that although people who skip breakfast eat slightly fewer calories during the day, they tend to have higher body mass index, or BMI," says Christy C. Tangney, PhD, a clinical dietitian at Rush University Medical Center and an expert on the effects of diet and nutrition on heart health.
            </p>
              <h3>
                Recipe
            </h3>
              <p>
               {this.props.meal.breakfast.recipe}
            </p>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <h4>Nutrition Facts</h4>
              <Table>
                <thead>
                  <tr>
                    <th> Targeted Nutrients</th>
                    <th> Daily Value</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> Carbohydrates</td>
                    <td> {this.props.meal.breakfast.nutrion_fact.carbohydrates}</td>
                  </tr>
                  <tr>
                    <td> Fats</td>
                    <td> {this.props.meal.breakfast.nutrion_fact.fats}</td>
                  </tr>
                  <tr>
                    <td> Protiens</td>
                    <td> {this.props.meal.breakfast.nutrion_fact.protein}</td>
                  </tr>
                  <tr>
                    <td> Vitamins A</td>
                    <td> {this.props.meal.breakfast.nutrion_fact.vitamin}</td>
                  </tr>

                  <tr>
                    <td>Calcium</td>
                    <td> {this.props.meal.breakfast.nutrion_fact.calcium}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="cal-disp">
                <div className="cal-val">
                  <span className="metric-val">{this.props.meal.breakfast.calories}</span> <span className="metric-unit">kcal</span>
                </div>
                <div className=" cal-desc">
                  Expected Calories Gain
                  </div>
              </div>
            </div>
          </div>
        </Styled.Container>

      );

    }
    if (this.props.lunch) {
      return (
        <Styled.Container>
          <h1>{this.props.meal.lunch.title}</h1>
          <h2>{this.props.day} Lunch</h2>
          <hr width="70%" align="left"/>
          <p className="head-desc">The lunch break helps you stay focused and energized throughout the day by recharging both your body and your mind. When you plan your lunch you have the opportunity to be healthy and nutritious, but you can also be creative with your lunchtime options and activities so that you will look forward to and make time for lunch.     

</p>
          <div className="row breakfast-desc">
            <div className="col-sm-12 col-md-12 col-lg-8 left-alignment">
            <p>
              The key to a nutritious packed lunch is variety and getting the right balance of foods to provide you with the nutrients you need to stay healthy.Our daily intake of calories and nutrients is split over the meals and snacks we eat throughout the day. One way to spread calorie intake over the day is to consume 20% of total calorie intake at breakfast, 30% at lunch, 30% at dinner and 20% for snacks. The calories we consume from drinks is also included in this allowance.
            </p>
              <p>
              Some people think they can ride out the day without lunch but there are some problems that might arise. Skipping lunch is like going on a mini fast and may lead to intense feelings of hunger especially if breakfast was not adequate.Your body has evolved for survival, and if you go too long without eating you begin to get very hungry and all you can think about is food and your next meal. This leads to deterioration in your performance at work.
            </p>
             
              <h3>
                Recipe
            </h3>
              <p>
              {this.props.meal.lunch.recipe}
            </p>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <h4>Nutrition Facts</h4>
              <Table>
                <thead>
                  <tr>
                    <th> Targeted Nutrients</th>
                    <th> Daily Value</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> Carbohydrates</td>
                    <td>{this.props.meal.lunch.nutrion_fact.carbohydrates}</td>
                  </tr>
                  <tr>
                    <td> Fats</td>
                    <td>{this.props.meal.lunch.nutrion_fact.fats}</td>
                  </tr>
                  <tr>
                    <td> Protiens</td>
                    <td>{this.props.meal.lunch.nutrion_fact.protein}</td>
                  </tr>
                  <tr>
                    <td> Vitamins A</td>
                    <td>{this.props.meal.lunch.nutrion_fact.vitamin}</td>
                  </tr>

                  <tr>
                    <td>Calcium</td>
                    <td>{this.props.meal.lunch.nutrion_fact.calcium}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="cal-disp">
                <div className="cal-val">
                  <span className="metric-val">{this.props.meal.lunch.calories}</span> <span className="metric-unit">kcal</span>
                </div>
                <div className=" cal-desc">
                  Expected Calories Gain
                  </div>
              </div>
            </div>
          </div>
        </Styled.Container>

      );

    }
    if (this.props.dinner) {
      return (
        <Styled.Container>
          <h1>{this.props.meal.dinner.title}</h1>
          <h2>{this.props.day} Dinner</h2>
          <hr width="70%" align="left"/>
          <p className="head-desc">Dinner is important for our body to recover strength late in the day. It also help by providing energy during the hours we sleep and, specially, to rest well.</p>
          <div className="row breakfast-desc">
            <div className="col-sm-12 col-md-12 col-lg-8 left-alignment">
              <p>
              Having a healthy dinner is quite satisfying after a long, hard day. Most people would agree that going to bed on an empty stomach is not enjoyable, nor is waking up with an unbalanced body.  This can get your day started in the wrong way, which in turn could make your fitness and weight loss endeavors seem a lot more difficult.  So, if you are thinking that you should skip dinner in order to save yourself some trouble later, now is the time to think again.
            </p>
              <p>
              Once you go to bed, there is no more eating.  So, you better get all the vitamins, minerals, and nutrients you can before it is lights out.  Unfortunately, a lot of people assume that they can simply eat breakfast in the morning and be fine.  The fact of the matter is this: breakfast may be the most important meal of the day, but dinner is what will fuel your body until that time.  Considering that you actually burn more calories while you sleep than you do while you sit and watch TV, having a scrumptious dinner doesn’t necessarily mean you will gain more weight.  Just be sure to choose healthy foods, never overeat, and be careful about eating things that might cause digestive upsets.The foods you decide to eat for dinner matter quite a bit, especially when it comes to your diet and weight loss endeavors. If you are unsure about what to prepare, try gathering some simple recipes that can be created quickly and inexpensively.
            </p>
              <h3>
                Recipe
            </h3>
              <p>
              {this.props.meal.dinner.recipe}
            </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <h4>Nutrition Facts</h4>
              <Table>
                <thead>
                  <tr>
                    <th> Targeted Nutrients</th>
                    <th> Daily Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> Carbohydrates</td>
                    <td>{this.props.meal.dinner.nutrion_fact.carbohydrates}</td>
                  </tr>
                  <tr>
                    <td> Fats</td>
                    <td>{this.props.meal.dinner.nutrion_fact.fats}</td>
                  </tr>
                  <tr>
                    <td> Protiens</td>
                    <td>{this.props.meal.dinner.nutrion_fact.protein}</td>
                  </tr>
                  <tr>
                    <td> Vitamins A</td>
                    <td>{this.props.meal.dinner.nutrion_fact.vitamin}</td>
                  </tr>
                  <tr>
                    <td>Calcium</td>
                    <td>{this.props.meal.dinner.nutrion_fact.calcium}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="cal-disp">
                <div className="cal-val">
                  <span className="metric-val">{this.props.meal.dinner.calories}</span> <span className="metric-unit">kcal</span>
                </div>
                <div className=" cal-desc">
                  Expected Calories Gain
                  </div>
              </div>
            </div>
          </div>
        </Styled.Container>

      );

    }
    
  }
}

export default Meal;