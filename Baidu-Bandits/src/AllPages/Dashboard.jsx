import React from 'react';
import { ChakraProvider, Box, Heading, Text, Image, Button, Grid, GridItem } from '@chakra-ui/react';

const Dashboard = () => {
  return (
  <>
  
    <ChakraProvider>
      <Box bg='#12A5BC' w='100%' p={4} color='white' >
        <Grid templateColumns="2fr 1fr" gap={4}>
          <GridItem>
            <Box mt={4}>
              <Text fontSize="lg">Good Morning, User</Text>
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
              src="https://media.istockphoto.com/id/1187773453/photo/pleasant-woamn-practiving-yoga-in-bed.jpg?s=612x612&w=0&k=20&c=VMrZ-yNF5MUJ4RhyQ_2q4O25H2fTggwN9kycOL855JM="
              alt="Healthy Life.png"
              boxSize="100%"
              objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box bg='##F8F8F8' w='100%' p={4} color='Bold'>
      <Grid templateColumns="1fr 1fr 2fr" gap={4}>
       <GridItem bgImage="https://img.freepik.com/premium-psd/3d-sport-nutrition-fitness-supplement-fitness-health-exercise-equipment-icon-isolated-yellow-background-3d-rendering-illustration-clipping-path_696265-2353.jpg?w=1060" bgSize="cover" 
  bgPosition="center" p={2} rounded="md" boxShadow="dark-lg" >
          <Box mt={4} border={0}  >
            <Heading as="h3" size="med" mt={2} >
               Calories
            </Heading>
            <Heading as="h1" size="lg" mt={2}>
                753
            </Heading>
            <Text mt={2}>
                kcal
             </Text>
          </Box>
        </GridItem>
        <GridItem bgImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLq7tKyxTB0F0aMDd-aG4IPf0WWfirhr5P9wEwIbZ3b-Y5mk5C_aY3aSpFDsRh3h91BOU&usqp=CAU"} bgSize="cover" 
          bgPosition="center" p={2} rounded="md" boxShadow="dark-lg" >
          <Box mt={4} border={0} >
            <Heading as="h3" size="med" mt={2} >
               Walk Rate
            </Heading>
            <Heading as="h1" size="lg" mt={2}>
                1000
            </Heading>
            <Text mt={2}>
                Steps
             </Text>

          </Box>
          
        </GridItem>
        <GridItem bgImage={"https://media.istockphoto.com/id/1325168725/vector/young-woman-jane-standing-smiling-pointing-to-timer-time-set-timing-self-organization-day.jpg?s=612x612&w=0&k=20&c=Ovl0WoVrkYdDY1WT1msMGeNnc6VJP8o9XA8hM5uxkgI="} bgSize="cover" 
           bgPosition="center" p={2} rounded="md" boxShadow="dark-lg">
          <Box mt={4} border={0} >
          <Heading as="h3" size="lg" mt={2} mb={20} >
              Fitness Timer
          </Heading>
          <Grid templateColumns="1fr 1fr" gap={4}>
              <GridItem>
                <Heading as="h1" size="lg" mt={5}>
                  Fitness
                </Heading>
                <Text mt={2} size="lg">
                    Score
                </Text>
              </GridItem>
              <GridItem>
                  <Heading mt={6}>60%</Heading>
              </GridItem> 
          </Grid>
          </Box>
          
        </GridItem>
      </Grid>
      <Grid templateColumns="2fr 1fr" gap={4} pt={4}>
      <GridItem  bgSize="cover" 
           bgPosition="center" p={2} rounded="md" boxShadow="dark-lg" >
          <Box mt={4} border={0} >
            <Heading as="h3" size="med" mt={2} >
               Fitnesss Activity
            </Heading>
            <Image src='https://img.freepik.com/premium-vector/computer-diagram-infographics-flat-illustration-computer-diagram-vector-infographics-web_96318-25075.jpg?w=1060'></Image>

          </Box>
        </GridItem>
        <GridItem bgImage={"https://hips.hearstapps.com/hmg-prod/images/runner-feet-running-on-road-closeup-on-shoe-royalty-free-image-918789438-1553785419.jpg"} bgSize="cover" 
           bgPosition="center" p={2} rounded="md" boxShadow="dark-lg" >
          <Box mt={4} border={0} >
            <Heading as="h3" size="med" mt={2} >
               Reports
            </Heading>
            <Heading as="h1" size="lg" mt={2}>
                1000
            </Heading>
            <Text mt={2}>
                Steps
             </Text>

          </Box>
          
        </GridItem>
      </Grid>       
      </Box>
    </ChakraProvider>
  </>
  );
};

export default Dashboard;

