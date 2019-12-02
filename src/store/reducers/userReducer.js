import * as actionTypes from "../actions/actionTypes"

import {
    updatedObject
} from "../utility"

const intialState = {
    height:0,
    age:0,
    weight:0,
    updateStatus:null,
    error:null,
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.UPDATE_USER_DETAIL:
            return updatedObject(state, {
                age: action.payload.age,
                weight: action.payload.weight,
                height: action.payload.height,
                updateStatus:true,
            })

        case actionTypes.ERROR_UPDATE_USER_DETAIL:
            return updatedObject(state, {
                error: action.payload,
                updateStatus:true,
            })
        
        case actionTypes.USER_STATUS_UPDATE_DETAIL_FLAG:
                return updatedObject(state, {
                    updateStatus:null,
                })

        default:
            return state;
    }
}
export default userReducer