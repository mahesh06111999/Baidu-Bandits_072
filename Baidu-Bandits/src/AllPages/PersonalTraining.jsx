
import { auth} from '../auth/firebase';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { Navigate } from 'react-router';

import Training from '../Components/Training';

const PersonalTraining = () => {
  return (
    <>
      <>
        {auth?.currentUser?.email === undefined && (
          <Navigate replace to={'/'} />
        )}
        <div style={{ display: 'flex' }}>
          <Navbar />
          <div style={{ width: '63%' }}>
            <Training />
          </div>
          <RightSideBox />
        </div>
      </>
    </>
  );
};

export default PersonalTraining;
