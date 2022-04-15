import { Box, Flex, Heading, Image, Spinner, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  GetallApartmentDocument,
  useGetallApartmentQuery,
} from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

const Index = () => {
  const { data, loading } = useGetallApartmentQuery();
  console.log(data);
  
  const typeOfRooms = (rooms: any) => {
    let roomType
    if(rooms === 'Studio') {
      roomType = '1H + KT'
    }
    else if(rooms === '2') {
      roomType = '2H + KT'
    }
    else {
      roomType = '3H + KT'
    }
    return roomType
  }

  return (
    <Layout>
      {loading ? (
        <Flex justifyContent='center' align='center' minH='100vh'>
          <Spinner />
        </Flex>
      ) : (
        <Wrap spacing='24px'>
          {data?.apartments?.map(apartment => (
            // <WrapItem key={} p={5} shadow='md' borderWidth='1px'>
              <Box key={apartment.id} maxW='464px' shadow='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                <Box p={5} >
                  <Link href={`/apartment/${apartment.id}`}><Heading fontSize='xl'>{apartment.name}</Heading></Link>
                  <Text color='gray.500' fontWeight='semibold'>{apartment.address}</Text>
                  <Box display='flex' justifyContent='space-between' m='5px 0px 5px 0px'>
                    <Text>{apartment.price} €/month</Text>
                    <Text>{apartment.floor} floor</Text>
                  </Box>

                  <Box>
                    <Text>{typeOfRooms(apartment.rooms)} </Text>
                    <Text>{apartment.square}</Text>
                  </Box>
                  
                  <Text>{apartment.vacant && 'the apartment is vacant'}</Text>
                </Box>
                
              </Box>
            // </WrapItem>
          ))}
        </Wrap> 
        // <Stack spacing={8}>
        //   {data?.apartments?.map(apartment => (
        //     <Flex key={apartment.id} p={5} shadow='md' borderWidth='1px'>
        //       <Box>
        //         <Link href={`/apartment/${apartment.id}`}><Heading fontSize='xl'>{apartment.name}</Heading></Link>
        //         <Text>{apartment.address}</Text>
        //         <Text>{apartment.price}</Text>
        //         <Text>{apartment.floor}</Text>
        //         <Text>{apartment.square}</Text>
        //         <Text>{apartment.vacant && 'the apartment is vacant'}</Text>
        //       </Box>
        //     </Flex>
        //   ))}
        // </Stack>
      )}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetallApartmentDocument
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default Index;
