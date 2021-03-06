import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBFN_8g1-gpaMM2KFQkklffXTWkoEm4vVI",
   authDomain: "az-store-naimbiswas.firebaseapp.com",
   projectId: "az-store-naimbiswas",
   storageBucket: "az-store-naimbiswas.appspot.com",
   messagingSenderId: "844893942492",
   appId: "1:844893942492:web:312abcbafaa1d9856afa19",
   measurementId: "G-R4RB3PC8V8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth } 