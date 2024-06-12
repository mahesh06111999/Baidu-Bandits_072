import React, { useState } from 'react';
import { Auth } from '../Components/Auth';
import { auth } from '../auth/firebase';

const Nutrition = () => {
  const [res, setres] = useState(true);
  return( 
    
      <>
      {
        auth?.currentUser?.email ===undefined ? (<Auth setres={setres}/>):
        (
          <h1>Nutrition</h1>
          
  
        )
      }
      
      </>
)
};

export default Nutrition;
