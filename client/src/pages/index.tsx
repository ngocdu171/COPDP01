import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  Spinner,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
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

      <Box
        alignItems="center"
        justifyContent="center"
      >
        <Box display='flex' justifyContent='center'>
          <Box display="flex" width={1440} height='fit-content'>
            <p>
              <Heading>
                <Text>s_rent</Text>
              </Heading>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              porttitor a turpis id varius. Maecenas porttitor augue non dui
              lobortis, eu placerat lacus consequat. Praesent porttitor augue
              non justo eleifend facilisis. Vivamus eu nisl ipsum. Curabitur
              accumsan odio eget nisi pellentesque, sed sollicitudin nibh
              efficitur. Vestibulum tellus nisl, finibus a odio nec, varius
              laoreet justo. Duis nunc arcu, vestibulum in semper in, luctus
              quis neque. Nunc accumsan nisi nec odio tempor pulvinar.
              <br />
              Praesent at mollis arcu. Donec quis varius mi. Nullam porta
              vulputate ante a cursus. Praesent elementum eu erat ac congue.
              Morbi ligula magna, pellentesque et nisl sed, suscipit fringilla
              turpis. Nullam fringilla euismod imperdiet. Suspendisse accumsan
              quam id nibh pellentesque vestibulum. In ornare urna purus, in
              suscipit diam venenatis eu. Curabitur vehicula molestie mi non
              rutrum. Suspendisse potenti. Aenean id mauris pellentesque purus
              sodales aliquet ut at tellus. Vestibulum ac turpis nibh. Aenean
              porta sit amet dui ultrices varius. Ut eleifend, enim eu venenatis
              tempor, nunc urna tincidunt urna, ac eleifend sem velit eget
              ipsum. Mauris tortor neque, sodales facilisis lobortis ac, maximus
              ut dui. Pellentesque vel interdum velit.
            </p>
            <Box w={5000}>
              <Img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
            </Box>
          </Box>
        </Box>
          
      </Box>

  <Box bg="blue.100">
    <Layout>
        {loading ? (
          <Flex justifyContent="center" align="center" minH="100vh">
            <Spinner />
          </Flex>
        ) : (
          <Box>
            <Wrap spacing="24px">
              {data?.apartments?.map((apartment) => (
                <Box
                  key={apartment.id}
                  maxW="464px"
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
                  <Box p={5} bg="white">
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
              ))}
            </Wrap>
          </Box>
        )}
      </Layout>
  </Box>
      
      <Box p={5} mt={3}>
        <Box display="flex" justifyContent="center">
          <Box
            width={1440}
            height="fit-content"
            display="flex"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexGrow={1}
              flexDirection="column"
              alignItems="center"
              height="fit-content"
              mt={5}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQ5JREFUSEu1lOsRQTEQhc/tQAlUgArohA7QydUBlaADKqAEKmDOTGJMso8k4+Znstlv9+yjw8CnG9g/SgBjABsASwCzENAVwBnAHsDDCtID9MG55YM2O83AAjDKaaGEtJ1LthqgJPLUH+XappcSgJrflcij/Vt5n6Q1kQBW9B4gy0ICWNp7gKwWEiBN3+s00/7fgBeA0W99JAAHaNFY5EsYyO93CXAAsGoEHAGsvQy4Ek6NAA4bC21mwMeaKY7OMnn4oHWIlYW2PbLoLQDfataFuCY8QKlUojQxTW+I2NNsW22r3kJbPlvWdfyjQVznJRJpkCLnNQDaMhMWnod7X5WlZA40SavvvSJXO0w/fAC7NTQZdPI3pQAAAABJRU5ErkJggg==" />
              <Text fontSize={30}>Find by exactly erea</Text>
            </Box>

            <Box
              display="flex"
              flexGrow={1}
              flexDirection="column"
              alignItems="center"
            >
              <Box>
                <Text mb={3}>Ritaharju</Text>
                <Text mb={3}>Kaijonharju</Text>
                <Text mb={3}>Linnanmaa</Text>
                <Text>Tuira</Text>
              </Box>
            </Box>

            <Box
              display="flex"
              flexGrow={1}
              flexDirection="column"
              alignItems="center"
            >
              <Box>
                <Text mb={3}>Laanila</Text>
                <Text mb={3}>Karjasilta</Text>
                <Text mb={3}>Raksila</Text>
                <Text>Hintta</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
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
