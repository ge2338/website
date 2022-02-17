import NavBar from "./NavBar";
import { ChakraProvider, HStack, Box, Text, Button, Flex, Heading, Image, Slide, useColorMode, useDisclosure } from '@chakra-ui/react'
import { FaGamepad } from 'react-icons/fa'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()
  if(!isOpen){
    onToggle();
  }
  return(
      <Box>
        <NavBar/>
        <Slide in={isOpen} direction={'left'}>
            <Heading w={'fit-content'} ml={20} mt={'180px'} fontSize={'80px'}>
              <HStack>
                  <Text pr={'15px'}>Gademic</Text>
                  <FaGamepad/>
              </HStack>
            </Heading>
        </Slide>
      </Box>
  );
}

export default Home
