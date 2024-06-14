import  { useState, useEffect } from 'react';
import {
  
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
  SimpleGrid,
  Icon,
  Text,
  HStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { FaRunning, FaBurn, FaWalking, FaClock, FaEdit, FaSave, FaCalendarAlt, FaClock as FaTime } from 'react-icons/fa';

const DynamicForm = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // State for form data for each day
  const [weeklyData, setWeeklyData] = useState({});
  const [editMode, setEditMode] = useState({});

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

  const handleSave = (day) => {
    const currentDate = new Date();
    setWeeklyData({
      ...weeklyData,
      [day]: {
        ...weeklyData[day],
        lastUpdated: currentDate.toLocaleDateString(),
        lastUpdatedTime: currentDate.toLocaleTimeString(),
      },
    });
    setEditMode({
      ...editMode,
      [day]: false,
    });
    localStorage.setItem('weeklyData', JSON.stringify(weeklyData));
  };

  const formBgColor = useColorModeValue('gray.50', 'gray.700');
  // const formTextColor = useColorModeValue('gray.800', 'white');
  const formBorderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box maxW="xll" mx="auto" mt={10} p={6} bg={formBgColor} borderRadius="md" boxShadow="lg">
      <Heading mb={6} textAlign="center" color="white" bgColor="#11a5bc" maxH="100px">Weekly Workout Tracker</Heading>
      
      <Box mb={8} textAlign="center">
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

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mb={8} >
        {daysOfWeek.map((day) => (
          <Box key={day} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl"fontCo mb={4} color='tomato'>{day}</Heading>
            <VStack align="start">
              <HStack>
                <Icon as={FaRunning} />
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
                    <Icon as={FaBurn} />
                    {editMode[day] ? (
                      <Input
                        type="number"
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
                    <Icon as={FaWalking} />
                    {editMode[day] ? (
                      <Select
                        name="stepsTaken"
                        value={weeklyData[day]?.stepsTaken || ''}
                        onChange={(e) => handleChange(e, day)}
                        bg="white"
                        borderColor={formBorderColor}
                        _placeholder={{ color: 'gray.500' }}
                      >
                        <option value="">Select</option>
                        <option value="1-5">1-5 steps</option>
                        <option value="5-10">5-10 steps</option>
                        <option value="10-15">10-15 steps</option>
                        <option value="15-20">15-20 steps</option>
                        <option value="20+">20 steps+</option>
                      </Select>
                    ) : (
                      <Text>Steps Taken: {weeklyData[day]?.stepsTaken || 'N/A'}</Text>
                    )}
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} />
                    {editMode[day] ? (
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
                    ) : (
                      <Text>Duration: {weeklyData[day]?.workoutDuration || ''}</Text>
                    )}
                  </HStack>
                </>
              )}
               
              <HStack >
                <Icon as={FaCalendarAlt} />
                <Text fontSize="10px">{weeklyData[day]?.lastUpdated || ''}</Text>
              </HStack>
              <HStack>
                <Icon as={FaTime} />
                <Text fontSize="10px">{weeklyData[day]?.lastUpdatedTime || ''}</Text>
              </HStack>
              <HStack>
                <Button
                  size="10px"
                  leftIcon={editMode[day] ? <FaSave /> : <FaEdit />}
                  onClick={() => editMode[day] ? handleSave(day) : setEditMode({ ...editMode, [day]: true })}
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
