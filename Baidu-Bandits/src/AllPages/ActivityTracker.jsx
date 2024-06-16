import {  Box,} from '@chakra-ui/react';
import DynamicForm from '../Components/DynamicForm';
import RightSideBox from '../Components/RightSideBox';
import Navbar from '../Components/Navbar';
import { Navigate } from 'react-router';
import { auth } from '../auth/firebase';

const ActivityTracker = () => {

  return (
    <>
      {auth?.currentUser?.email === undefined && <Navigate replace to={'/'} />}

      <div style={{ display: 'flex' }}>
        <Navbar />
        <Box width="63%" p={5} height="100vh" overflow="auto">
          <DynamicForm />  
        </Box>
        <RightSideBox />
      </div>
    </>
  );
};

export default ActivityTracker;
