import { useEffect } from 'react';
import AllRoutes from './AllPages/AllRoutes';
import './App.css';
import { useSelector } from 'react-redux';
import { auth, updateData } from './auth/firebase';

function App() {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log('working');
    if (auth?.currentUser?.email) {
      updateData(state);
    }
  }, [state]);

  return <AllRoutes />;
}

export default App;
