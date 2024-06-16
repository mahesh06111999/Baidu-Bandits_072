import React, { useEffect, useState } from 'react'
import { auth, db } from '../../auth/firebase';
import { Navigate } from 'react-router';
import AdminNavbar from './AdminNavbar';
import "./adminstyles.css"
import { collection, doc, getDocs } from "firebase/firestore";


// const querySnapshot = await getDocs(collection(db, "user"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });

export const AdminDashboard = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "user"));
        const users = querySnapshot.docs.map(doc => ({ email: doc.id, ...doc.data() }));
        console.log(users);
        setdata(pre=>[...pre,...users]);
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally{
        console.log(data);
      }
    }

    fetchAllUsers();
  }, []);
  console.log(data);

    
  return (
    <>
    {
      auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
    }
    <div className="container">
      <header>
        < AdminNavbar/>
      </header>
      <main className="main-content">
        {
          data.map((item)=>(
      
              <div key={doc.id}>{item.id}</div>
          
          ))
        }
      </main>
    </div>
    </>
  )
}
