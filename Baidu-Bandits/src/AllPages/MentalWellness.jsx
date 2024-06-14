
import React, { useState, useEffect } from 'react';

import { auth } from '../auth/firebase';
import { Navigate } from 'react-router';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';

console.log(auth?.currentUser?.uid);

const MentalWellness = () => {
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
      {auth?.currentUser?.email === undefined && <Navigate replace to={'/'} />}
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ width: '63%' }}></div>
        <RightSideBox />
      </div>
    </>
  );
};

export default MentalWellness;
