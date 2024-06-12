// import React from 'react';

import { useState } from "react";
import { auth } from "../auth/firebase";
import { Auth } from "../Components/Auth";

const ActivityTracker = () => {
  const [res, setres] = useState(true);
  return( 
    
      <>
      {
        auth?.currentUser?.email ===undefined ? (<Auth setres={setres}/>):
        (
          <h1>ActivityTracker</h1>
          
  
        )
      }
      
      </>
)
};

export default ActivityTracker;
