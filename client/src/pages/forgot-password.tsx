import {
  Box,
  Button,
  Center
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import {
  ForgotPasswordInput,
  useForgotPasswordMutation
} from "../generated/graphql";

const ForgotPassword = () => {
  const initialValues = { email: "" };
  const [forgotPassword, { loading, data }] = useForgotPasswordMutation();
  const onForgotPasswordSubmit = async (values: ForgotPasswordInput) => {
    await forgotPassword({ variables: { forgotPasswordInput: values } });
  };
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
