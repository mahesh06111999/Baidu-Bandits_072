// ActivityTracker.jsx

import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Progress,
  VStack,
  Button,
  Fade,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Input,
  Select,
} from '@chakra-ui/react';
// import ExerciseRecommendation from './ExerciseRecommendation';

import { motion } from 'framer-motion';
import DynamicForm from '../Components/DynamicForm';
import RightSideBox from '../Components/RightSideBox';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router';
import { auth } from '../auth/firebase';

// import './animations.css';  // Import the CSS animations



const ActivityTracker = () => {
  const [showActivities, setShowActivities] = useState(false);

  // user data fatch.................
  // const [data, setdata] = useState();
  // const [loading, setLoading] = useState(true);

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

  // for form
  // const [showForm, setShowForm] = useState(true);
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const handleShowActivities = () => {
  //   setShowActivities(true);
  //   setShowForm(false); // Set showForm to false when showing activities
  // };
  // const questions = [
  //   {
  //     label: 'Select your daily routine:',
  //     options: ['Sedentary', 'Moderate', 'Active', 'Athlete', 'Other'],
  //     value: 'routine',
  //   },
  //   {
  //     label: 'Select your exercise habits:',
  //     options: ['None', 'Light', 'Moderate', 'Intense', 'Athlete'],
  //     value: 'exercise',
  //   },
  //   {
  //     label: 'Select your diet:',
  //     options: ['Unhealthy', 'Balanced', 'Vegetarian', 'Vegan', 'Keto'],
  //     value: 'diet',
  //   },
  //   {
  //     label: 'Select your professional activities:',
  //     options: ['Sedentary', 'Moderate', 'Active', 'Athlete', 'Other'],
  //     value: 'professional',
  //   },
  // ];
  // const [formData, setFormData] = useState({
  //   routine: '',
  //   exercise: '',
  //   diet: '',
  //   professional: '',
  // });

  // const handleSelectChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Move to the next question
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Process form data and display recommendations
  //   setShowForm(false);
  // };
  
  return (
    <>
      {auth?.currentUser?.email === undefined && <Navigate replace to={'/'} />}

      <div style={{ display: 'flex' }}>
        <Navbar />
        <Box width="63%" p={5} height="100vh" overflow="auto">
          {!showActivities ? (
            <>
              <Fade in={!showActivities}>
                <Box textAlign="center" py={10} px={6}>
                  <Heading as="h2" size="xl" mb={4}>
                    Welcome to Activity Tracker
                  </Heading>
                  <Center>
                    <Image
                      src="https://img.freepik.com/free-vector/sport-fitness-tracker-abstract-concept-vector-illustration-activity-band-health-monitor-wrist-worn-device-application-running-cycling-every-day-training-abstract-metaphor_335657-1454.jpg?t=st=1718180351~exp=1718183951~hmac=48849305ff35333c08fb67262664b70e984691795e8c383900c5b37e1e2d9b9e&w=740"
                      alt="Activity Tracker"
                      boxSize="300px"
                      className="image-hover"
                    />
                  </Center>
                  <Text fontSize="lg" mb={6}>
                    Track your physical activities and stay motivated!
                  </Text>

                  <Button
                    colorScheme="teal"
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
