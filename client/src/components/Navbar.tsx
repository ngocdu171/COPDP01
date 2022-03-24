import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useCheckLoginQuery } from '../generated/graphql'

const Navbar = () => {
    const{data, loading, error} = useCheckLoginQuery()
    console.log(data?.checklogin);

    let menuEle

    if(loading) {
        menuEle = null
    }
    else if(!data?.checklogin) {
        menuEle = (
            <>
                <Button variant={'ghost'}><Link href='/register'>Register</Link></Button>
                <Button variant={'ghost'}><Link href={'/login'}>Login</Link></Button>
            </>
        )
    }
    else {
        menuEle = <Button variant={'ghost'} onClick={HandleLogout}>Logout</Button>
    }
    
    function HandleLogout() {
        alert("Logout!")
    }
  return (
    <Box p={5}>
        <Flex justifyContent='space-between'>
            <Heading><Link href={'/'}>S_Rent</Link></Heading>
            <Box>
                {menuEle}
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar