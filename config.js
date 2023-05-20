import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyDtdDUVicxMEiYLbWH0Gk1D7h4dFn1Yv9Q",
    authDomain: "class-78-aditya-17692.firebaseapp.com",
    projectId: "class-78-aditya-17692",
    storageBucket: "class-78-aditya-17692.appspot.com",
    messagingSenderId: "1080328070210",
    appId: "1:1080328070210:web:b128183a9c626598ec39db"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


