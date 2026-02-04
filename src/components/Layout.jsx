import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <Box minH="100vh">
      <Navbar />
      <Container maxW="container.lg" py={8}>
        {children}
      </Container>
    </Box>
  )
}
