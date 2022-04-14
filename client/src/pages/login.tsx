import {
    Box,
    Button,
    Center,
    Flex,
    InputGroup,
    InputRightElement,
    Spacer,
    Spinner,
    useToast
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { CheckLoginDocument, CheckLoginQuery, LoginInput, useLoginMutation } from "../generated/graphql";
import { ShowFieldErrors } from "../helpers/ShowFieldErrors";
import { useCheckAuth } from "../utils/useCheckAuth";

const Login = () => {
  const router = useRouter();
  const toast = useToast();
  const {data: authData, loading: authLoading} = useCheckAuth();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const initialValues: LoginInput = {
    usernameOrEmail: "",
    password: ""
  };

  const [LoginUser, { loading: _login, data, error }] =
    useLoginMutation();

  const onLoginSubmit = async (
    values: LoginInput,
    { setErrors }: FormikHelpers<LoginInput>
  ) => {
    const response = await LoginUser({
      variables: {
        loginInput: values,
      },
      update(cache, result) {
        // const checkloginData = cache.readQuery({query: CheckLoginDocument})
        // console.log('checkloginData: ', checkloginData);
        console.log('result: ', result.data);

        if(result.data?.login.success) {
          cache.writeQuery<CheckLoginQuery>({
            query: CheckLoginDocument,
            data: {
              checklogin: {
                id: result.data.login.user?.id,
                email: result.data.login.user?.email,
                username: result.data.login.user?.username,
                admin: result.data.login.user?.admin
              }
            }
          })
        }
      }
    });
    if (response.data?.login?.errors) {
      setErrors(ShowFieldErrors(response.data.login.errors));
    } else if (response.data?.login?.user) {
      toast({
        title: "Hi",
        description: `${response.data.login.user.username}`,
        status: "success",
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
      router.push("/");
    }
  };

  return (
    <>
      {
        authLoading || (!authLoading && authData?.checklogin) ? (
          <Flex justifyContent='center' align='center' minH='100vh'>
            <Spinner />
          </Flex>
        ) :(
          <Wrapper size="small">
            {error && <p>failed to Login . Internal server error</p>}
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
                      <Link href="/forgot-password">
                        Forgot Password
                      </Link>
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
        )
      }
    </>
    
  );
};

export default Login;
