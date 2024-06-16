import React from 'react';


const AdminNavbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload()
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">Admin Dashboard</div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default AdminNavbar; 
