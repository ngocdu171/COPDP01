import { Button, Center } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import InputField from '../components/InputField'
import Wrapper from '../components/Wrapper'

const ChangePassword = () => {
    const initialValues = {newPassword: ''}

    const
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
  )
}

export default ChangePassword