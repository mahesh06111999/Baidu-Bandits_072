import { Box, Button, Center, Flex, Input } from "@chakra-ui/react"
import {auth, googleProvider} from "../auth/firebase"
import { useState } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,  signInWithPopup, signOut } from "firebase/auth";

export const Auth = ({setres}) => {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    console.log(auth?.currentUser);
    const signUp = async()=>{
        try {
            
            await createUserWithEmailAndPassword(auth,email,pass)
        } catch (error) {
            console.error(error);
        }
    }
    const signIn = async()=>{
        try {
            
            await signInWithEmailAndPassword(auth,email,pass)
        } catch (error) {
            console.error(error);
        }
        finally{
            console.log(auth?.currentUser?.email);
            setemail('')
            setpass('')
            setres(pre=>!pre)
            
        }
    }

    const signInWithGoogle = async()=>{
        try {
            
            await signInWithPopup(auth,googleProvider)
        } catch (error) {
            console.error(error);
        }
    }

    const signOff = async()=>{
        try {
            
            await signOut(auth)
        } catch (error) {
            console.error(error);
        }
    }
    

  return (
    <Center>
        <Box width='300px'> 
            <form action="">
            <Input value={email} placeholder="Email" type="email" onChange={(e)=> setemail(e.target.value)} />
            <Input  value={pass} placeholder="Password" type="password"  onChange={(e)=> setpass(e.target.value)}/>
            <Button onClick={signIn}>Sing In...</Button>
            </form>
        </Box>

        <Button onClick={signInWithGoogle}>Sing In With Google</Button>
         
    </Center>
  )
}

