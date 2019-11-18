import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility"

const intialState = {
    authError: null
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_ERROR:
            console.log(state)
            return updatedObject(state, {
                authError: "Login Failed",
            })

        case actionTypes.LOGIN_SUCCESS:
            return updatedObject(state, {
                authError: null,
            })
        
        case actionTypes.SIGNOUT_SUCCESS:
            return updatedObject(state)

        case actionTypes.SIGNUP_ERROR:
            console.log("Signup Error "+action.error.message)
            return updatedObject(state,{
                authError:action.error.message
            })

        default:
            return state;
    }
}

export default authReducer