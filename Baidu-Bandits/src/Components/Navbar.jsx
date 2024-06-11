import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        paddingLeft: '10px',
        background: '#fafafa',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          gap: '50px',
          fontSize: '20px',
        }}
      >
        <h1>Logo</h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          Dashboard
        </Link>
        <Link
          to="/activitytracker"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Activity Tracker
        </Link>
        <Link
          to="/doctorappointment"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Doctor Appointment
        </Link>
        <Link
          to="/mentalwellness"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Mental Wellness
        </Link>
        <Link
          to="/nutrition"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Nutrition
        </Link>
        <Link
          to="/personaltraining"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Personal Training
        </Link>
      </div>
      <div style={{ marginBottom: '20%' }}>
        <button
          style={{ fontSize: '25px', border: 'none', background: 'none' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
