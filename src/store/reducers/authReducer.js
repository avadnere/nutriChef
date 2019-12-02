import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility"

const intialState = {
    authError: null,
    password_update_status:null,
    update_password_err:null
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
            return updatedObject(state,{
                authError:action.error.message
            })
        case actionTypes.UPDATE_PASSWORD:
            return updatedObject(state,{
                password_update_status:true
            })
        case actionTypes.UPDATE_PASSWORD_ERROR:
                return updatedObject(state,{
                    password_update_status:false,
                    update_password_err:action.payload
                })
        case actionTypes.RESET_UPDATE_PASSWORD_FLAG:
                return updatedObject(state,{
                    password_update_status:null,
                    update_password_err:null
                })

        default:
            return state;
    }
}

export default authReducer