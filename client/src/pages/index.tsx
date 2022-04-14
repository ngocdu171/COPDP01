import { Box, Flex, Heading, Spinner, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  GetallApartmentDocument,
  useGetallApartmentQuery,
} from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

const Index = () => {
  const { data, loading } = useGetallApartmentQuery();
  // console.log(data);
  

  return (
    <Layout>
      {loading ? (
        <Flex justifyContent='center' align='center' minH='100vh'>
          <Spinner />
        </Flex>
      ) : ( 
        <Stack spacing={8}>
          {data?.apartments?.map(apartment => (
            <Flex key={apartment.id} p={5} shadow='md' borderWidth='1px'>
              <Box>
                <Link href={`/apartment/${apartment.id}`}><Heading fontSize='xl'>{apartment.name}</Heading></Link>
                <Text>{apartment.address}</Text>
                <Text>{apartment.price}</Text>
                <Text>{apartment.floor}</Text>
                <Text>{apartment.square}</Text>
                <Text>{apartment.vacant && 'the apartment is vacant'}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
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
