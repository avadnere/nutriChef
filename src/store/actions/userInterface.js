import * as actionTypes from "./actionTypes";

export const authModalToggle = () => {
    return {
        type:actionTypes.AUTH_MODAL_TOGGLE
    }
}
export const hideSuccessAlert = () => {
    return {
        type:actionTypes.HIDE_SUCCESS_ALERT
    }
}