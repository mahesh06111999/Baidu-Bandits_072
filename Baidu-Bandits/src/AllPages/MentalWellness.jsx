import React, { useState } from 'react';
import { Auth } from '../Components/Auth';
import { auth } from '../auth/firebase';

const MentalWellness = () => {
  const [res, setres] = useState(true);
  return( 
    
      <>
      {
        auth?.currentUser?.email ===undefined ? (<Auth setres={setres}/>):
        (
          <h1>MentalWellness</h1>
          
  
        )
      }
      
      </>
)
};

export default MentalWellness;
