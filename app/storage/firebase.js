import firebase from "firebase";

const config = {
   apiKey: "AIzaSyDApnmSK2Fpu6BDWBZuCfCyZXmuKzOG2dE",
   authDomain: "rejection-80735.firebaseapp.com",
   databaseURL: "https://rejection-80735.firebaseio.com",
   projectId: "rejection-80735",
   storageBucket: "rejection-80735.appspot.com",
   messagingSenderId: "282714843125"
 };

firebase.initializeApp(config)

export default firebase;

export const database = firebase.database();