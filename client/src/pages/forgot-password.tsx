import {
  Box,
  Button,
  Center,
  Flex,
  Spinner
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import {
  ForgotPasswordInput,
  useForgotPasswordMutation
} from "../generated/graphql";
import { useCheckAuth } from "../utils/useCheckAuth";

const ForgotPassword = () => {

  const {data: authData, loading: authLoading} = useCheckAuth()
  const initialValues = { email: "" };
  const [forgotPassword, { loading, data }] = useForgotPasswordMutation();
  const onForgotPasswordSubmit = async (values: ForgotPasswordInput) => {
    await forgotPassword({ variables: { forgotPasswordInput: values } });
  };

  if (authLoading || (!authLoading && authData?.checklogin)) {
    return (
      <Flex justifyContent='center' alignItems='center' minH='100vh'>
        <Spinner />
      </Flex>
    )
  } else
    return (
      <Wrapper>
        <Formik initialValues={initialValues} onSubmit={onForgotPasswordSubmit}>
          {({ isSubmitting }) => !loading && data ? <Box>Please check your inbox</Box> : (
            <Form>
              <InputField
                name="email"
                label="Email"
                placeholder="Email"
                type="email"
              />

              <Center>
                <Button
                  type="submit"
                  colorScheme="blue"
                  mt={4}
                  isLoading={isSubmitting}
                >
                  Send
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
};

export default ForgotPassword;
