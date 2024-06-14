// ActivityTracker

import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  Fade,
  Center,
} from '@chakra-ui/react';


import { motion } from 'framer-motion';
import DynamicForm from '../Components/DynamicForm';
import RightSideBox from '../Components/RightSideBox';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router';
import { auth, db } from '../auth/firebase';
import { doc, getDoc } from 'firebase/firestore';





const ActivityTracker = () => {
  const [showActivities, setShowActivities] = useState(false);

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
          {!showActivities ? (
            <>
              <Fade in={!showActivities}>
                <Box textAlign="center" py={10} px={6} p="20px">
                  <Heading as="h2" size="xl" mb={4}  bgColor="#11a5bc"
                    color="white">
                    Welcome to Activity Tracker
                  </Heading>
                  <Center>
                    <Image
                      src="https://img.freepik.com/free-vector/workout-tracker-app_23-2148677118.jpg?t=st=1718350441~exp=1718354041~hmac=2d2afd64e5a003cf4d0a2f06c5992494b5de6204be0af06e85304428e446971e&w=1380"
                      alt="Activity Tracker"
                     maxW="600px"
                      className="image-hover"
                    />
                  </Center>
                  <Text fontSize="lg" mb={6}
                  mt={10}>
                    Track your physical activities and stay motivated!
                  </Text>

                  <Button
                    bgColor="#11a5bc"
                    color="white"
                    size="lg"
                    onClick={() => setShowActivities(true)}
                    as={motion.button}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Fade>
            </>
          ) : (
            <Fade in={showActivities}>
              <DynamicForm />
            </Fade>
          )}

          
        </Box>
        <RightSideBox />
      </div>
    </>
  );
};

export default ActivityTracker;
