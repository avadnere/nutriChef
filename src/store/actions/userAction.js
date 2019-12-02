import * as actionTypes from "./actionTypes";


export const updateUserDetail = (userDetail) => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        firestore.collection("users").doc(uid)
            .update({
                height: userDetail.height,
                weight: userDetail.weight,
                age: userDetail.age
            }).then(() => {
                dispatch({
                    type: actionTypes.UPDATE_USER_DETAIL,
                })
            }).catch((err) => {
                dispatch({
                    type: actionTypes.ERROR_UPDATE_USER_DETAIL,
                    payload: err
                });
            })

    }
}
export const resetUserDetailUpdateFlag = () => {
    return {
        type: actionTypes.USER_STATUS_UPDATE_DETAIL_FLAG
    }
}