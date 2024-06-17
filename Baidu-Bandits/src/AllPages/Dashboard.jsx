import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { auth, fetchData } from '../auth/firebase';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { BarGraph } from '../Components/BarGraphs';
import yoga from '../assets/yoga.png';
import dumble from '../assets/dumble.png';
import walk from '../assets/walk.png';
import walkinggraph from '../assets/walkinggraph.png';
import fitnesstimer from '../assets/fitnesstimer.png';
import image3 from '../assets/image3.png';

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const averageCalories = state.calories?.length
    ? (
        state.calories.reduce((acc, val) => acc + val, 0) /
        state.calories.length
      ).toFixed(0)
    : 0;
  const averageWalk = state.steps?.length
    ? (
        state.steps.reduce((acc, val) => acc + parseInt(val, 10), 0) /
        state.steps.length
      ).toFixed(0)
    : 0;
  const averageExerciseTime = state.exerciseTime?.length
    ? state.exerciseTime.reduce((acc, time) => acc + time, 0) /
      state.exerciseTime.length
    : 0;
  const averageCaloriesBurned = state.calories?.length
    ? state.calories.reduce((acc, calories) => acc + calories, 0) /
      state.calories.length
    : 0;
  const totalSteps = state.steps?.length
    ? state.steps.reduce((acc, steps) => acc + parseInt(steps, 10), 0)
    : 0;

  const fitnessScore =
    (averageExerciseTime / 180) * 0.4 +
    (averageCaloriesBurned / 7000) * 0.4 +
    (totalSteps / 100000) * 0.2;
  const score = parseInt(fitnessScore * 100);

  if (!auth?.currentUser?.email) {
    return <Navigate replace to="/" />;
  }

  if (auth?.currentUser?.email && state?.refresh) {
    fetchData(dispatch);
  }

  // const percentagevalue = Math.ceil(Math.random() * 100);
  // const ref = useRef(percentagevalue);
  // console.log(ref);

  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <ChakraProvider>
        {/* main box */}
        <Box width="63%" maxHeight="100vh" overflow="auto" ml={4} mr={4}>
          {/* first box */}
          <Box
            bg="#12A5BC"
            w="100%"
            p={4}
            color="white"
            borderRadius={'3xl'}
            marginLeft={6}
            marginRight={6}
            marginTop={6}
            maxWidth={'96%'}
            boxShadow="lg"
          >
            <Grid templateColumns="3fr 1fr" gap={4}>
              <GridItem>
                <Box mt={0}>
                  <Text fontSize="lg">Hello, {state.fullName}</Text>
                  <Heading as="h3" size="lg" mt={2}>
                    Welcome Back!
                  </Heading>
                  <Text mt={2}>
                    At FitLife, we understand that fitness ain't
                    one-size-fits-all. That's why we offer a diverse range of
                    programs and resources.
                  </Text>
                  <Button mt={4} colorScheme="teal">
                    Learn More
                  </Button>
                </Box>
              </GridItem>
              <GridItem>
                <Image src={yoga} alt="Healthy Life.png" />
              </GridItem>
            </Grid>
          </Box>
          {/* second box */}

          <Box bg="#FFFFFF" w="100%" p={4} color="bold" ml={4}>
            <Grid templateColumns="1fr 1fr 2fr" gap={6}>
              <div
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  borderRadius: '20px',
                  height: '280px',
                }}
              >
                <GridItem p={3}>
                  <Grid templateColumns="1fr 1fr">
                    <GridItem>
                      <Box mt={4}>
                        <Text fontSize={'xl'} size="md" mt={2} ml={2}>
                          Calories
                        </Text>
                        <div style={{ marginLeft: '20px' }}>
                          <p
                            style={{
                              fontSize: '23px',
                              marginTop: '20px',
                              fontWeight: '600',
                            }}
                          >
                            {averageCalories}
                          </p>
                          <Text color="grey">kcal</Text>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Image mt={4} src={dumble} alt="Dumble" />
                    </GridItem>
                  </Grid>
                  <Image src={image3} alt="Graph" mt={5} />
                </GridItem>
              </div>
              <div
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  borderRadius: '20px',
                  height: '100%',
                }}
              >
                <GridItem p={2}>
                  <Grid templateColumns="2fr 1fr">
                    <GridItem>
                      <Box mt={4}>
                        <Text fontSize={'xl'} size="md" mt={2} ml={2}>
                          Walk Rate
                        </Text>
                        <div style={{ marginLeft: '20px' }}>
                          <p
                            style={{
                              fontSize: '23px',
                              marginTop: '20px',
                              fontWeight: '600',
                            }}
                          >
                            {averageWalk}
                          </p>
                          <Text color="grey">steps</Text>
                        </div>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Image mt={8} src={walk} alt="Walk" />
                    </GridItem>
                  </Grid>
                  <Image src={walkinggraph} alt="Graph" mt={-2} />
                </GridItem>
              </div>
              <div
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  borderRadius: '20px',
                  height: '100%',
                  width: '530px',
                }}
              >
                <GridItem p={4}>
                  <Box mt={0}>
                    <Text fontSize={'xl'} size="md" mt={2} ml={2}>
                      Fitness Timer
                    </Text>

                    <Image src={fitnesstimer} alt="Fitness Timer" mb={4} />
                    <Grid templateColumns="1fr 1fr" gap={4}>
                      <GridItem>
                        <p style={{ fontSize: '18px', fontWeight: '600' }}>
                          Fitness
                        </p>
                        <p style={{ color: 'grey' }}>score</p>
                      </GridItem>
                      <GridItem>
                        <Heading mt={0}>{score}%</Heading>
                      </GridItem>
                    </Grid>
                  </Box>
                </GridItem>
              </div>
            </Grid>
            <Grid templateColumns="2fr 1fr" gap={10} pt={2} mt={2}>
              <div
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  borderRadius: '20px',
                }}
              >
                <GridItem bgSize="cover" bgPosition="center" p={2}>
                  <Box className="fitness-activity" mt={2}>
                    <p
                      style={{
                        fontWeight: '600',
                        marginLeft: '20px',
                        marginBottom: '10px',
                      }}
                    >
                      Fitness Activity
                    </p>
                    {state.exerciseTime && state.calories && state.steps ? (
                      <BarGraph
                        data={{
                          days: [
                            'Sun',
                            'Mon',
                            'Tues',
                            'Wed',
                            'Thur',
                            'Fri',
                            'Sat',
                          ],
                          exerciseTime: state.exerciseTime,
                          calories: state.calories,
                          steps: state.steps,
                        }}
                      />
                    ) : (
                      <Text>No data available</Text>
                    )}
                  </Box>
                </GridItem>
              </div>
              <div
                style={{
                  width: '340px',
                  height: '100%',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  borderRadius: '20px',
                }}
              >
                <GridItem p={2}>
                  <p
                    style={{
                      fontSize: '22px',
                      marginLeft: '10px',
                      marginTop: '10px',
                    }}
                  >
                    Reports
                  </p>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={4}
                  >
                    <CircularProgress value={40} color="green.400" size="200px">
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Box mt={6}>
                    <p
                      style={{
                        color: 'grey',
                        textAlign: 'center',
                        fontSize: '18px',
                      }}
                    >
                      Your Reports are not good
                    </p>
                    <p
                      style={{
                        fontSize: '16px',
                        color: 'grey',
                        textAlign: 'center',
                      }}
                    >
                      Please work on your goals
                    </p>
                  </Box>
                </GridItem>
              </div>
            </Grid>
          </Box>
        </Box>
      </ChakraProvider>
      <RightSideBox />
    </div>
  );
};

export default Dashboard;
