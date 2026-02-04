import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useRegisterMutation } from './services/apiSlice';
import { Box, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'

export default function Register() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  
    const navigate = useNavigate();

    const [register] = useRegisterMutation();
    
    const handleSubmit = async(e)=>{
      e.preventDefault();
  
      try {
        const res = await register(
          {
          name,email,password
        });
  
        if(res.data.result){
          toast.success(res.data.message);
          navigate('/login');
        }
        else{
          toast.error(res.data.message);
        }
      } catch (error) {
        if(error.response?.data?.message){
          toast.error(error.response.data.message);
        }
        else{
          toast.error("Servor error");
        }
      }
    };

  return (
      
    <Box textAlign="center" py={12}>
      <Heading size="lg" mb={6}>Create Account</Heading>

      <VStack as="form" onSubmit={handleSubmit} spacing={4} maxW="md" mx="auto" bg="white" p={6} rounded="md" boxShadow="md">
        <Text textAlign="left">Name</Text>
        <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>

        <Text textAlign="left">Email</Text>
        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>

        <Text textAlign="left">Password</Text>
        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>

        <Button colorScheme="teal" type="submit" width="full">Create Account</Button>

        <Button variant="ghost" onClick={()=>window.location.href='/login'}>Already have an account?</Button>
      </VStack>

            <ToastContainer/>
    </Box>
  )
}
