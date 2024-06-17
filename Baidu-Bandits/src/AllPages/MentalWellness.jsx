import Navbar from '../Components/Navbar';
import RightSideBox from '../Components/RightSideBox';
import { MentalWellnessComp } from '../pageComponents/MentalWellnessComp';

const MentalWellness = () => {
  return(    
      <>  
            
      <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{width:'63%'}}>

        <MentalWellnessComp/>

      </div>
      <RightSideBox />
      </div>      
      </>
)
};

export default MentalWellness;
