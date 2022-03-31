import Navbar from "../components/Navbar";
import {
  GetallApartmentDocument,
  useGetallApartmentQuery,
} from "../generated/graphql";
import { addApolloState, initializeApollo } from "../lib/apolloClient";

const Index = () => {
  const { data, loading } = useGetallApartmentQuery();

  return (
    <>
      <Navbar />
      {loading ? (
        "LOADING..."
      ) : (
        <ul>
          {data?.apartments?.map((apartment) => (
            <li>{apartment.name}</li>
          ))}
        </ul>
      )}
    </>
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
