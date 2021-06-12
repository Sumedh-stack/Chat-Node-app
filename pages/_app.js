
import {auth,db} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import * as  EmailValidator from "email-validator"
import Login from '../components/Login';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import firebase from "firebase"

function MyApp({ Component, pageProps }) {


  const [user,loading]=useAuthState(auth);


/***************************Understanding**************************
  function userupdate(){
    if(user){
      db.collection("users").doc(user.uid).set({
    
        email:user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl:user.photoURL,
      },
      {merge:true}
      )
    }
  }
  useEffect(()=>userupdate,[user]);
  ***************************Understanding**************************/


  
 /**********************************GOOD PRACTICE********************************/
  useEffect(()=>{
    if(user){
      db.collection("users").doc(user.uid).set({
    
        email:user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl:user.photoURL,
      },
      {merge:true}
      )
    }
  },[user]);
  /**********************************GOOD PRACTICE********************************/
  if(loading){
    return <Loading/>
  }
  if(!user){
    return <Login/>
  }
  return <Component {...pageProps} />
}

export default MyApp
