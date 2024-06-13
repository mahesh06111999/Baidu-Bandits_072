import { Box, Button, Center, Flex, HStack, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react"
import {auth,} from "../auth/firebase"
import { useState } from "react";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Auth = ({setres}) => {
    const [sign, setSign] = useState(true);
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    
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

   

    const signOff = async()=>{
        try {
            
            await signOut(auth)
        } catch (error) {
            console.error(error);
        }
    }
    

  return (
    <Flex height='90vh' 
    width='100%' justify='center'>
        <Center>
        <Box borderWidth='1px'p={2} borderRadius='lg' width='340px'>
        <Flex p={4} gap={8} direction='column'  > 
        <InputGroup >
        <InputLeftAddon width='35%'>E-mail</InputLeftAddon>
            <Input variant='outline' value={email} placeholder="Email" type="email" onChange={(e)=> setemail(e.target.value)} />
        </InputGroup>
        <InputGroup >
        <InputLeftAddon width='35%'>Password</InputLeftAddon>
            <Input variant='outline' value={pass} placeholder="Password" type="password"  onChange={(e)=> setpass(e.target.value)}/>
        </InputGroup>

        <Flex width='100%' justify='center' >
            
        <Text ml={4} mr={2} >{sign ? "Don't":"Already"} have an account?" </Text> <Text color='blue' onClick={()=>setSign(prev=>!prev)}>{sign? "Sign Up": "Sign In.."}</Text></Flex>

        <Center>
            <Button onClick={()=>sign?signIn():signUp()}>{sign?"Sign In... ": "Sign up.."}</Button>
        </Center>
            
        </Flex>
        </Box>
        </Center>
        
        
    </Flex>
  )
}

