import AllRoutes from './AllPages/AllRoutes';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
