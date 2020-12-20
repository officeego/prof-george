import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDlHvhoTBxK9miK1VyshSZoNJi2piaKl2c",
    // authDomain: "drgeorge-project-contact.firebaseapp.com",
    // projectId: "drgeorge-project-contact",
    // storageBucket: "drgeorge-project-contact.appspot.",
    // messagingSenderId: "780262988867",com
    // appId: "1:780262988867:web:7cd1b5320006a798f4c8f6"
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
    
})

var db = firebaseApp.firestore();

export { db };


