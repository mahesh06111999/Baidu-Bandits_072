import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../auth/firebase';


const AdminNavbar = () => {
  const signOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
    
      console.log("signedOut");
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">Admin Dashboard</div>
      <button className="logout-button" onClick={signOff}>Logout</button>
    </nav>
  );
};

export default AdminNavbar; 
