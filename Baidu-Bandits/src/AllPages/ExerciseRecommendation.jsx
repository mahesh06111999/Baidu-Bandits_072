// ExerciseRecommendation.jsx
import { Box, Heading, Text, Button, VStack, Checkbox, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ExerciseRecommendation = ({ formData }) => {



  // Dummy exercise recommendations
  const recommendations = [
    "Start with 30 minutes of brisk walking or jogging most days of the week.",
    "Incorporate strength training exercises such as squats, lunges, and push-ups into your routine.",
    "Try high-intensity interval training (HIIT) workouts for a quick and effective calorie burn.",
    "Explore yoga or Pilates for improved flexibility, balance, and relaxation.",
    "Join group fitness classes like cyclingg, Zumba, or kickboxing for a fun and motivating workout.",
  ];

  return (

    <Box textAlign="center" py={10}>
      {
      auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
    }
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2" size="xl" mb={4}>
          Exercise Recommendations
        </Heading>
        <Flex alignItems="center" justifyContent="center" mb={4}>
          <Image src="https://img.freepik.com/premium-photo/young-happy-woman-lies-green-grass_340270-9.jpg?w=826" alt="Happy Person" boxSize="250px" />
        </Flex>
        <VStack spacing={4} alignItems="flex-start" mx="auto">
          {recommendations.map((recommendation, index) => (
            <Checkbox key={index} fontSize="lg" value={recommendation}>
              {recommendation}
            </Checkbox>
          ))}
        </VStack>
        <Button
          colorScheme="teal"
          size="lg"
          mt={6}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Your Workout
        </Button>
      </motion.div>
    </Box>
  );
};

export default ExerciseRecommendation;
