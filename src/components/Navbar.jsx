import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()

  return (
    <Box
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      px={4}
      boxShadow="sm"
      borderBottomWidth={1}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'} maxW="container.lg" mx="auto">
        <HStack spacing={4} alignItems={'center'}>
          <Text fontWeight="bold" fontSize="lg" color="teal.500" cursor="pointer" onClick={() => navigate('/')}>Budgify</Text>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <ChakraLink as={Link} to="/expenses">Expenses</ChakraLink>
            <ChakraLink as={Link} to="/login">Login</ChakraLink>
            <ChakraLink as={Link} to="/register">Register</ChakraLink>
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <IconButton aria-label="Toggle color mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
        </Flex>
      </Flex>
    </Box>
  )
}
