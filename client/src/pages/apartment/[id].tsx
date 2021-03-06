import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Spinner,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import {
  ApartmentDocument,
  ApartmentIdsDocument,
  ApartmentIdsQuery,
  useApartmentQuery,
  ApartmentQuery,
} from "../../generated/graphql";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { limit } from "../index";
import NextLink from "next/link";

const Apartment = () => {
  const router = useRouter();
  const { data, loading, error } = useApartmentQuery({
    variables: { id: router.query.id as string },
  });

  if (error || !data?.apartment)
    return (
      <>
        <Navbar />
        <Layout>
          <Alert status="error" width={"auto"}>
            <AlertIcon />
            <AlertTitle>
              {error ? error.message : "Apartment not found"}
            </AlertTitle>
          </Alert>
          <Box mt={4}>
            <NextLink href="/">
              <Button>Back to Homepage</Button>
            </NextLink>
          </Box>
        </Layout>
      </>
    );

  return (
    <>
      <Navbar />
      <Layout>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" minH="100vh">
            <Spinner />
          </Flex>
        ) : (
          <>
            <Box display="flex" height={780}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
              </Box>
              <Box ml={10} display="flex" flexDirection="column">
                <Heading fontSize='5xl'>{data.apartment.name}</Heading>
                <Text>{data.apartment.address}</Text>
                <Text>Build in: {data.apartment.year}</Text>
                <Text fontSize='4xl'>Apartment</Text>
                <Text fontSize='2xl'>Price: {data.apartment.price}</Text>
                <Text>Square: {data.apartment.square}</Text>
                <Text>Rooms: {data.apartment.rooms}</Text>
                <Text>Floor: {data.apartment.floor}</Text>
                <Text>Water: {data.apartment.water}</Text>
                <Text>Balcony: {data.apartment.balcony}</Text>
                <Text fontSize='4xl'>Building</Text>
                <Text>{data.apartment.elevator && `Elevator`}</Text>
                <Text>Park: {data.apartment.park}</Text>
              </Box>
            </Box>
          </>
        )}
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<ApartmentIdsQuery>({
    query: ApartmentIdsDocument,
    variables: { limit },
  });

  return {
    paths: data.apartments!.paginatedApartments.map((apartment) => ({
      params: { id: `${apartment.id}` },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  { [key: string]: any },
  { id: string }
> = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query<ApartmentQuery>({
    query: ApartmentDocument,
    variables: { id: params?.id },
  });

  return addApolloState(apolloClient, { props: {} });
};

export default Apartment;
