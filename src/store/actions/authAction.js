import * as actionTypes from "./actionTypes";
import { push } from 'react-router-redux'

export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:actionTypes.LOGIN_SUCCESS})
        }).then(()=>{
            dispatch({type:actionTypes.AUTH_MODAL_TOGGLE})
        }).then(()=>{
            dispatch(push("/dashboard"))
        }).catch((err)=>{
            dispatch({type:actionTypes.LOGIN_ERROR, err})
        })
    }
}

export const signOut = () => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:actionTypes.SIGNOUT_SUCCESS})
        }).catch((err)=>{
            dispatch({type:actionTypes.LOGIN_ERROR, err})
        })
    }
}

export const signUp = (newUser) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(firestore)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response)=>{
            return firestore.collection('users').doc(response.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
            }).then(()=>{
                dispatch({type:actionTypes.SIGNUP_SUCCESS})
            }).then(()=>{
                dispatch({type:actionTypes.AUTH_MODAL_TOGGLE})
            }).catch((error)=>{
                dispatch({type:actionTypes.SIGNUP_ERROR,error})
            })
        })
    }
} 