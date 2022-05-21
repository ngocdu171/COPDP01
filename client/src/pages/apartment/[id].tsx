import { Alert, AlertIcon, AlertTitle, Box, Flex, Heading, Spinner, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { ApartmentDocument, ApartmentIdsDocument, ApartmentIdsQuery, useApartmentQuery, ApartmentQuery } from "../../generated/graphql";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import {limit} from '../index'

const Apartment = () => {
  const router = useRouter();
  const { data, loading, error } = useApartmentQuery({
    variables: { id: router.query.id as string },
  });

  if (error || !data?.apartment)
    return (
      <Alert status="error" width={"auto"}>
        <AlertIcon />
        <AlertTitle>{error ? error.message : 'Apartment not found'}</AlertTitle>
      </Alert>
    );

  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
          <Flex justifyContent='center' alignItems='center' minH='100vh'>
            <Spinner />
          </Flex>
        ) : (
          <>
          <Box display='flex'>
            <Box>
              <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            </Box>
            <Heading>{data.apartment.name}</Heading>
          </Box>
          </>
        )}
      </Layout>
      <Footer />
    </>
    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {

  const apolloClient = initializeApollo()

  const {data} = await apolloClient.query<ApartmentIdsQuery>({ query: ApartmentIdsDocument, variables: { limit } })

  return {
    paths: data.apartments!.paginatedApartments.map(apartment => ({
      params: { id: `${apartment.id}` }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps< {[key: string]: any}, {id: string} > = async ({params}) => {

  const apolloClient = initializeApollo()

  await apolloClient.query<ApartmentQuery>({ query: ApartmentDocument, variables: {id: params?.id }})

  return addApolloState(apolloClient, { props: {} })
}

export default Apartment;
