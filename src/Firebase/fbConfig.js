import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyBvKq7y-1_gMB6CAapM2MJ_cGHr-v8t3MY",
    authDomain: "nutrichef-dbcdb.firebaseapp.com",
    databaseURL: "https://nutrichef-dbcdb.firebaseio.com",
    projectId: "nutrichef-dbcdb",
    storageBucket: "nutrichef-dbcdb.appspot.com",
    messagingSenderId:"994336316238",
    appId:"1:994336316238:web:41935885f198d66c2e1c1f",
    measurementId:"G-PGFP5WNNE0"
})
firebase.firestore();

export default app;