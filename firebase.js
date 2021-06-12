 import firebase from "firebase";

 const firebaseConfig = {
  apiKey: "AIzaSyCb6B5FPkjlg86d-_Bpl3y_Vrec9FSTW5M",
  authDomain: "whatsapp-clone-52775.firebaseapp.com",
  projectId: "whatsapp-clone-52775",
  storageBucket: "whatsapp-clone-52775.appspot.com",
  messagingSenderId: "571084566136",
  appId: "1:571084566136:web:7165acf80428b6ea3ac78d"
};

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();
  
 const db=app.firestore();
  const auth=app.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,db,provider};