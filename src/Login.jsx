import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useLoginMutation } from "./services/apiSlice";
import { Box, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/expenses");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Servor error");
      }
    }
  };

  return (
    <Box textAlign="center" py={12}>
      <Heading size="lg" mb={6}>Login</Heading>

      <VStack as="form" onSubmit={handleSubmit} spacing={4} maxW="md" mx="auto" bg="white" p={6} rounded="md" boxShadow="md">
        <Text textAlign="left">Email</Text>
        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>

        <Text textAlign="left">Password</Text>
        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>

        <Button colorScheme="teal" type="submit" width="full">Login</Button>
        <Button variant="outline" colorScheme="teal" width="full" onClick={()=>navigate('/register')}>Create an account</Button>
      </VStack>

      <ToastContainer />
    </Box>
  );
}
