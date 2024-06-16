import React from 'react';
import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import NutritioniComp from '../pageComponents/NutritionComp';

const Nutrition = () => {  
  return(    
    <>  
    
    <div style={{ display: 'flex' }}>
    <Navbar />
    <NutritioniComp/>
    
    <RightSideBox />
  </div> 
    
  </>   

)
};

export default Nutrition