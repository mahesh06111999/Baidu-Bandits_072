import { useEffect } from 'react';
import AllRoutes from './AllPages/AllRoutes';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { auth, fetchData, updateData } from './auth/firebase';

function App() {
  const dispatch =useDispatch()
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
