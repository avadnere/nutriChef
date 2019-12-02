import * as actionTypes from "./actionTypes";

export const getNutritionAndCalorieFacts = () => {
    return (dispatch, getState, {
        getFirestore
    }) => {
        const firestore = getFirestore();
        const state = getState();
        const uid = state.firebase.auth.uid;
        const height = state.firebase.profile.height;
        const weight = state.firebase.profile.weight;
        const calculatedBMI = (weight/Math.pow((height/100),2)).toFixed(2);
        console.log("CALACULATED BMI ",calculatedBMI)
        const bmi = 32;
        let nutritionFact = null;
        let dailyCalorieIntake = 0;
        let weekelyCalorieIntake=0;
        let weekely_meal_plan = null;
        firestore.collection('dietaryPlan').where("bmi_start_index", "<=", bmi).get().then((snapshot) => {
            const doc = snapshot.docs.map((doc) => {
                let data = doc.data();
                if (bmi <= data.bmi_end_index)
                    return doc;
            })
            const data = doc[0].data();
            console.log(data);
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
        }).catch((err) => {
            dispatch({
                type: actionTypes.ERROR_DIETARY_PLAN,
                payload: err
            });
        })

    }
}