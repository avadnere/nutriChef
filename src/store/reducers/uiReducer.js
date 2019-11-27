import * as actionTypes from "../actions/actionTypes"
import {updatedObject} from "../utility"

const intialState = {
    authModalShow:false,
    success_alert:false,
}

const reducer = (state = intialState, action) => {
    switch ( action.type){
        
        case actionTypes.AUTH_MODAL_TOGGLE:
            return updatedObject(state, {
                authModalShow:!state.authModalShow,
            })
        case actionTypes.SHOW_SUCCESS_ALERT:
            return updatedObject(state,{
                success_alert:true
            })
        case actionTypes.HIDE_SUCCESS_ALERT:
            return updatedObject(state,{
                success_alert:false
            })
        default:
            return state;
    }
    
}
export default reducer;