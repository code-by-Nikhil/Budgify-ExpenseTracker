import { useNavigate } from "react-router-dom"
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'

export default function Home() {  

    const navigate = useNavigate();
    

  return (
    <Box textAlign="center" py={28}>
      <Heading color="teal.500" size="2xl">💸 Budgify</Heading>
      <Text color="gray.500" fontSize="lg" mt={4}>Your smart path to financial freedom</Text>

      <Stack direction={{base: 'column', md: 'row'}} spacing={6} justify="center" mt={8}>
        <Button colorScheme="teal" size="lg" onClick={()=>navigate('/register')}>Create Account</Button>
        <Button colorScheme="teal" variant="outline" size="lg" onClick={()=>navigate('/login')}>Login</Button>
      </Stack>
    </Box>
  )
}
