import {
  Box,
  Button,
  Center,
  Flex,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { RegisterInput, useRegisterMutation } from "../generated/graphql";
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
      {error && <p>Logined failure. Internal server error</p>}
      {data && data.login.success && (
        <p>Registered succesfully {JSON.stringify(data)}</p>
      )}
      <Formik initialValues={initialValues} onSubmit={onLoginSubmit}>
        {({ values, isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="Username"
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
                <label>
                  <Field type="Checkbox" name="admin" value={values.admin} />
                  Admin
                </label>
              </Box>
              <Spacer />
              <Box>
                <Link href="/login">Login Here</Link>
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
