import  { useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import dashboard from '../assets/icons/dash.gif';
import activity from '../assets/icons/AT.gif';
import doc from '../assets/icons/ha.gif';
import mental from '../assets/mental-health-svgrepo-com.svg';
import nutri from '../assets/icons/nutri.gif';
import gym from '../assets/icons/exer.gif';
import logout from '../assets/logout-svgrepo-com.svg';
import { auth } from '../auth/firebase';
import { signOut } from 'firebase/auth';
import home from '../assets/icons/home.gif';

const Navbar = () => {
  const [ref, setref] = useState(true);
  const location = useLocation();

  const signOff = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      setref(ref=>!ref)
      console.log("signedOut");
    }
  };

  const getLinkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '7px',
    borderRadius: '10px',
    backgroundColor: location.pathname === path ? '#11a5bc' : 'transparent',
    color: location.pathname === path ? '#ffffff' : '#adb3bc',
  });

  return (
  <>
  {
      auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
    }
      <div
      style={{
        position: 'sticky',
        top: 0,
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        background: '#fafafa',
        padding: '5px',
        overflowY: 'auto',  // Enable scrollbar
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          gap: '25px',
          fontSize: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            padding: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '30px',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/a5d03133386945.56a96ee0bb381.png"
              alt=""
              width="50px"
            />
            <span style={{ color: '#64748b' }}>Be Fit</span>
          </div>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/')}>
            <img src={home} alt="" width="35px" />
            Home
          </div>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/dashboard')}>
            <img src={dashboard} alt="" width="35px" />
            Dashboard
          </div>
        </Link>
        <Link to="/activitytracker" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/activitytracker')}>
            <img src={activity} alt="" width="35px" />
            Activity Tracker
          </div>
        </Link>
        <Link to="/doctorappointment" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/doctorappointment')}>
            <img src={doc} alt="" width="35px" />
            Doctor Appointment
          </div>
        </Link>
        <Link to="/mentalwellness" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/mentalwellness')}>
            <img src={mental} alt="" width="35px" />
            Mental Wellness
          </div>
        </Link>
        <Link to="/nutrition" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/nutrition')}>
            <img src={nutri} alt="" width="35px" />
            Nutrition
          </div>
        </Link>
        <Link to="/personaltraining" style={{ textDecoration: 'none' }}>
          <div style={getLinkStyle('/personaltraining')}>
            <img src={gym} alt="" width="35px" />
            Personal Training
          </div>
        </Link>
      </div>
      <div style={{ marginBottom: '7%', marginLeft: '15px' }}>
        <button
          style={{
            fontSize: '25px',
            border: 'none',
            background: 'none',
            color: '#adb3bc',
          }}
          onClick={signOff}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '5px',
              borderRadius: '10px',
            }}
          >
            <img src={logout} alt="" width="30px" />
            Logout
          </div>
        </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
