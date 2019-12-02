import * as actionTypes from "./actionTypes";
import moment from "moment"
import {
    getUNIXTimestamp,
    currentWeekArray,
    filterRange

} from "../utility"

export const recordCalorie = (calorieDetail) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        let calorieRef = firestore.collection('Calorie').where("uid", "==", uid).where("meal_intake_date", "==", getUNIXTimestamp(calorieDetail.meal_intake_date));
        calorieRef.get().then((snapshot) => {
            let data = snapshot.docs.map(doc => doc.data())[0];
            let docId = snapshot.docs.map(doc => doc.id)[0];
            if (data != undefined || data != null) {
                let meals = (data.meals).concat([calorieDetail])
                firestore.collection('Calorie').doc(docId).update({
                    "meals": meals
                })
            } else {
                firestore.collection('Calorie').add({
                    uid: uid,
                    meals: [calorieDetail],
                    createdAt: new Date(),
                    meal_intake_date: getUNIXTimestamp(calorieDetail.meal_intake_date)
                })
            }
        }).then(() => {
            firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
                let data = snapshot.docs.map((doc) => {
                    return {
                        "docData": doc.data(),
                        "docId": doc.id,
                    }
                })
                dispatch({
                    type: actionTypes.UPDATE_CALORIE,
                    payload: data
                })
            })
        }).then(() => {
            const current_date = moment().format("YYYY-MM-DD");
            firestore.collection('Calorie').where("uid", "==", uid).where("meal_intake_date", "==", getUNIXTimestamp(current_date)).get().then((snapshot) => {
                let currentDayCalorieIntake = snapshot.docs.map((doc) => {
                    let data = doc.data();
                    let calorieIntake = 0
                    data.meals.map((meal) => {
                        calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                    })
                    return calorieIntake;
                });
                let current_day_calorie_intake_percent = (currentDayCalorieIntake );
                dispatch({
                    type: actionTypes.GET_CURRENT_DAY_CALORIE_INTAKE,
                    payload: current_day_calorie_intake_percent
                })
            });
        }).then(() => {
            const state = getState();
            const uid = state.firebase.auth.uid;
            const current_date = moment().format("YYYY-MM-DD");
            const unixWeekStartDay = getUNIXTimestamp(currentWeekArray()[0]);
            const currentUnixDate = getUNIXTimestamp(current_date);
            firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
                let calorieIntake = 0
                let filterDoc = filterRange(snapshot.docs, "meal_intake_date", unixWeekStartDay, currentUnixDate)
                filterDoc.map((doc) => {
                    let data = doc.data();
                    data.meals.map((meal) => {
                        calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                    })
                });
                let weekely_calorie_intake_percentage = (calorieIntake);
                dispatch({
                    type: actionTypes.WEEKELY_CALORIE_INTAKE_PERCENTAGE,
                    payload: weekely_calorie_intake_percentage
                })
            })
        }).then(() => {
            dispatch({
                type: actionTypes.SHOW_SUCCESS_ALERT
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: actionTypes.UPDATE_CALORIE_ERROR,
                payload: err
            });
        })
    }
};

export const getIntakeCalorie = () => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
            let data = snapshot.docs.map((doc) => {
                return {
                    "docData": doc.data(),
                    "docId": doc.id,
                }
            });
            dispatch({
                type: actionTypes.GET_INTAKE_CALORIE,
                payload: data
            })
        }).catch((err) => {
            dispatch({
                type: actionTypes.ERROR_GET_INTAKE_CALORIE,
                payload: err
            });
        })

    }
};

export const getCurrentDayCalorieIntake = () => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        console.table(state.dietaryPlan)
        const uid = state.firebase.auth.uid;
        const current_date = moment().format("YYYY-MM-DD");
        firestore.collection('Calorie').where("uid", "==", uid).where("meal_intake_date", "==", getUNIXTimestamp(current_date)).get().then((snapshot) => {
            let currentDayCalorieIntake = snapshot.docs.map((doc) => {
                let data = doc.data();
                let calorieIntake = 0
                data.meals.map((meal) => {
                    calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                })
                return calorieIntake;
            });
            let current_day_calorie_intake_percent = (currentDayCalorieIntake);
            dispatch({
                type: actionTypes.GET_CURRENT_DAY_CALORIE_INTAKE,
                payload: current_day_calorie_intake_percent
            })
        }).catch((err) => {
            dispatch({
                type: actionTypes.ERROR_GET_CURRENT_DAY_CALORIE_INTAKE,
                payload: err
            });
        })

    }
}

export const getCurrentWeekCalorieIntake = () => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        const current_date = moment().format("YYYY-MM-DD");
        const unixWeekStartDay = getUNIXTimestamp(currentWeekArray()[0]);
        const currentUnixDate = getUNIXTimestamp(current_date);
        firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
            let calorieIntake = 0
            let filterDoc = filterRange(snapshot.docs, "meal_intake_date", unixWeekStartDay, currentUnixDate)
            filterDoc.map((doc) => {
                let data = doc.data();
                data.meals.map((meal) => {
                    calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                })
            });
            let weekely_calorie_intake_percentage = calorieIntake;
            dispatch({
                type: actionTypes.WEEKELY_CALORIE_INTAKE_PERCENTAGE,
                payload: weekely_calorie_intake_percentage
            })
        }).catch((err) => {
            dispatch({
                type: actionTypes.ERROR_GET_CURRENT_DAY_CALORIE_INTAKE,
                payload: err
            });
        })

    }
}

export const deleteCalorie = (meal_id) => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        firestore.collection('Calorie').doc(meal_id).delete().then(() => {
            firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
                let data = snapshot.docs.map((doc) => {
                    return {
                        "docData": doc.data(),
                        "docId": doc.id,
                    }
                })
                dispatch({
                    type: actionTypes.UPDATE_CALORIE,
                    payload: data
                })
            })
        }).then(() => {
            const current_date = moment().format("YYYY-MM-DD");
            firestore.collection('Calorie').where("uid", "==", uid).where("meal_intake_date", "==", getUNIXTimestamp(current_date)).get().then((snapshot) => {
                let currentDayCalorieIntake = snapshot.docs.map((doc) => {
                    let data = doc.data();
                    let calorieIntake = 0
                    data.meals.map((meal) => {
                        calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                    })
                    return calorieIntake;
                });
                let current_day_calorie_intake_percent = (currentDayCalorieIntake);
                dispatch({
                    type: actionTypes.GET_CURRENT_DAY_CALORIE_INTAKE,
                    payload: current_day_calorie_intake_percent
                })
            });
        }).then(() => {
            const current_date = moment().format("YYYY-MM-DD");
            const unixWeekStartDay = getUNIXTimestamp(currentWeekArray()[0]);
            const currentUnixDate = getUNIXTimestamp(current_date);
            firestore.collection('Calorie').where("uid", "==", uid).get().then((snapshot) => {
                let calorieIntake = 0
                let filterDoc = filterRange(snapshot.docs, "meal_intake_date", unixWeekStartDay, currentUnixDate)
                filterDoc.map((doc) => {
                    let data = doc.data();
                    data.meals.map((meal) => {
                        calorieIntake = calorieIntake + parseInt(meal.calorie_intake);
                    })
                });
                let weekely_calorie_intake_percentage = calorieIntake;
                dispatch({
                    type: actionTypes.WEEKELY_CALORIE_INTAKE_PERCENTAGE,
                    payload: weekely_calorie_intake_percentage
                })
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: actionTypes.UPDATE_CALORIE_ERROR,
                payload: err
            });
        })
    }
};