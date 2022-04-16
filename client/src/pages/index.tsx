import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  Spinner,
  Text,
  Wrap
} from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import {
  GetallApartmentDocument,
  useGetallApartmentQuery,
} from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

const Index = () => {
  const { data, loading } = useGetallApartmentQuery();
  // console.log(data);

  const typeOfRooms = (rooms: any) => {
    let roomType;
    if (rooms === "Studio") {
      roomType = "1H + KT";
    } else if (rooms === "2") {
      roomType = "2H + KT";
    } else {
      roomType = "3H + KT";
    }
    return roomType;
  };

  return (
    <>
    <Navbar />

    <Box backgroundColor={"pink.100"} alignItems="center" justifyContent='center'>
      <Wrapper>
        <Box display='flex'>
          <p><Heading><Text>s_rent</Text></Heading><br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor a turpis id varius. Maecenas porttitor augue non dui
        lobortis, eu placerat lacus consequat. Praesent porttitor augue non justo eleifend facilisis. Vivamus eu nisl ipsum. Curabitur
        accumsan odio eget nisi pellentesque, sed sollicitudin nibh efficitur. Vestibulum tellus nisl, finibus a odio nec, varius
        laoreet justo. Duis nunc arcu, vestibulum in semper in, luctus quis neque. Nunc accumsan nisi nec odio tempor pulvinar.
        <br />
        Praesent at mollis arcu. Donec quis varius mi. Nullam porta vulputate ante a cursus. Praesent elementum eu erat ac congue.
        Morbi ligula magna, pellentesque et nisl sed, suscipit fringilla turpis. Nullam fringilla euismod imperdiet. Suspendisse accumsan
        quam id nibh pellentesque vestibulum. In ornare urna purus, in suscipit diam venenatis eu. Curabitur vehicula molestie mi non
        rutrum. Suspendisse potenti. Aenean id mauris pellentesque purus sodales aliquet ut at tellus. Vestibulum ac turpis nibh. Aenean
        porta sit amet dui ultrices varius. Ut eleifend, enim eu venenatis tempor, nunc urna tincidunt urna, ac eleifend sem velit eget
        ipsum. Mauris tortor neque, sodales facilisis lobortis ac, maximus ut dui. Pellentesque vel interdum velit.
      </p>
      <Box w={5000}>
        <Img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
      </Box>
        </Box>
      
      </Wrapper>
    </Box>

    <Layout>
      {loading ? (
        <Flex justifyContent="center" align="center" minH="100vh">
          <Spinner />
        </Flex>
      ) : (
        <Box>
          
          <Wrap spacing="24px">
            {data?.apartments?.map((apartment) => (
              // <WrapItem key={} p={5} shadow='md' borderWidth='1px'>
              <Box
                key={apartment.id}
                maxW="464px"
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                <Box p={5}>
                  <Link href={`/apartment/${apartment.id}`}>
                    <Heading fontSize="xl">{apartment.name}</Heading>
                  </Link>
                  <Text color="gray.500" fontWeight="semibold">
                    {apartment.address}
                  </Text>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    m="5px 0px 5px 0px"
                  >
                    <Text>{apartment.price} €/month</Text>
                    <Text>{apartment.floor} floor</Text>
                  </Box>

                  <Box>
                    <Text>{typeOfRooms(apartment.rooms)} </Text>
                    <Text>{apartment.square}</Text>
                  </Box>

                  <Text>{apartment.vacant && "the apartment is vacant"}</Text>
                </Box>
              </Box>
              // </WrapItem>
            ))}
          </Wrap>
        </Box>
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
    <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GetallApartmentDocument,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Index;
