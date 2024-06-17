import React, { useState } from 'react';
import {
  Box, Button, Center, Flex, Input, Text, Heading, VStack,
  useColorModeValue, useToast, FormControl, FormLabel, FormErrorMessage,
  RadioGroup, Stack, Radio, Checkbox, Select
} from "@chakra-ui/react";
import { SignUp } from './Signup';

const SignUpForm = ({ setres }) => {
  const [next, setNext] = useState(false);
  const [formData, setFormData] = useState({
    refresh:false,
    calories: [0, 0, 0, 0, 0, 0, 0],
    age: "",
    steps: [0, 0, 0, 0, 0, 0, 0],
    goal: "",
    gender: "",
    weight: '',
    privacyAccepted: null,
    tracker: {
      thursday: {calories: null, steps: null, workedOut: null},
      sunday: {calories: null, steps: null, workedOut: null},
      saturday: {calories: null, steps: null, workedOut: null},
      friday: {calories: null, steps: null, workedOut: null},
      monday: {calories: null, steps: null, workedOut: null},
      wednesday: {calories: null, steps: null, workedOut: null},
      tuesday: {calories: null, steps: null, workedOut: null}
    },
    fullName: "",
    appointment: null,
    height: "",
    exerciseTime: [0, 0, 0, 0, 0, 0, 0],
    termsAccepted: ''
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    terms: '',
  });

  const toast = useToast();

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullName: '',
      terms: '',
    };

    if (formData.fullName.trim() === '') {
      errors.fullName = 'Full name is required';
      isValid = false;
    }

    if (!formData.termsAccepted || !formData.privacyAccepted) {
      errors.terms = 'Please accept terms and privacy policy';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleGender = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e,
    }));
  };

  const handleNext = () => {
    if (!validateForm()) {
      toast({
        title: "Error",
        description: "Please correct the highlighted errors",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    console.log(formData);
    setNext(true);
  };

  const toggleSignUp = () => {
    setres((prevRes) => !prevRes); // Toggle the state of setres
  };

  const formBg = useColorModeValue('white', 'gray.700');
  const gradientBg = 'linear(to-r, teal.500, green.500)';

  return (
    <>
      {next ? (
        <SignUp formData={formData} />
      ) : (
        <Flex
          minHeight="100vh"
          width="100%"
          justify="center"
          alignItems="center"
          bg={gradientBg}
        >
          <Box
            borderWidth="1px"
            p={8}
            borderRadius="lg"
            boxShadow="xl"
            bg={formBg}
            width={['90%', '80%', '60%', '40%']}
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
              <Heading size="lg" color="green">
                Sign Up
              </Heading>
            </Center>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={formErrors.fullName !== ''}>
                <FormLabel>Full Name</FormLabel>
                <Input
                  variant="outline"
                  name="fullName"
                  value={formData.fullName}
                  placeholder="Full Name"
                  onChange={handleInputChange}
                  focusBorderColor="teal.600"
                />
                {formErrors.fullName !== '' && (
                  <FormErrorMessage>{formErrors.fullName}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  onChange={handleGender}
                  value={formData.gender}
                  name="gender"
                >
                  <Radio name="gender" value="male">
                    Male
                  </Radio>
                  <Radio name="gender" value="female">
                    Female
                  </Radio>
                  <Radio name="gender" value="other">
                    Other
                  </Radio>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Age</FormLabel>
                <Input
                  variant="outline"
                  name="age"
                  value={formData.age}
                  placeholder="Age"
                  type="number"
                  onChange={handleInputChange}
                  focusBorderColor="teal.600"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Height (cm)</FormLabel>
                <Input
                  variant="outline"
                  name="height"
                  value={formData.height}
                  placeholder="Height"
                  type="number"
                  onChange={handleInputChange}
                  focusBorderColor="teal.600"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Weight (kg)</FormLabel>
                <Input
                  variant="outline"
                  name="weight"
                  value={formData.weight}
                  placeholder="Weight"
                  type="number"
                  onChange={handleInputChange}
                  focusBorderColor="teal.600"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Fitness Goal</FormLabel>
                <Select
                  variant="outline"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  focusBorderColor="teal.600"
                >
                  <option value="lose-weight">Lose Weight</option>
                  <option value="build-muscle">Build Muscle</option>
                  <option value="stay-fit">Stay Fit</option>
                  <option value="improve-endurance">Improve Endurance</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <Checkbox
                mt={4}
                isChecked={formData.termsAccepted}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    termsAccepted: e.target.checked,
                  }))
                }
              >
                I agree to the Terms of Service
              </Checkbox>
              <Checkbox
                mt={2}
                isChecked={formData.privacyAccepted}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    privacyAccepted: e.target.checked,
                  }))
                }
              >
                I agree to the Privacy Policy
              </Checkbox>
              {formErrors.terms !== '' && (
                <FormErrorMessage>{formErrors.terms}</FormErrorMessage>
              )}

              <Button
                onClick={handleNext}
                colorScheme="green"
                width="100%"
                mt={4}
                _hover={{
                  bgGradient: 'linear(to-r, teal.400, teal.500)',
                }}
              >
                Next
              </Button>

              <Flex
                mt={2}
                width="100%"
                justify={'center'}
                color="teal.600"
                cursor="pointer"
              >
                <Text>Don't have an account?</Text>
                <Text
                  ml={1}
                  as="b"
                  color="blue.600"
                  cursor="pointer"
                  onClick={toggleSignUp}
                >
                  Sign up
                </Text>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default SignUpForm;
