import { Heading, Text, Box, Flex, Button, Spacer } from '@chakra-ui/react' 
import { FaHome, FaSearch, FaQuestion, FaBook, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const bgColor = 'teal.500'
    const fontColor = 'white'
    return(
        <Box bgColor={bgColor}>
            <Flex>
                <Button bgColor={bgColor} color={'whiteAlpha.900'} leftIcon={<FaHome/>} _hover={{bgColor:'teal.300'}} _focus={{boxShadow:'none'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}><Link to='/'>Home</Link></Button>
                <Button bgColor={bgColor} color={'whiteAlpha.900'} leftIcon={<FaSearch/>} _hover={{bgColor:'teal.300'}} _focus={{boxShadow:'none'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Find tutor</Button>
                <Button bgColor={bgColor} color={'whiteAlpha.900'} leftIcon={<FaQuestion/>} _hover={{bgColor:'teal.300'}} _focus={{boxShadow:'none'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Ask Homework</Button>
                <Button bgColor={bgColor} color={'whiteAlpha.900'} leftIcon={<FaBook/>} _hover={{bgColor:'teal.300'}} _focus={{boxShadow:'none'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Book shop</Button>
                <Spacer/>
                <Button borderRadius={0} bgColor={bgColor} color={'whiteAlpha.900'} leftIcon={<FaLock/>} p={3} _hover={{bgColor:'teal.300'}} _focus={{boxShadow:'none'}} fontSize={'15px'} fontWeight={'bold'}><Link to='/login'>Login</Link></Button>
            </Flex>
        </Box>
    );
}

export default NavBar