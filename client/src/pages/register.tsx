import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { useState } from "react"

const Register = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  return (
    <Box maxW='400px' w='100%' mt={10} mx='auto'>
      <Formik initialValues={{username: '', password: ''}} onSubmit={values => console.log(values)}>
        {({values, handleChange}) => (
            <Form>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" placeholder="Username" value={values.username} onChange={handleChange}/>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
              <Input id="password" placeholder="Password" type={show ? 'text' : 'password'} value={values.password} onChange={handleChange} />
              <InputRightElement><Button onClick={handleShow}>{show ? 'Hide' : 'Show'}</Button></InputRightElement>
            </InputGroup>
            <Button colorScheme='blue' type="submit">Button</Button>
          </FormControl>
        </Form>
        )}
      </Formik>
    </Box>
  )
}

export default Register