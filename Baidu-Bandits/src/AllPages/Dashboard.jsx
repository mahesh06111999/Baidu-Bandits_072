import React from 'react';
<<<<<<< HEAD
import { ChakraProvider, Box, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { auth } from "../auth/firebase";
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router';
import yoga from '../assets/yoga.png';
import dumble from '../assets/dumble.png';
import walk from '../assets/walk.png';
import walkinggraph from '../assets/walkinggraph.png';
import fitnesstimer from '../assets/fitnesstimer.png';
import image3 from '../assets/image3.png';
import bargraph from '../assets/bargraph.png';
import report from '../assets/report.png';
=======
import { ChakraProvider, Box, Heading, Text, Image, Button, Grid, GridItem,CircularProgress,CircularProgressLabel } from '@chakra-ui/react';
import image3 from '../assets/image3.png';
import bargraph from '../assets/bargraph.png';
import report from '../assets/report.png'
import {auth, fetchData} from "../auth/firebase";
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router';
import yoga from '../assets/yoga.png'
import dumble from '../assets/dumble.png'
import walk from '../assets/walk.png'
import walkinggraph from '../assets/walkinggraph.png'
import fitnesstimer from '../assets/fitnesstimer.png'
import { useDispatch, useSelector } from 'react-redux';
>>>>>>> 02923e85bdaecddb372e5d8005fbc39feda24353

const Dashboard = () => {
  const state = useSelector(state => state);
  const weeklyData = useSelector(state => state.weeklyData);

  if (!auth?.currentUser?.email) return <Navigate replace to={"/"} />;

  const totalCaloriesBurned = Object.values(weeklyData).reduce((acc, day) => {
    return day.caloriesBurned ? acc + parseInt(day.caloriesBurned, 10) : acc;
  }, 0);

  const totalStepsTaken = Object.values(weeklyData).reduce((acc, day) => {
    const steps = day.stepsTaken ? parseInt(day.stepsTaken.replace(/\D/g, ''), 10) : 0;
    return acc + steps;
  }, 0);

<<<<<<< HEAD
  return (
=======
const Dashboard = () => { 
  const dispatch = useDispatch();
  const state = useSelector(state=>state) 

    
  if(auth?.currentUser?.email && state.refresh){
    console.log("fetch working.....");
    fetchData(dispatch)
  }
  return (
    <>
    {
      auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
    }
    {
      (auth?.currentUser?.email && state.admin) && <Navigate replace to={"/admindashboard"}/>
    }

>>>>>>> 02923e85bdaecddb372e5d8005fbc39feda24353
    <div style={{ display: 'flex' }}>
      <Navbar />
      <ChakraProvider>
        <Box width='63%' maxHeight="100vh" overflow="auto">
          <Box bg='#12A5BC' w='100%' p={4} color='white' borderRadius={"3xl"} marginLeft={4} marginRight={4} marginTop={6} maxWidth={"96%"} boxShadow="lg">
            <Grid templateColumns="2fr 1fr" gap={4}>
              <GridItem>
                <Box mt={0}>
                  <Text fontSize="lg">Hello, User</Text>
                  <Heading as="h3" size="lg" mt={2}>
                    Welcome Back!
                  </Heading>
                  <Text mt={2}>
                    At FitLife, we understand that fitness ain't one-size-fits-all. That's why we offer a diverse range of programs and resources.
                  </Text>
                  <Button mt={4} colorScheme="teal">Learn More</Button>
                </Box>
              </GridItem>
              <GridItem>
                <Image src={yoga} alt="Healthy Life.png" boxSize="100%" objectFit="cover" />
              </GridItem>
            </Grid>
          </Box>

          <Box bg='#F8F8F8' w='100%' p={4} color='Bold'>
            <Grid templateColumns="1fr 1fr 2fr" gap={6}>
              <GridItem p={2} rounded="3xl" boxShadow="xl">
                <Grid templateColumns="1fr 1fr">
                  <GridItem>
                    <Box mt={4} border={0}>
                      <Heading as="h3" size="med" mt={2}>
                        Calories
                      </Heading>
                      <Heading as="h1" size="lg" mt={10}>
                        {totalCaloriesBurned}
                      </Heading>
                      <Text>kcal</Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Image mt={4} src={dumble}></Image>
                  </GridItem>
                </Grid>
                <Image src={image3}></Image>
              </GridItem>
              <GridItem p={2} rounded="3xl" boxShadow="xl">
                <Grid templateColumns="1fr 1fr">
                  <GridItem>
                    <Box mt={4} border={0}>
                      <Heading as="h3" size="med" mt={2}>
                        Walk Rate
                      </Heading>
                      <Heading as="h1" size="lg" mt={10}>
                        {totalStepsTaken}
                      </Heading>
                      <Text>steps</Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Image mt={0} src={walk}></Image>
                  </GridItem>
                </Grid>
                <Image src={walkinggraph}></Image>
              </GridItem>
              <GridItem p={4} rounded="3xl" boxShadow="xl">
                <Box mt={0} border={0}>
                  <Heading as="h3" size="med" mt={2} mb={0}>
                    Fitness Timer
                  </Heading>
                  <Image src={fitnesstimer}></Image>
                  <Grid templateColumns="1fr 1fr" gap={4}>
                    <GridItem>
                      <Heading as="h1" size="med" mt={0}>
                        Fitness
                      </Heading>
                      <Text mt={0} size="sm">
                        Score
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Heading mt={0}>60%</Heading>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>
            </Grid>
            <Grid templateColumns="2fr 1fr" gap={6} pt={2} marginTop={2}>
              <GridItem bgSize="cover" bgPosition="center" p={2} rounded="3xl" boxShadow="xl">
                <Box mt={4} border={0}>
                  <Heading as="h3" size="med" mt={0}>
                    Fitness Activity
                  </Heading>
                  <Image src={bargraph}></Image>
                </Box>
              </GridItem>
              <GridItem p={2} rounded="3xl" boxShadow="2xl">
                <Heading size={"md"}>Reports</Heading>
                <Box mt={0} border={0}>
                  <Image src={report}></Image>
                  <Heading as="h1" fontSize="md" mt={2} textAlign="center">
                    Your Reports are not good
                  </Heading>
                  <Text mt={2} fontSize="xs" textAlign="center">
                    Please work on your goal's
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </Box>

          
        </Box>
      </ChakraProvider>
      <RightSideBox />
    </div>
  );
};

export default Dashboard;
