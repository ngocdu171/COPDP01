import {
  Box,
  Button,
  Center, Flex, InputGroup,
  InputRightElement,
  Spacer
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";
import { RegisterInput, useRegisterMutation } from "../generated/graphql";
import { ShowFieldErrors } from "../helpers/ShowFieldErrors";


const Register = () => {
  const router = useRouter()
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const initialValues: RegisterInput = { username: "", email: "", password: "", admin: false };

  const [registerUser, { loading: _register, data, error }] = useRegisterMutation()

  const onRegisterSubmit = async (values: RegisterInput, {setErrors}: FormikHelpers<RegisterInput>) => {
    const response = await registerUser({
      variables: {
        registerInput: values,
      }
    })
    if(response.data?.register?.errors) {
      setErrors(ShowFieldErrors(response.data.register.errors))
    }
    else if(response.data?.register?.user) {
      router.push('/')
    }
    
  };

  return (
      <Wrapper>
        {error && <p>Registered failure. Internal server error</p>}
        {data && data.register.success && <p>Registered succesfully {JSON.stringify(data)}</p>}
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
                <Box><Link href="/login">Login Here</Link></Box>
              </Flex>
              
              <Center>
                <Button type="submit" colorScheme="blue" mt={4} isLoading={isSubmitting}>
                Register
              </Button>
              </Center>
              
            </Form>
          )}
        </Formik>
      </Wrapper>
    
  );
};

export default Register;
