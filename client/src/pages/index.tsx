import Navbar from "../components/Navbar"
import { GetallApartmentDocument } from "../generated/graphql"
import { addApolloState, initializeApollo } from "../lib/apolloClient"

const Index = () => (
  <>
    <Navbar />
    <p>HOME</p>
  </>
)

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: GetallApartmentDocument
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}

export default Index
