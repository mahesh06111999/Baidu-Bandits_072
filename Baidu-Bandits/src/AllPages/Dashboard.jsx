import React from 'react';
import { ChakraProvider, Box, Heading, Text, Image, Button, Grid, GridItem, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { auth, fetchData } from "../auth/firebase";
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { BarGraph } from '../Components/BarGraphs';
import yoga from '../assets/yoga.png';
import dumble from '../assets/dumble.png';
import walk from '../assets/walk.png';
import walkinggraph from '../assets/walkinggraph.png';
import fitnesstimer from '../assets/fitnesstimer.png';

const Dashboard = () => {
  const dispatch =useDispatch();
  const state = useSelector(state => state);

  const averageCalories = state.calories?.length ? (state.calories.reduce((acc, val) => acc + val, 0) / state.calories.length).toFixed(0) : 0;
  const averageWalk = state.steps?.length ? (state.steps.reduce((acc, val) => acc + parseInt(val, 10), 0) / state.steps.length).toFixed(0) : 0;
  const averageExerciseTime = state.exerciseTime?.length ? (state.exerciseTime.reduce((acc, time) => acc + time, 0) / state.exerciseTime.length) : 0;
  const averageCaloriesBurned = state.calories?.length ? (state.calories.reduce((acc, calories) => acc + calories, 0) / state.calories.length) : 0;
  const totalSteps = state.steps?.length ? state.steps.reduce((acc, steps) => acc + parseInt(steps, 10), 0) : 0;

  const fitnessScore = ((averageExerciseTime / 180) * 0.4) + ((averageCaloriesBurned / 7000) * 0.4) + ((totalSteps / 100000) * 0.2);
  const score = parseInt(fitnessScore * 100);

  if (!auth?.currentUser?.email) {
    return <Navigate replace to="/" />;
  }

  if (auth?.currentUser?.email && state?.refresh) {
    fetchData(dispatch);
  }

  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <ChakraProvider>
        {/* main box */}
        <Box width='63%' maxHeight="100vh" overflow="auto">
          {/* first box */}
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
                <Image
                  src={yoga}
                  alt="Healthy Life.png"
                  boxSize="100%"
                  objectFit="cover"
                />
              </GridItem>
            </Grid>
          </Box>
          {/* second box */}
          <Box bg='#F8F8F8' w='100%' p={4} color='bold'>
            <Grid templateColumns="1fr 1fr 2fr" gap={6}>
              <GridItem p={2} rounded="3xl" boxShadow="xl">
                <Grid templateColumns="1fr 1fr">
                  <GridItem>
                    <Box mt={4}>
                      <Heading as="h3" size="md" mt={2}>
                        Calories
                      </Heading>
                      <Heading as="h1" size="lg" mt={6}>
                        {averageCalories}
                      </Heading>
                      <Text>
                        kcal
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Image mt={4} src={dumble} alt="Dumble" />
                  </GridItem>
                </Grid>
                <Image src={walkinggraph} alt="Graph" />
              </GridItem>
              <GridItem p={2} rounded="3xl" boxShadow="xl">
                <Grid templateColumns="2fr 1fr">
                  <GridItem>
                    <Box mt={4}>
                      <Heading as="h3" size="sm" mt={2}>
                        Walk Rate
                      </Heading>
                      <Heading as="h1" size="lg" mt={6}>
                        {averageWalk}
                      </Heading>
                      <Text>
                        steps
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem>
                    <Image mt={8} src={walk} alt="Walk" />
                  </GridItem>
                </Grid>
                <Image src={walkinggraph} alt="Graph" />
              </GridItem>
              <GridItem p={4} rounded="3xl" boxShadow="xl">
                <Box mt={0}>
                  <Heading as="h3" size="md" mt={2} mb={0}>
                    Fitness Timer
                  </Heading>
                  <Image src={fitnesstimer} alt="Fitness Timer" />
                  <Grid templateColumns="1fr 1fr" gap={4}>
                    <GridItem>
                      <Heading as="h1" size="md" mt={0}>
                        Fitness
                      </Heading>
                      <Text mt={0} size="sm">
                        score
                      </Text>
                    </GridItem>
                    <GridItem>
                      <Heading mt={0}>{score}%</Heading>
                    </GridItem>
                  </Grid>
                </Box>
              </GridItem>
            </Grid>
            <Grid templateColumns="2fr 1fr" gap={6} pt={2} mt={2}>
              <GridItem bgSize="cover" bgPosition="center" p={2} rounded="3xl" boxShadow="xl">
                <Box className="fitness-activity" mt={2}>
                  <Heading as="h3" size="md" mt={0}>
                    Fitness Activity
                  </Heading>
                  {state.exerciseTime && state.calories && state.steps ? (
                    <BarGraph data={{
                      days: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
                      exerciseTime: state.exerciseTime,
                      calories: state.calories,
                      steps: state.steps
                    }} />
                  ) : (
                    <Text>No data available</Text>
                  )}
                </Box>
              </GridItem>
              <GridItem p={2} rounded="3xl" boxShadow="2xl">
                <Heading size={"md"} textAlign={"center"}>Reports</Heading>
                <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
                  <CircularProgress value={40} color='green.400' size='200px'>
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box mt={0}>
                  <Heading as="h1" fontSize="md" mt={2} textAlign="center">
                    Your Reports are not good
                  </Heading>
                  <Text mt={2} fontSize="xs" textAlign="center">
                    Please work on your goals
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
