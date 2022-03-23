import {
    Box,
    Button,
    Center,
    Flex,
    InputGroup,
    InputRightElement,
    Spacer
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { LoginInput, useLoginMutation } from "../generated/graphql";
import { ShowFieldErrors } from "../helpers/ShowFieldErrors";

const Login = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const initialValues: LoginInput = {
    usernameOrEmail: "",
    password: ""
  };

  const [LoginUser, { loading: _register, data, error }] =
    useLoginMutation();

  const onLoginSubmit = async (
    values: LoginInput,
    { setErrors }: FormikHelpers<LoginInput>
  ) => {
    const response = await LoginUser({
      variables: {
        loginInput: values,
      },
    });
    if (response.data?.login?.errors) {
      setErrors(ShowFieldErrors(response.data.login.errors));
    } else if (response.data?.login?.user) {
      router.push("/");
    }
  };

  return (
    <Wrapper>
      {error && <p>failed to Login . Internal server error</p>}
      {data && data.login.success && (
        <p>Logged in succesfully {JSON.stringify(data)}</p>
      )}
      <Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              label="Username or Email"
              placeholder="Username or Email"
            />
            <Box mt={4}>
              <InputGroup>
                <InputField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  type={show ? "text" : "password"}
                />
                <InputRightElement mt={8}>
                  <Button onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Flex mt={4}>
              <Box>
                <p>
                  Have already an account?
                </p>
              </Box>
              <Spacer />
              <Box>
                <Link href="/register">Register Here</Link>
              </Box>
            </Flex>

            <Center>
              <Button
                type="submit"
                colorScheme="blue"
                mt={4}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
