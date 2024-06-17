import {
    Box,
    Button,
    Grid,
    GridItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure
  } from '@chakra-ui/react';
  
  const UserModal = ({ isOpen, onClose, user }) => {
    if (!user) return null;
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem>
                <Text fontWeight="bold">Full Name:</Text>
                <Text>{user.fullName}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Email:</Text>
                <Text>{user.email}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Age:</Text>
                <Text>{user.age}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Gender:</Text>
                <Text>{user.gender}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Height:</Text>
                <Text>{user.height}</Text>
              </GridItem>
              <GridItem>
                <Text fontWeight="bold">Weight:</Text>
                <Text>{user.weight}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Steps:</Text>
                <Text>{user.steps.join(', ')}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Exercise Time:</Text>
                <Text>{user.exerciseTime.join(', ')}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Calories:</Text>
                <Text>{user.calories.join(', ')}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Privacy Accepted:</Text>
                <Text>{user.privacyAccepted ? 'Yes' : 'No'}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Terms Accepted:</Text>
                <Text>{user.termsAccepted ? 'Yes' : 'No'}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Appointment:</Text>
                <Text>{new Date(user.appointment.seconds * 1000).toLocaleString()}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="bold">Tracker:</Text>
                <Box pl={4}>
                  {Object.entries(user.tracker).map(([day, details]) => (
                    <Box key={day} mb={2}>
                      <Text fontWeight="bold" textTransform="capitalize">{day}:</Text>
                      <Text>Steps: {details.steps}</Text>
                      <Text>Calories: {details.calories}</Text>
                      <Text>Worked Out: {details.workedOut ? 'Yes' : 'No'}</Text>
                    </Box>
                  ))}
                </Box>
              </GridItem>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default UserModal;
  