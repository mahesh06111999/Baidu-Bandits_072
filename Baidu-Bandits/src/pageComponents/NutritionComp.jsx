import { useEffect, useState } from "react";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";
// import { Navigate } from 'react-router';
import CustomSkeleton from "../Components/Skeleton";

const NutritioniComp = () => {
  // user data fatch.................
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (auth?.currentUser?.uid) {
          const raw = await getDoc(doc(db, "user", userId));
          const solved = raw.data();
          console.log(solved);
          setdata(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ width: "63%" }}>
          <CustomSkeleton />
        </div>
      ) : (
        <>
          {/* {
      auth?.currentUser?.email===undefined && <Navigate replace to={"/"}/>
    } */}

          <div style={{ width: "63%" }} className="nutrition">
            <div className="nutri">
              <h1>Nutritional Wisdom</h1>
              <h5> Your Path to a Healthier Life</h5>
            </div>
            <div className="nutrii-bmi">
             
             

            </div>
            <div className="nutrii-footer">

            </div>
            
          </div>
          
        </>
      )}
    </>
  );
};

export default NutritioniComp;
