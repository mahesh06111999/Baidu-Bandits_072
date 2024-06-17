import React, { useEffect, useState } from 'react'
import { auth, db } from '../../auth/firebase';
import { Navigate } from 'react-router';
import AdminNavbar from './AdminNavbar';
import "./adminstyles.css"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import UserModal from './UserModal';
import { useDisclosure } from '@chakra-ui/react';


const sum = (stepsArray) => {
  return stepsArray.reduce((total, steps) => total + +steps, 0);
};


// const querySnapshot = await getDocs(collection(db, "user"));
// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });

export const AdminDashboard = () => {
  const [ref, setref] = useState(true);
  const [data, setdata] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function updateData(data) {
  updateDoc(doc(db, 'user',data ),{
    delete:true
  } );
  setref(prev=>!prev)
}

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const q = query(collection(db, "user"),where("delete", "==", false))
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => ({ email: doc.id, ...doc.data() }));
        setdata([...users]);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    }
    fetchAllUsers();
  }, [ref]);
  console.log(data);

  const handleClick = (user) => {
    setSelectedUser(user);
    onOpen();
  };

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
      <div className='listcont head'>
        <div className='items'>Name</div>
        <div className='items'>Email</div>
        <div className='items'>Age</div>
        <div className='items'>Gender</div>
        <div className='items'>Height</div>
        <div className='items'>Weight</div>
        <div className='items'>Steps</div>
        <div className='items'>Total Calories</div>

      </div>
        {data.length >0 &&
          data.map((item)=>(
            
          <div key={item.email} className='listcont' >

            <div className='items' onClick={() => handleClick(item)}>{item.fullName}</div>
            <div className='items'>{item.email}</div>
            <div className='items'>{item.age}</div>
            <div className='items'>{item.gender}</div>
            <div className='items'>{item.height}</div>
            <div className='items'>{item.weight}</div>
            <div className='items'>{sum(item.steps || [])}</div>
            <div className='items'><button className='delete-button ' onClick={()=>updateData(item.email)}>DELETE</button></div>
          </div>         
          ))
        }
      </main>
      <UserModal isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </div>
    </>
  )
}
