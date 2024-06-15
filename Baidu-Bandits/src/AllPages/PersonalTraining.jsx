import React, { useEffect, useState } from 'react';
import { auth, db } from '../auth/firebase';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import Training from '../Components/Training';

const PersonalTraining = () => {
  // user data fatch.................
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (auth?.currentUser?.uid) {
          const raw = await getDoc(doc(db, 'user', userId));
          const solved = raw.data();
          console.log(solved);
          setdata(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);
  return (
    <>
      <>
        {auth?.currentUser?.email === undefined && (
          <Navigate replace to={'/'} />
        )}
        <div style={{ display: 'flex' }}>
          <Navbar />
          <div style={{ width: '63%' }}>
            <Training />
          </div>
          <RightSideBox />
        </div>
      </>
    </>
  );
};

export default PersonalTraining;
