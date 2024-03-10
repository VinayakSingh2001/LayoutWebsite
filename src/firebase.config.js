// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCVy7td5xbUfuTEpXL_DW2ABQRRnEKe9pk",
//   authDomain: "abcd-5eaff.firebaseapp.com",
//   databaseURL: "https://abcd-5eaff-default-rtdb.firebaseio.com",
//   projectId: "abcd-5eaff",
//   storageBucket: "abcd-5eaff.appspot.com",
//   messagingSenderId: "107139390660",
//   appId: "1:107139390660:web:e122a02c8b2db430bbfd91",
//   measurementId: "G-0NZVRQ2TT3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export  {app,auth};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAyhds8_Gjh9DVK0ZKFHhbVoLgp1OJtvY",
  authDomain: "gita-readers-club.firebaseapp.com",
  databaseURL: "https://gita-readers-club-default-rtdb.firebaseio.com",
  projectId: "gita-readers-club",
  storageBucket: "gita-readers-club.appspot.com",
  messagingSenderId: "258128079988",
  appId: "1:258128079988:web:6ec502b6886c6e7926f521",
  measurementId: "G-40J11VSBBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth};