// import React from 'react';
import {
  Input, Select, RadioGroup, Radio, Button, Stack, Box, VStack, useColorModeValue,
  SimpleGrid, Icon, Text, HStack, Image, Flex,
} from '@chakra-ui/react';
import { FaRunning, FaBurn, FaWalking, FaClock, FaEdit, FaSave, FaCalendarAlt, FaClock as FaTime } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setWeeklyData, setEditMode } from '../redux/actionTypes';

const DynamicForm = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const weeklyData = useSelector((state) => state.weeklyData);
  const editMode = useSelector((state) => state.editMode);
  const dispatch = useDispatch();

  const handleChange = (e, day) => {
    const { name, value } = e.target;
    dispatch(setWeeklyData(day, { ...weeklyData[day], [name]: value }));
  };
  // console.log(data)

  const handleRadioChange = (value, name, day) => {
    dispatch(setWeeklyData(day, { ...weeklyData[day], [name]: value }));
  };

  const handleSave = (day) => {
    const currentDate = new Date();
    const updatedData = {
      ...weeklyData[day],
      lastUpdated: currentDate.toLocaleDateString(),
      lastUpdatedTime: currentDate.toLocaleTimeString(),
    };
    dispatch(setWeeklyData(day, updatedData));
    dispatch(setEditMode(day, false));
  };

  const formBgColor = useColorModeValue('gray.50', 'gray.700');
  const formBorderColor = useColorModeValue('gray.200', 'gray.600');

  const dayColors = {
    Monday: 'red.100',
    Tuesday: 'orange.100',
    Wednesday: 'yellow.100',
    Thursday: 'green.100',
    Friday: 'blue.100',
    Saturday: 'purple.100',
  };

  return (
    <Box maxW="xll" mx="auto" mt={1} p={6} bg={formBgColor} borderRadius="md" boxShadow="lg">
      <h1 className='activity'>Weekly Workout Tracker</h1>

      <Box mb={8} textAlign="center" justifyItems="center">
        <Flex>
          <Image
            src="https://img.freepik.com/free-vector/sport-fitness-tracker-abstract-concept-vector-illustration-activity-band-health-monitor-wrist-worn-device-application-running-cycling-every-day-training-abstract-metaphor_335657-1454.jpg?t=st=1718180351~exp=1718183951~hmac=48849305ff35333c08fb67262664b70e984691795e8c383900c5b37e1e2d9b9e&w=740"
            alt="Activity Tracker"
            maxW="960px" maxH="200px"
          />
          <Image
            src="https://img.freepik.com/premium-vector/fitness-concept-fitness-training-running-shoes-outline-style-illustration-with-run-sport-icons-fitness-training-design-elements-vector-illustration_6280-924.jpg?w=1380"
            alt="Activity Tracker"
            maxW="960px" maxH="200px"
          />
          <Image
            src="https://img.freepik.com/free-vector/appointment-booking-with-smartphone_23-2148554312.jpg?t=st=1718349663~exp=1718353263~hmac=800f63cd074ca2919d99489b7556d60a2ad9b7f8090fc06b6be8d0c0f1085de4&w=826"
            alt="Activity Tracker"
            maxW="960px" maxH="200px"
          />
        </Flex>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={8}>
        {daysOfWeek.map((day) => (
          <Box key={day} p={5} shadow="md" borderWidth="1px" borderRadius="md" position="relative" bg={dayColors[day]}>
            <h1 className='board-card-week'>{day}</h1>
            <VStack align="start">
              <HStack>
                <Icon as={FaRunning} color="gray" />
                <h1>Do you workout?</h1>
                {editMode[day] ? (
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
                ) : (
                  <Text>{weeklyData[day]?.workout || ''}</Text>
                )}
              </HStack>
              {weeklyData[day]?.workout === 'yes' && (
                <>
                  <HStack>
                    <Icon as={FaBurn} color="gray" />
                    {editMode[day] ? (
                      <Input
                        type="number"
                        placeholder='Calories Burnt'
                        name="caloriesBurned"
                        value={weeklyData[day]?.caloriesBurned || ''}
                        onChange={(e) => handleChange(e, day)}
                        bg="white"
                        borderColor={formBorderColor}
                        _placeholder={{ color: 'gray.500' }}
                      />
                    ) : (
                      <Text>Calories Burned: {weeklyData[day]?.caloriesBurned || 'N/A'}</Text>
                    )}
                  </HStack>
                  <HStack>
                    <Icon as={FaWalking} color="gray" />
                    {editMode[day] ? (
                      <Select
                        name="stepsTaken"
                        value={weeklyData[day]?.stepsTaken || ''}
                        onChange={(e) => handleChange(e, day)}
                        bg="white"
                        borderColor={formBorderColor}
                        _placeholder={{ color: 'gray.500' }}
                      >
                        <option value="0-5k">0-5k</option>
                        <option value="5k-10k">5k-10k</option>
                        <option value="10k-15k">10k-15k</option>
                        <option value="15k-20k">15k-20k</option>
                        <option value="20k+">20k+</option>
                      </Select>
                    ) : (
                      <Text>Steps Taken: {weeklyData[day]?.stepsTaken || 'N/A'}</Text>
                    )}
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} color="gray" />
                    {editMode[day] ? (
                      <Select
                        name="workoutDuration"
                        value={weeklyData[day]?.workoutDuration || ''}
                        onChange={(e) => handleChange(e, day)}
                        bg="white"
                        borderColor={formBorderColor}
                        _placeholder={{ color: 'gray.500' }}
                      >
                        <option value="">Select duration</option>
                        <option value="0-30">0-30 mins</option>
                        <option value="30-60">30-60 mins</option>
                        <option value="60-90">60-90 mins</option>
                        <option value="90+">90+ mins</option>
                      </Select>
                    ) : (
                      <Text>Duration: {weeklyData[day]?.workoutDuration || 'N/A'}</Text>
                    )}
                  </HStack>
                </>
              )}
              {weeklyData[day]?.lastUpdated && weeklyData[day]?.lastUpdatedTime && (
                <VStack align="start" position="absolute" bottom="10px" right="10px">
                  <HStack>
                    <Icon as={FaCalendarAlt} color="rgb(149, 149, 223)" />
                    <Text fontSize="10px">{weeklyData[day]?.lastUpdated}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaTime} color="rgb(149, 149, 223)" />
                    <Text fontSize="10px">{weeklyData[day]?.lastUpdatedTime}</Text>
                  </HStack>
                </VStack>
              )}
              <HStack>
                <Button
                  size="sm"
                  leftIcon={editMode[day] ? <FaSave /> : <FaEdit />}
                  onClick={() => editMode[day] ? handleSave(day) : dispatch(setEditMode(day, true))}
                >
                  {editMode[day] ? 'Save' : 'Edit'}
                </Button>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DynamicForm;
