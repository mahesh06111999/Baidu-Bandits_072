import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { FETCH } from "../redux/actionTypes";



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
export const db = getFirestore(app);


export function fetchData(dispatch){
  getDoc(doc(db, "user",auth?.currentUser?.email))
      .then(res=>res.data())
      .then(resp=> dispatch({type:FETCH,payload:resp}))
      .catch(err=>console.log(err))
}




function updateData(data){
  updateDoc(doc(db,"user",auth.currentUser.email),data)
}
























// export const fetchUserData = async () => {
//   const userId = auth?.currentUser?.uid;
//   if (!userId) return;

//   try {
//     const docRef = doc(db, 'user', userId);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
      
//     } else {
//       console.log('No such document!');
//     }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//   }
// }












// firebase login
// firebase init
// firebase deploy


// Add a new document in collection "cities"
// const userId=auth?.currentUser?.email
// await setDoc(doc(db, "user","userId" ), {
  
  // calories:[23,45,68,4,7,343,756,345,45,45,45,45,445,636,]
  
  // });
  
  
// const userId=auth?.currentUser?.uid
// console.log(userId);
// // const data=  await getDoc(doc(db, "user",userId ))
// // console.log(data);



