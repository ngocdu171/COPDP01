import { Alert, AlertIcon, AlertTitle, Box, Flex, Heading, Spinner } from "@chakra-ui/react";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import { useApartmentQuery } from "../../generated/graphql";

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
            <Heading>{data.apartment.name}</Heading>
          </>
        )}
      </Layout>
      <Footer />
    </>
    
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   //
// }

export default Apartment;
