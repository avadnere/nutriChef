import {combineReducers} from "redux"
import uiReducer from "./uiReducer"
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    firebase: firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer
});