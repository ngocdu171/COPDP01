import {
  Box,
  Button,
  Center,
  Flex,
  InputGroup,
  InputRightElement,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { CheckLoginDocument, CheckLoginQuery, RegisterInput, useRegisterMutation } from "../generated/graphql";
import { ShowFieldErrors } from "../helpers/ShowFieldErrors";
import { useCheckAuth } from "../utils/useCheckAuth";

const Register = () => {
  const router = useRouter();
  const {data: authData, loading: authLoading} = useCheckAuth();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const initialValues: RegisterInput = {
    username: "",
    email: "",
    password: "",
    admin: false,
  };

  const [registerUser, { loading: _register, data, error }] =
    useRegisterMutation();

  const onRegisterSubmit = async (
    values: RegisterInput,
    { setErrors }: FormikHelpers<RegisterInput>
  ) => {
    const response = await registerUser({
      variables: {
        registerInput: values,
      },
      update(cache, result) {
        if(result.data?.register?.success) {
          cache.writeQuery<CheckLoginQuery>({
            query: CheckLoginDocument,
            data: {
              checklogin: {
                id: result.data.register.user?.id,
                email: result.data.register.user?.email,
                username: result.data.register.user?.username
              }
            }
          })
        }
      }
    });
    if (response.data?.register?.errors) {
      setErrors(ShowFieldErrors(response.data.register.errors));
    } else if (response.data?.register?.user) {
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
          <Wrapper>
          {error && <p>Registered failure. Internal server error</p>}
          {data && data.register?.success && (
            <p>Registered succesfully {JSON.stringify(data)}</p>
          )}
          <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
            {({ values, isSubmitting }) => (
              <Form>
                <InputField
                  name="username"
                  label="Username"
                  placeholder="Username"
                />
                <Box>
                  <InputField name="email" label="Email" placeholder="Email" />
                </Box>
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
                    Register
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

export default Register;
