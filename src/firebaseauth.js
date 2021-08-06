import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD03usRlQoiJbnHXNCFjGhDYggB34b_Jhs",
    authDomain: "coreteamregistration.firebaseapp.com",
    databaseURL:"https://coreteamregistration-default-rtdb.firebaseio.com/",
    projectId: "coreteamregistration",
    storageBucket: "coreteamregistration.appspot.com",
    messagingSenderId: "331006430851",
    appId: "1:331006430851:web:f2554b309ca9b34c7e15b6",
    measurementId: "G-B40LD32LGD"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;