import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfuc-YI7121ZA2AgP-BGNj4Dn3XMo3QhA",
  authDomain: "instagram-reels-21ae9.firebaseapp.com",
  projectId: "instagram-reels-21ae9",
  storageBucket: "instagram-reels-21ae9.appspot.com",
  messagingSenderId: "556597912686",
  appId: "1:556597912686:web:9e1c3a7a00e8682198f27f",
  measurementId: "G-P9VKP93ZZS"
}; 

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  export default db;