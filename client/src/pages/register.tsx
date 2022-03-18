import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import InputField from "../components/InputField";
import Wrapper from "../components/Wrapper";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (
    <Wrapper>
      <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      >
        {({}) => (
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
                  type={show ? 'text' : 'password'}
                />

                <InputRightElement>
                  <Button onClick={handleShow}>{show ? 'Hide' : 'Show'}</Button>
                </InputRightElement>
              </InputGroup>
              </Box>

              <Button type="submit" colorScheme='blue' mt={4}>Register</Button>
              
          </Form>
        )}
      </Formik>
    </Wrapper>

     
    // <Box maxW='400px' w='100%' mt={10} mx='auto'>
    //   <Formik initialValues={{username: '', password: ''}} onSubmit={(values) => {
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
    //         <Button colorScheme='blue' type="submit">Button</Button>
    //       </Form>
    //     )}
    //   </Formik>
    // </Box>
    
  );
};

export default Register;
