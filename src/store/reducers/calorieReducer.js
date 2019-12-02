import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility"

const intialState = {
    calorieIntake:[],
    current_day_calorie_intake:0,
    err_Calorie_Intake_current_day:null,
    current_week_calorie_intake_percentage:0,
    err_weekely_calorie_intake_percentage:null,
};

const calorieReducer = (state = intialState, action) => {
    switch (action.type) {
        
        case actionTypes.UPDATE_CALORIE:
            console.log("Recorded Calorie", action.payload)
            
            return updatedObject(state, {
                calorieIntake: action.payload,
            })

        case actionTypes.UPDATE_CALORIE_ERROR:
            console.log("UPDATE CALORIE ERROR".action.payload)
            return updatedObject(state, {
                recordCalorieError: action.payload,
            })
        
        case actionTypes.GET_INTAKE_CALORIE:
            return updatedObject(state,{
                calorieIntake:action.payload
            })

        case actionTypes.GET_CURRENT_DAY_CALORIE_INTAKE:
            return updatedObject(state,{
                current_day_calorie_intake:action.payload
            })
        
        
        case actionTypes.ERROR_GET_CURRENT_DAY_CALORIE_INTAKE:
                return updatedObject(state,{
                    err_Calorie_Intake_current_day:action.payload
                })

        case actionTypes.WEEKELY_CALORIE_INTAKE_PERCENTAGE:
                return updatedObject(state,{
                    current_week_calorie_intake_percentage:action.payload
                })
        
        case actionTypes.ERROR_WEEKELY_CALORIE_INTAKE_PERCENTAGE:
                return updatedObject(state,{
                    err_weekely_calorie_intake_percentage:action.payload
                })

        default:
            return state;
    }
}

export default calorieReducer