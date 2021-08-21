import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDxinHmmKXBd56JGpFUd_9Ay6T9KhQe9ig",
    authDomain: "bhoga-7c9b9.firebaseapp.com",
    projectId: "bhoga-7c9b9",
    storageBucket: "bhoga-7c9b9.appspot.com",
    messagingSenderId: "994708461052",
    appId: "1:994708461052:web:8516207b59c8a542a48e79",
    measurementId: "G-LXDYQ1H897"
  };
  export const createUserProfileDocument = async(userauth, ...additionaldata) =>{
      if(!userauth) return;
      const userRef = firestore.doc(`/users/${userauth.uid}`);
      const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userauth;
        const createdate = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdate,
                ...additionaldata}
            )
        }
        catch(error){
            console.log(error.message);
        }

    }
        return userRef;
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInwithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;