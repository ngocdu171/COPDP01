import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { CheckLoginDocument, CheckLoginQuery, useCheckLoginQuery, useLogoutMutation } from '../generated/graphql'

const Navbar = () => {
    const{data, loading: useCheckLoginQueryLoading} = useCheckLoginQuery()
    // console.log(data?.checklogin);
    const [logout, {loading: useLogoutMutationLoading}] = useLogoutMutation()

    let menuEle

    if(useCheckLoginQueryLoading) {
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
        menuEle = <Button variant={'ghost'} onClick={HandleLogout} isLoading={useLogoutMutationLoading}>Logout</Button>
    }
    
    function HandleLogout() {
        logout({
            update(cache, result) {
                if(result.data?.logout) {
                    cache.writeQuery<CheckLoginQuery>({
                        query: CheckLoginDocument,
                        data: {checklogin: null}
                    })
                }
            }
        })
    }
  return (
    <Box p={4}>
        <Flex maxW={800} justifyContent='space-between' align='center' m='auto'>
            <Heading><Link href={'/'}>S_Rent</Link></Heading>
            <Box>
                {menuEle}
            </Box>
        </Flex>
    </Box>
  )
}

export default Navbar