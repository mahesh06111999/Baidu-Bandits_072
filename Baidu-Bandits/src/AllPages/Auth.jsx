import {auth,} from "../auth/firebase"
import { useState } from "react";
import { Navigate } from "react-router";
import { SignIn } from "../Components/SignIn";
import Signup from "../Components/SignUpForm";

export const Auth = () => {
    const [res, setres] = useState(true);   

  return (
    <>
    {
      auth?.currentUser?.email && <Navigate replace to={"/dashboard"}/>
    }
    {res ? (<SignIn setres={setres}/>):(<Signup setres={setres}/>)}
    </>
  )
}

