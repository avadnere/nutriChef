import * as actionTypes from "./actionTypes";
import { 
    getNutritionAndCalorieFacts
  } from "./"

import {
    push
} from 'react-router-redux'

export const signIn = (credentials) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS
            })
        }).then(() => {
            dispatch({
                type: actionTypes.AUTH_MODAL_TOGGLE
            })
        }).then(()=>{
            dispatch(getNutritionAndCalorieFacts())
        }).then(() => {
            dispatch(push("/dashboard"))
        }).catch((err) => {
            dispatch({
                type: actionTypes.LOGIN_ERROR,
                err
            })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: actionTypes.SIGNOUT_SUCCESS
            })
        }).catch((err) => {
            dispatch({
                type: actionTypes.LOGIN_ERROR,
                err
            })
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(firestore)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).catch((error)=>{
            dispatch({
                type: actionTypes.SIGNUP_ERROR,
                error
            })
            throw error;
        }).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                height:newUser.height,
                age:newUser.age,
                weight:newUser.weight
            }).then(() => {
                dispatch({
                    type: actionTypes.SIGNUP_SUCCESS
                })
            }).then(() => {
                dispatch({
                    type: actionTypes.AUTH_MODAL_TOGGLE
                })
            }).then(()=>{
                dispatch(getNutritionAndCalorieFacts())
            }).catch((error) => {
                dispatch({
                    type: actionTypes.SIGNUP_ERROR,
                    error
                })
            })
        })
    }
}

export const updatePassword = (oldPassword, newPassword, email) => {
    return async(dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        let reauthenticate = async (oldPassword) => {
          
            let user = firebase.auth().currentUser;
            var cred = firebase.auth.EmailAuthProvider.credential(
                email, oldPassword)
            return user.reauthenticateAndRetrieveDataWithCredential(cred)
           
        }
        try{
            let reauthentic =  await reauthenticate(oldPassword);
            let user = firebase.auth().currentUser;
                    user.updatePassword(newPassword).then(() => {
                        dispatch({
                            type: actionTypes.UPDATE_PASSWORD
                        })
                    }).catch((err) => {
                        dispatch({
                            type: actionTypes.UPDATE_PASSWORD_ERROR,
                            payload: err
                        })
    
                    })
              
        }
        catch(err){
            dispatch({
                type: actionTypes.UPDATE_PASSWORD_ERROR,
                payload: err
            })
        }
       
        
    }
}

export const resetUpdatePasswordFlag = () => {
    return {
        type: actionTypes.RESET_UPDATE_PASSWORD_FLAG
    }
}