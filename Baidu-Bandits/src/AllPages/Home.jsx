import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/home-1-svgrepo-com.svg';



const Home = () => {
  const [loading, setLoading] = useState(true);
  

  return <div>
    <Link to="/auth" style={{ textDecoration: 'none' }}>
          
            <img src={home} alt="" width="35px" />
            Home
       
        </Link>
  </div>;
};

export default Home;

