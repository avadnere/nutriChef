import * as actionTypes from "./actionTypes";


export const updateUserDetail = (userDetail) => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        const height = state.firebase.profile.height;
        const weight = state.firebase.profile.weight;
        let calculatedBMI = Math.floor(weight / Math.pow((height / 100), 2));

        let nutritionFact = null;
        let dailyCalorieIntake = 0;
        let weekelyCalorieIntake = 0;
        let weekely_meal_plan = null;
        let bmi = calculatedBMI || 26;
        firestore.collection("users").doc(uid)
            .update({
                height: userDetail.height,
                weight: userDetail.weight,
                age: userDetail.age
            }).then(() => {
                firestore.collection('dietaryPlan').where("bmi_start_index", "<=", bmi).get().then((snapshot) => {

                    const doc = snapshot.docs.filter((doc) => {
                        let data = doc.data();

                        if (bmi <= data.bmi_end_index) {
                            return doc;
                        }

                    })
                    const data = doc[0].data();
                    nutritionFact = data.recommended_nutrition_intake;
                    dailyCalorieIntake = data.daily_calorie_intake;
                    weekely_meal_plan = data.weekely_meal_plan;
                    weekelyCalorieIntake = data.weekely_calorie_intake

                }).then(() => {
                    dispatch({
                        type: actionTypes.GET_NUTRITION_AND_CALORIE_FACTS,
                        payload: {
                            "nutritionFact": nutritionFact,
                            "dailyCalorieIntake": dailyCalorieIntake,
                            "weekely_meal_plan":weekely_meal_plan,
                            "weekelyCalorieIntake":weekelyCalorieIntake
                        }
                    })
                }).then(() => {
                    dispatch({
                        type: actionTypes.UPDATE_USER_DETAIL,
                        payload:userDetail
                    })
    
                }).catch((err) => {
                    dispatch({
                        type: actionTypes.ERROR_DIETARY_PLAN,
                        payload: err
                    });
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