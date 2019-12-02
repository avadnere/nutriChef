import {combineReducers} from "redux"
import uiReducer from "./uiReducer"
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from "./authReducer";
import calorieReducer from "./calorieReducer";
import dietaryPlan from "./dietaryPlanReducer";
import user from "./userReducer"

export const rootReducer = combineReducers({
    ui: uiReducer,
    firebase: firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer,
    calorie:calorieReducer,
    dietaryPlan:dietaryPlan,
    user:user
    
});