import { Box, Flex, Text, Heading, Input, Button } from '@chakra-ui/react'
import { FaLockOpen } from 'react-icons/fa'
import { ChakraProvider } from '@chakra-ui/react' 
import NavBar from './NavBar'
import theme from './theme'


const Login = () => {
    return(
        <Box>
          <NavBar/>
          <Flex h={'100vh'} alignItems={'center'} justifyContent={'center'}>
            <Flex p={50} rounded={12} direction={'column'} bgColor={'blue.600'} color={'white'}>
              <Heading mb={5}>Login</Heading>
              <Input size='lg' mb={5} placeholder='Your email'></Input>
              <Input size='lg' mb={5} type='password' placeholder='**********'></Input>
              <Button ml='auto' mr='auto' w='fit-content' leftIcon={<FaLockOpen/>} bgColor={'blue.700'} colorTheme='teal'>Login</Button>
            </Flex>
          </Flex>
        </Box>
      );
  }

export default Login