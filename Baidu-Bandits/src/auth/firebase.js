import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBz6pYi8-oTCXV_NnIvVaJk_lnG6SXfTS0",
  authDomain: "be-fit-c9a1b.firebaseapp.com",
  projectId: "be-fit-c9a1b",
  storageBucket: "be-fit-c9a1b.appspot.com",
  messagingSenderId: "601925287017",
  appId: "1:601925287017:web:f5f7b9f8f9b6cfc43076f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
// const db?
export const signOff = async()=>{
  try {
      
      await signOut(auth)
      
  }
   catch (error) {
      console.error(error);
  }
  finally{
    console.log("logged. out");
  }
}
// firebase login
// firebase init
// firebase deploy