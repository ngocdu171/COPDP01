import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { useRouter } from "next/router";
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

  return <div>asdasda</div>;
};

export default Apartment;
