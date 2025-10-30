const firebaseConfig = {
    apiKey: "AIzaSyAJgqTn3PAjPBL-DPty___cjQ2dparbER8",
    authDomain: "typing-trainer-3dd14.firebaseapp.com",
    databaseURL: "https://typing-trainer-3dd14-default-rtdb.firebaseio.com",
    projectId: "typing-trainer-3dd14",
    storageBucket: "typing-trainer-3dd14.firebasestorage.app",
    messagingSenderId: "755712808582",
    appId: "1:755712808582:web:200b422f1155a6db8fe307",
    measurementId: "G-4ZM0KQL15Y"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();
  