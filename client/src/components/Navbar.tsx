import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    function HandleLogout() {
        alert("Logout!")
    }
  return (
    <Box p={5}>
        <Flex justifyContent='space-between'>
            <Heading><Link href={'/'}>S_Rent</Link></Heading>
            <Box>
                <Button variant={'ghost'}><Link href='/register'>Register</Link></Button>
                <Button variant={'ghost'}><Link href={'/login'}>Login</Link></Button>
                <Button variant={'ghost'} onClick={HandleLogout}>Logout</Button>
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar