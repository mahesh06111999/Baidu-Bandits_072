// ActivityTracker

import { useEffect, useState } from 'react';
import {
  Box,
  // Heading,
  // Image,
  // Text,
  // Button,
  // Fade,
  // Center,
} from '@chakra-ui/react';


// import { motion } from 'framer-motion';
import DynamicForm from '../Components/DynamicForm';
import RightSideBox from '../Components/RightSideBox';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router';
import { auth, db } from '../auth/firebase';
import { doc, getDoc } from 'firebase/firestore';





const ActivityTracker = () => {
  // const [showActivities, setShowActivities] = useState(false);

  // user data fatch.................
  // const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (auth?.currentUser?.uid) {
          const raw = await getDoc(doc(db, 'user', userId));
          const solved = raw.data();
          console.log(solved);
          // setdata(solved);
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
        <Box width="63%" p={5} height="100vh" overflow="auto">
          <DynamicForm />  
        </Box>
        <RightSideBox />
      </div>
    </>
  );
};

export default ActivityTracker;
