import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

import { RegisterInput, useRegisterMutation } from "../generated/graphql";

const Register = () => {
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
      setErrors({
        username: 'wrong!'
      })
    }
    
  };

  return (
    <Wrapper>
      {error && <p>Registered failure</p>}
      {data && data.register.success && <p>Registered succesfully {JSON.stringify(data)}</p>}
      <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
        {({ values }) => (
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

                <InputRightElement>
                  <Button onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <label>
              <Field type="Checkbox" name="admin" value={values.admin} />
              Admin
            </label>
            {/* <Checkbox value={values.admin} colorScheme={'red'}>Admin</Checkbox> */}

            <Button type="submit" colorScheme="blue" mt={4}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>

    // <Box maxW='400px' w='100%' mt={10} mx='auto'>
    //   <Formik initialValues={{username: '',email: '', password: '', admin: false}} onSubmit={(values) => {
    //       console.log(values)
    //     }}
    //   >
    //     {({values, handleChange, errors}) => (
    //       <Form>
    //           <FormControl isRequired>
    //           <FormLabel htmlFor="username">Username</FormLabel>
    //           <Input id="username" placeholder="Username" value={values.username} onChange={handleChange}/>
    //           {errors && <FormErrorMessage>{errors}</FormErrorMessage>}
    //         </FormControl>

    //         <FormControl isRequired>
    //           <FormLabel htmlFor="password">Password</FormLabel>
    //           <InputGroup>
    //             <Input id="password" placeholder="Password" type={show ? 'text' : 'password'} value={values.password} onChange={handleChange} />
    //             {errors && <FormErrorMessage>{errors}</FormErrorMessage>}
    //             <InputRightElement><Button onClick={handleShow}>{show ? 'Hide' : 'Show'}</Button></InputRightElement>
    //           </InputGroup>
    //         </FormControl>
    //         <Input type="checkbox" />

    //         <label><Field type="Checkbox" name="admin" value={values.admin} />Admin</label>

    //         <Button colorScheme='blue' type="submit">Button</Button>
    //       </Form>
    //     )}
    //   </Formik>
    // </Box>
  );
};

export default Register;
