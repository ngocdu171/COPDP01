import { Box, Button, Center } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import InputField from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { ChangePasswordInput, useChangePasswordMutation } from '../generated/graphql'

const ChangePassword = () => {
  const router = useRouter();
    const initialValues = {newPassword: ''}
    const [changePassword, {loading}] = useChangePasswordMutation();
    const onChangePasswordSubmit = async (values: ChangePasswordInput) => {
      if(router.query.userId && router.query.token) {
        const response = await changePassword({
          variables: {
            userId: router.query.userId as string,
            token: router.query.token as string,
            changePasswordInput: values
          }
        })
        console.log(response);
        
      }
      
    }
  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={onChangePasswordSubmit}>
        {({ isSubmitting }) => 
        // !loading && data ? <Box>Please check your inbox</Box> : 
        (
          <Form>
            <InputField
              name="newPassword"
              label="New Password"
              placeholder="New Password"
              type="text"
            />

            <Center>
              <Button
                type="submit"
                colorScheme="blue"
                mt={4}
                isLoading={isSubmitting}
              >
                Change Password
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default ChangePassword