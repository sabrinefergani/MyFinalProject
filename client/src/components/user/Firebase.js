import firebase from 'firebase/compat/app';

import "firebase/compat/auth";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFCpTlP06Qw4caxNb5w7pL7UZnmkRTqH0",
    authDomain: "myfinalproject-e7dcb.firebaseapp.com",
    projectId: "myfinalproject-e7dcb",
    storageBucket: "myfinalproject-e7dcb.appspot.com",
    messagingSenderId: "503105405142",
    appId: "1:503105405142:web:e66926683cc2a5e326c977",
    measurementId: "G-970V0GCENZ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // Exporting the auth variable

export { firebase, auth }; // Exporting the firebase and auth variables
