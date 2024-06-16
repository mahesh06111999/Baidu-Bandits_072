import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { ADDTOSCHEDULE } from '../redux/actionTypes';

const Training = () => {
  const dispatch = useDispatch();

  const exercises = [
    {
      id: 'exercise1',
      name: 'Bench Press',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif',
      description:
        'The bench press is a compound exercise that primarily targets the chest muscles. It also engages the shoulders and triceps.',
    },
    {
      id: 'exercise2',
      name: 'Incline Dumbbell Press',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif',
      description:
        'The incline dumbbell press targets the upper portion of the chest muscles. It also helps in strengthening the shoulders and triceps.',
    },
    {
      id: 'exercise3',
      name: 'Chest Fly',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/dumbbell-chest-fly-muscles.gif',
      description:
        'Chest fly exercises isolate the pectoral muscles, helping to develop strength and size in the chest.',
    },
    {
      id: 'exercise4',
      name: 'Push-Ups',
      gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2020/09/classic-pushup.gif',
      description:
        'Push-ups are a bodyweight exercise that primarily targets the chest, shoulders, and triceps. They also engage the core muscles.',
    },
    {
      id: 'exercise5',
      name: 'Cable Crossover',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/02/cable-standing-crossover.gif',
      description:
        'Cable crossovers are an isolation exercise for the chest muscles. They help in developing chest strength and definition.',
    },
    {
      id: 'exercise6',
      name: 'Pull-Ups',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/pull-up.gif',
      description:
        'Pull-ups primarily target the upper back muscles, including the latissimus dorsi and the biceps. They are effective for improving upper body strength.',
    },
    {
      id: 'exercise7',
      name: 'Lat Pulldown',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/cable-pushdown.gif',
      description:
        'The lat pulldown exercise targets the latissimus dorsi muscles in the upper back. It also engages the shoulders and biceps.',
    },
    {
      id: 'exercise8',
      name: 'Cable Machine Rows',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2024/01/cable-one-arm-seated-row.gif',
      description:
        'Cable machine rows are an effective exercise for developing the back muscles, including the latissimus dorsi and rhomboids.',
    },
    {
      id: 'exercise9',
      name: 'Single-Arm Dumbbell Row',
      gif: 'https://i.pinimg.com/originals/2e/1d/11/2e1d11bc46aa8a0fb1d42fa9e97bbf9e.gif',
      description:
        'Single-arm dumbbell rows target the muscles of the upper back, including the latissimus dorsi and rhomboids. They also engage the biceps and core muscles for stability.',
    },
    {
      id: 'exercise10',
      name: 'Back Extension',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/05/back-extension.gif',
      description:
        'Back extensions primarily target the lower back muscles (erector spinae). They are beneficial for improving lower back strength and stability.',
    },
    {
      id: 'exercise11',
      name: 'Shoulder Press',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/seated-overhead-press.gif',
      description:
        'The shoulder press (overhead press) targets the deltoid muscles of the shoulders. It also engages the triceps and upper chest muscles for stabilization.',
    },
    {
      id: 'exercise12',
      name: 'Lateral Raise',
      gif: 'https://archive.org/download/dumbbell-4-way-lateral-raise/DUMBBELL%204%20WAY%20LATERAL%20RAISE.gif',
      description:
        'Lateral raises primarily target the lateral deltoid muscles (shoulders), helping to improve shoulder width and strength. They also engage the trapezius and serratus anterior muscles.',
    },
    {
      id: 'exercise13',
      name: 'Front Raise',
      gif: 'https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif',
      description:
        'Front raises target the front deltoid muscles (shoulders), helping to improve shoulder strength and stability. They also engage the upper chest and trapezius muscles.',
    },
    {
      id: 'exercise14',
      name: 'Pec Deck Fly',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/band-pull-apart.gif',
      description:
        'Pec deck fly exercises isolate the pectoral muscles (chest), helping to develop strength and size in the chest area. They are effective for targeting the inner chest.',
    },
    {
      id: 'exercise15',
      name: 'Shrugs',
      gif: 'https://cdn.shopify.com/s/files/1/0547/0486/5477/files/dumbbell-shrug_480x480.gif?v=1701426774',
      description:
        'Shrugs target the trapezius muscles in the upper back and neck region. They help in improving upper back and neck strength and stability.',
    },
    {
      id: 'exercise16',
      name: 'Squats',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/03/full-squat-side-view.gif',
      description:
        'Squats are a compound exercise that primarily target the quadriceps (front of thighs), hamstrings (back of thighs), and glutes (buttocks). They are effective for improving lower body strength and muscle mass.',
    },
    {
      id: 'exercise17',
      name: 'Leg Press',
      gif: 'https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif',
      description:
        'The leg press targets the quadriceps (front of thighs), hamstrings (back of thighs), and glutes (buttocks). It is an effective exercise for building lower body strength and muscle mass.',
    },
    {
      id: 'exercise18',
      name: 'Lunges',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/07/bodyweight-forward-lunge.gif',
      description:
        'Lunges primarily target the quadriceps (front of thighs) and glutes (buttocks). They are effective for improving lower body strength, balance, and flexibility.',
    },
    {
      id: 'exercise19',
      name: 'Leg Extension',
      gif: 'https://static.wixstatic.com/media/2edbed_3ffafa0b4e694caf9e49b851d474f160~mv2.gif',
      description:
        'Leg extensions isolate the quadriceps muscles (front of thighs), helping to improve strength and definition in the legs. They are commonly used for lower body strengthening exercises.',
    },
    {
      id: 'exercise20',
      name: 'Hamstring Curl',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/seated-leg-curl.gif',
      description:
        'Hamstring curls primarily target the hamstring muscles (back of thighs). They help in developing hamstring strength and stability.',
    },
    {
      id: 'exercise21',
      name: 'Bicep Curl',
      gif: 'https://homeworkouts.org/wp-content/uploads/anim-dumbbell-bicep-curls.gif',
      description:
        'Bicep curls primarily target the biceps muscles of the upper arm. They are effective for building arm strength and size.',
    },
    {
      id: 'exercise22',
      name: 'Hammer Curl',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/elbow-flexion.gif',
      description:
        'Hammer curls target the biceps and brachialis muscles in the upper arm. They help in building arm strength and size.',
    },
    {
      id: 'exercise23',
      name: 'Preacher Curl',
      gif: 'https://newlife.com.cy/wp-content/uploads/2019/11/04021301-Dumbbell-Seated-Preacher-Curl_Upper-Arms_360.gif',
      description:
        'Preacher curls isolate the biceps muscles of the upper arm. They are effective for building arm strength and size.',
    },
    {
      id: 'exercise24',
      name: 'Concentration Curl',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/01/barbell-concentration-curls.gif',
      description:
        'Concentration curls target the biceps muscles of the upper arm. They help in building arm strength and size.',
    },
    {
      id: 'exercise25',
      name: 'Cable Curl',
      gif: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-3d9de4c/www.aleanlife.com/wp-content/uploads/2022/04/cable-curls.gif',
      description:
        'Cable curls target the biceps muscles of the upper arm. They are effective for building arm strength and size.',
    },
    {
      id: 'exercise26',
      name: 'Tricep Pushdown',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/straight-bar-tricep-pushdown.gif',
      description:
        'Tricep pushdowns primarily target the triceps muscles of the upper arm. They are effective for building tricep strength and size.',
    },
    {
      id: 'exercise27',
      name: 'Overhead Tricep Extension',
      gif: 'https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif',
      description:
        'Overhead tricep extensions target the triceps muscles of the upper arm. They are effective for building tricep strength and size.',
    },
    {
      id: 'exercise28',
      name: 'Tricep Dips',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/bench-dips-on-floor.gif',
      description:
        'Tricep dips primarily target the triceps muscles of the upper arm. They are effective for building tricep strength and size.',
    },
    {
      id: 'exercise29',
      name: 'Skull Crushers',
      gif: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/incline-skullcrusher.gif',
      description:
        'Skull crushers (lying tricep extensions) target the triceps muscles of the upper arm. They are effective for building tricep strength and size.',
    },
    {
      id: 'exercise30',
      name: 'Tricep Kickback',
      gif: 'https://www.aleanlife.com/wp-content/uploads/2020/09/dumbbell-kickbacks.gif',
      description:
        'Tricep kickbacks primarily target the triceps muscles of the upper arm. They are effective for building tricep strength and size.',
    },
  ];

  const handeladd = (e) => {
    dispatch({ type: ADDTOSCHEDULE, payload: e });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(exercises.length / itemsPerPage);
  const currentExercises = exercises.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    onOpen();
  };

  return (
    <Box>
      <Center mt={10}>
        <Text
          fontSize="2xl"
          color="white"
          bg="#11a5bc"
          w="90%"
          m="0 auto"
          p={2}
          borderRadius="xl"
          textAlign="center"
        >
          Select Exercise
        </Text>
      </Center>
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={6}
        p={5}
        justifyItems="center"
      >
        {currentExercises.map((exercise, index) => (
          <Box
            h={370}
            key={index}
            p={3}
            borderRadius="xl"
            boxShadow="md"
            bg="white"
            textAlign="center"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)' }}
            onClick={() => openModal(exercise)}
          >
            <Image src={exercise.gif} alt={exercise.name} height={300} />
            <Text mt={4} fontSize="xl" fontWeight="bold" color="gray.800">
              {exercise.name}
            </Text>
          </Box>
        ))}
      </Grid>
      <Flex justifyContent="center" mt={5} pb={4}>
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          bg="#f4f5f5"
          border="1px solid #11a5bc"
          borderRadius="10px"
          color="#11a5bc"
          mx={2}
          _hover={{ bg: '#e1e1e1' }}
          _disabled={{ cursor: 'not-allowed' }}
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          bg="#f4f5f5"
          border="1px solid #11a5bc"
          borderRadius="10px"
          color="#11a5bc"
          mx={2}
          _hover={{ bg: '#e1e1e1' }}
          _disabled={{ cursor: 'not-allowed' }}
        >
          Next
        </Button>
      </Flex>

      {selectedExercise && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedExercise.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedExercise.gif}
                width="100%"
                alt={selectedExercise.name}
              />
              <Text mt={4}>{selectedExercise.description}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                background="#11a5bc"
                mr={3}
                color="white"
                onClick={() => {
                  handeladd(selectedExercise);
                }}
                value={selectedExercise.id}
              >
                Add to Schedule
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Training;
