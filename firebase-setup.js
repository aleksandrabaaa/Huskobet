 const _firebaseConfig = {
    apiKey: "AIzaSyCtQqu-fc3jbuuIlSplnGgC1NOAUdBDBtU",
    authDomain: "huskobet-dashboard.firebaseapp.com",
    databaseURL: "https://huskobet-dashboard-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "huskobet-dashboard",
    storageBucket: "huskobet-dashboard.appspot.com",
    messagingSenderId: "246571098672",
    appId: "1:246571098672:web:25ab1382645d84bb9303f5"
  };
  // Initialize Firebase
  firebase.initializeApp(_firebaseConfig);
  const _db = firebase.firestore();