
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBcwwHUqwKr-qlvlf8rnqCUe5y0Oe_8izU",
    authDomain: "linkedin-clone-react-7dc18.firebaseapp.com",
    projectId: "linkedin-clone-react-7dc18",
    storageBucket: "linkedin-clone-react-7dc18.appspot.com",
    messagingSenderId: "733466251616",
    appId: "1:733466251616:web:bb07655faec01ea2190e05",
    measurementId: "G-LWZDZ9FZFR"
  };
  

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth=firebase.auth()

  export  {db,auth};
  