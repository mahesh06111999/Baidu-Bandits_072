import React, { useState } from 'react';
import { Box, Button, Center, Flex, Input, Text, Heading, VStack, useColorModeValue, useToast, FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import { auth, db } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';
import { Navigate } from 'react-router';

export const SignUp = ({ formData }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const toast = useToast();

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length > 6;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === '' || validateEmail(e.target.value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email format');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === '' || validatePassword(e.target.value)) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be more than 6 characters');
    }
  };

  const signUp = async () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      toast({
        title: "Error",
        description: "Please correct the highlighted errors",
        status: "error",
        duration: 5000,
        isClosable: true
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Signed In",
        description: "You have successfully signed in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setEmail('');
      setPassword('');
      setData();      
    }
  };

  const setData = async()=>{
    const userId=auth?.currentUser?.email
      setDoc(doc(db, "user",userId ),formData);
  }



  const toggleSignUp = () => {
    setres((prevRes) => !prevRes); 
  };

  const formBg = useColorModeValue("white", "gray.700");
  const gradientBg = "linear(to-r, teal.500, green.500)";

  return (
    <>
    {
      auth?.currentUser?.email && <Navigate replace to={"/dashboard"}/>
    }
    <Flex height='100vh' width='100%' justify='center' alignItems='center' bg={gradientBg}>
      <Box
        borderWidth='1px'
        p={8}
        borderRadius='lg'
        boxShadow='xl'
        bg={formBg}
        width={['90%', '400px']}
        animation="scale-up-center 0.5s ease-in-out"
      >
        <style>
          {`
            @keyframes scale-up-center {
              0% {
                transform: scale(0.5);
              }
              100% {
                transform: scale(1);
              }
            }
          `}
        </style>
        <Center mb={6}>
          <Heading size='lg' color='teal.600'>Sign Up</Heading>
        </Center>
        <VStack spacing={4}>
          <FormControl isInvalid={emailError !== ''}>
            <FormLabel>Email</FormLabel>
            <Input
              variant='outline'
              value={email}
              placeholder="Email"
              type="email"
              onChange={handleEmailChange}
              focusBorderColor='teal.600'
            />
            {emailError !== '' && (
              <FormErrorMessage>{emailError}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={passwordError !== ''}>
            <FormLabel>Password</FormLabel>
            <Input
              variant='outline'
              value={password}
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
              focusBorderColor='teal.600'
            />
            {passwordError !== '' && (
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            onClick={signUp}
            colorScheme='green'
            width='100%'
            mt={4}
            _hover={{
              bgGradient: "linear(to-r, green.400, green.500)",
            }}
          >
            Sign Up
          </Button>

          <Flex mt={2} color='teal.600' cursor='pointer' >
            <Text>
              Don't have an account? 
            </Text>
            <Text ml={1} color='blue.600' cursor='pointer' as='b' onClick={toggleSignUp}>
              Sign In
            </Text>
          </Flex>
        </VStack>
      </Box>
    </Flex>
    </>
  );
};
