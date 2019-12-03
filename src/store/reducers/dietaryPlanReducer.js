import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility"

const intialState = {
    nutrition_facts:null,
    daily_calorie_intake:0,
    weekely_meal_plan:null,
    error_dietary_plan:null,
};

const dietaryPlanReducer = (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.GET_NUTRITION_AND_CALORIE_FACTS:
            return updatedObject(state, {
                daily_calorie_intake: action.payload.dailyCalorieIntake,
                nutrition_facts: action.payload.nutritionFact,
                weekely_meal_plan: action.payload.weekely_meal_plan,
                weekelyCalorieIntake:action.payload.weekelyCalorieIntake
            })

        case actionTypes.ERROR_DIETARY_PLAN:
                console.log("state ERROR " , action.payload);
            return updatedObject(state, {
                error_dietary_plan: action.payload,
            })

        default:
            return state;
    }
}

export default dietaryPlanReducer