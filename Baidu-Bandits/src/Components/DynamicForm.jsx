import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Button,
  Stack,
  Box,
  Heading,
  VStack,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  SimpleGrid,
  Icon,
  Text,
  HStack,
} from '@chakra-ui/react';
import { FaRunning, FaBurn, FaWalking, FaClock } from 'react-icons/fa';

const DynamicForm = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // State for form data for each day
  const [weeklyData, setWeeklyData] = useState({});

  useEffect(() => {
    // Load form data from local storage
    const storedData = JSON.parse(localStorage.getItem('weeklyData'));
    if (storedData) {
      setWeeklyData(storedData);
    }
  }, []);

  const handleChange = (e, day) => {
    const { name, value } = e.target;
    setWeeklyData({
      ...weeklyData,
      [day]: {
        ...weeklyData[day],
        [name]: value,
      },
    });
  };

  const handleRadioChange = (value, name, day) => {
    setWeeklyData({
      ...weeklyData,
      [day]: {
        ...weeklyData[day],
        [name]: value,
      },
    });
  };

  const handleSubmit = (e, day) => {
    e.preventDefault();
    localStorage.setItem('weeklyData', JSON.stringify(weeklyData));
  };

  const formBgColor = useColorModeValue('gray.50', 'gray.700');
  const formTextColor = useColorModeValue('gray.800', 'white');
  const formBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box maxW="xl" mx="auto" mt={10} p={6} bg={formBgColor} borderRadius="md" boxShadow="lg">
      <Heading mb={6} textAlign="center" color={formTextColor}>Weekly Workout Tracker</Heading>

      {/* Weekly Data Board */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mb={8}>
        {daysOfWeek.map((day) => (
          <Box key={day} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl" mb={4}>{day}</Heading>
            <VStack align="start">
              <HStack>
                <Icon as={FaRunning} />
                <Text>{weeklyData[day]?.workout || 'N/A'}</Text>
              </HStack>
              {weeklyData[day]?.workout === 'yes' && (
                <>
                  <HStack>
                    <Icon as={FaBurn} />
                    <Text>Calories Burned: {weeklyData[day]?.caloriesBurned || 'N/A'}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaWalking} />
                    <Text>Steps Taken: {weeklyData[day]?.stepsTaken || 'N/A'}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} />
                    <Text>Duration: {weeklyData[day]?.workoutDuration || 'N/A'}</Text>
                  </HStack>
                </>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Tabs>
        <TabList>
          {daysOfWeek.map((day) => (
            <Tab key={day}>{day}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {daysOfWeek.map((day) => (
            <TabPanel key={day}>
              <form onSubmit={(e) => handleSubmit(e, day)}>
                <VStack spacing={5}>
                  <FormControl id="workout" isRequired>
                    <FormLabel color={formTextColor}>Do you workout?</FormLabel>
                    <RadioGroup
                      name="workout"
                      value={weeklyData[day]?.workout || ''}
                      onChange={(value) => handleRadioChange(value, 'workout', day)}
                    >
                      <Stack direction="row" spacing={5}>
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  {weeklyData[day]?.workout === 'yes' && (
                    <>
                      <FormControl id="caloriesBurned" isRequired>
                        <FormLabel color={formTextColor}>Calories Burned</FormLabel>
                        <Input
                          type="number"
                          name="caloriesBurned"
                          value={weeklyData[day]?.caloriesBurned || ''}
                          onChange={(e) => handleChange(e, day)}
                          bg="white"
                          borderColor={formBorderColor}
                          _placeholder={{ color: 'gray.500' }}
                        />
                      </FormControl>

                      <FormControl id="stepsTaken" isRequired>
                        <FormLabel color={formTextColor}>Number of Steps Taken</FormLabel>
                        <Select
                          name="stepsTaken"
                          value={weeklyData[day]?.stepsTaken || ''}
                          onChange={(e) => handleChange(e, day)}
                          bg="white"
                          borderColor={formBorderColor}
                          _placeholder={{ color: 'gray.500' }}
                        >
                          <option value="">Select</option>
                          <option value="1-5">1-5k</option>
                          <option value="5-10">5-10k</option>
                          <option value="10-15">10-15k</option>
                          <option value="15-20">15-20k</option>
                          <option value="20+">20k+</option>
                        </Select>
                      </FormControl>

                      <FormControl id="workoutDuration" isRequired>
                        <FormLabel color={formTextColor}>Workout Duration</FormLabel>
                        <Select
                          name="workoutDuration"
                          value={weeklyData[day]?.workoutDuration || ''}
                          onChange={(e) => handleChange(e, day)}
                          bg="white"
                          borderColor={formBorderColor}
                          _placeholder={{ color: 'gray.500' }}
                        >
                          <option value="">Select</option>
                          <option value="0-30">0-30 mins</option>
                          <option value="30-60">30-60 mins</option>
                          <option value="60-90">60-90 mins</option>
                          <option value="90+">90+ mins</option>
                        </Select>
                      </FormControl>
                    </>
                  )}

                  <Button type="submit" colorScheme="teal" size="lg" width="full">
                    Save {day}'s Data
                  </Button>
                </VStack>
              </form>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DynamicForm;
