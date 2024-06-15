import { useDispatch } from 'react-redux';
import AllRoutes from './AllPages/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import RightSideBox from './Components/RightSideBox';
import { FETCH } from './redux/actionTypes';
function App() {

  return (
      
      <AllRoutes />
  );
}

export default App;
