import * as actionTypes from "../actions/actionTypes"
import {updatedObject} from "../utility"

const intialState = {
    authModalShow:false,
}


const reducer = (state = intialState, action) => {
    switch ( action.type){
        
        case actionTypes.AUTH_MODAL_TOGGLE:
            return updatedObject(state, {
                authModalShow:!state.authModalShow,
            })

        default:
            return state;
    }
    
}
export default reducer;