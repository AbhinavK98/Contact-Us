import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJ8H-E0Ix8DBJGbmFpOcV8Z3ajYHRWG6I",
  authDomain: "contact-us-4216f.firebaseapp.com",
  projectId: "contact-us-4216f",
  storageBucket: "contact-us-4216f.appspot.com",
  messagingSenderId: "458830811265",
  appId: "1:458830811265:web:848cf4b51d9995fe58bd80"
};
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();