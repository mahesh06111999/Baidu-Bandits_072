import React from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../assets/logo.png';
import { auth } from '../auth/firebase';
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionButton = motion(Button);

const Home = () => {

  return (
    <Box>
      {
      auth?.currentUser?.email && <Navigate replace to={"/dashboard"}/>
      }
      <Flex
        as="nav"
        justify="space-between"
        backgroundColor={'#6ac6e3'}
        p={0}
        alignItems={'center'}
      >
        <Box>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={logo}
              alt="CalFit Logo"
              width={'70px'}
              height={'60px'}
              margin={'5'}
            />

            <p style={{ color: 'white', fontSize: '30px' }}>Be Fit</p>
          </div>
        </Box>
        <Flex gap={4}>
          <Button background="#0255a6" marginRight={'8'} color={'white'}>
            <Link to="/auth">Log In</Link>
          </Button>
        </Flex>
      </Flex>

      <MotionFlex
        direction="column"
        align="center"
        justify="center"
        h="80vh"
        color={'white'}
        bgImage="url('https://img.freepik.com/free-photo/sports-dumbbells-flat-lay-isolated-blue_169016-16704.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=ais_user')"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionHeading
          as="h1"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "Your Personalized Path to a Healthier, Happier Life"
        </MotionHeading>
        <MotionHeading
          as="h2"
          size="lg"
          marginTop={5}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Eat smarter, Live better
        </MotionHeading>
        <MotionButton
          colorScheme="green"
          size="lg"
          mt={6}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <Link to="/auth">Sign Up </Link>
        </MotionButton>
      </MotionFlex>
      {/* //for about section */}
      <Heading as="h1" size="lg" textAlign={'center'} mt={20}>
        Services We Provide
      </Heading>
      <Text size="md" textAlign={'center'} m={5} mb={20}>
        Count your calories, ensure you're meeting nutrient targets, and see
        your progress over time.
      </Text>

      <Flex flexWrap="wrap" justifyContent={'center'} gap={0} pb={'50px'}>
        {/* Box 1 */}

        <Flex
          textAlign="center"
          w={'350px'}
          p={4}
          direction={'column'}
          alignItems={'center'}
        >
          <Image
            src="https://cdn1.cronometer.com/webflow/cronometer-features-11.svg"
            alt="Nutrient Tracker"
            width={'200px'}
          />

          <Heading as="h1" size="sm" my={2}>
            Track your daily Activity
          </Heading>
          <Text fontSize="sm">
            Log your meals and track all your macro and micronutrients.
          </Text>
        </Flex>
        {/*  */}
        <Flex
          textAlign="center"
          w={'350px'}
          p={4}
          direction={'column'}
          alignItems={'center'}
        >
          <Image
            src="https://cdn1.cronometer.com/webflow/cronometer-features-13.svg"
            alt="Nutrient Tracker"
            width={'200px'}
          />

          <Heading as="h1" size="sm" my={2}>
            Personalized Dashboard on Valuable reports and charts
          </Heading>
          <Text fontSize="sm">
            Learn how nutrients and biometrics correlate over time.
          </Text>
        </Flex>
        <Flex
          textAlign="center"
          w={'350px'}
          p={4}
          direction={'column'}
          alignItems={'center'}
        >
          <Image
            src="https://cdn1.cronometer.com/webflow/cronometer-features-12.svg"
            alt="Nutrient Tracker"
            width={'200px'}
          />

          <Heading as="h1" size="sm" my={2}>
            Diet and Nutrition Support
          </Heading>
          <Text fontSize="sm">
            Whether your Keto, Vegan, or on one recommended by your doctor.
          </Text>
        </Flex>
        <Flex
          textAlign="center"
          w={'350px'}
          p={4}
          direction={'column'}
          alignItems={'center'}
        >
          <Image
            src="https://cdn1.cronometer.com/webflow/cronometer-features-14.svg"
            alt="Nutrient Tracker"
            width={'200px'}
          />

          <Heading as="h1" size="sm" my={2}>
            Training Recommendation
          </Heading>
          <Text fontSize="sm">
            We recommended the best training for your needs.
          </Text>
        </Flex>
        <Flex
          textAlign="center"
          w={'350px'}
          p={4}
          direction={'column'}
          alignItems={'center'}
        >
          <Image
            src="https://cdn1.cronometer.com/webflow/cronometer-features-16.svg"
            alt="Nutrient Tracker"
            width={'200px'}
          />

          <Heading as="h1" size="sm" my={2}>
            Mental Health
          </Heading>
          <Text fontSize="sm">
            Talk to our expert doctor's for mental health
          </Text>
        </Flex>
      </Flex>

      {/* Copyright Section */}
      <Box
        textAlign="center"
        py={4}
        backgroundColor={'#6ac6e3'}
        color={'white'}
      >
        <Text>&copy; 2024 Be Fit. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Home;
