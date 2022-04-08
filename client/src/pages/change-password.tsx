import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { ChangePasswordInput, useChangePasswordMutation } from '../generated/graphql'

const ChangePassword = () => {
  const router = useRouter();
  const initialValues = {newPassword: ''}
  const [tokenError, setTokenError] = useState('')
  const [changePassword, {loading}] = useChangePasswordMutation();

  const onChangePasswordSubmit = async (values: ChangePasswordInput, {setErrors}: FormikHelpers<ChangePasswordInput>) => {
    if(router.query.userId && router.query.token) {
      const response = await changePassword({
        variables: {
          userId: router.query.userId as string,
          token: router.query.token as string,
          changePasswordInput: values
        }
      })
      
      if(response.data?.changePassword.errors) {
        const fieldErrors = response.data.changePassword.errors[0]
        if(fieldErrors.field === 'token') {
          setTokenError(fieldErrors.message)
        }
        setErrors(fieldErrors)
      }
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
            {tokenError && <Flex>
                <Box color={'red'} mr={2}>
                  {tokenError}
                </Box>
                <Link href='/forgot-password'>Go back to Forgot Password</Link>
              </Flex>}
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