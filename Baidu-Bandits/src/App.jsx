import AllRoutes from './AllPages/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';
import RightSideBox from './Components/RightSideBox';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <AllRoutes />
      <RightSideBox />
    </div>
  );
}

export default App;
