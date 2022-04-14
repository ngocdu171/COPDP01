import { Alert, AlertIcon, AlertTitle, Box, Button, Center, Flex, Spinner } from '@chakra-ui/react'
import { Form, Formik, FormikHelpers } from 'formik'
import { QueryDocumentKeys } from 'graphql/language/ast'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import Wrapper from '../components/Wrapper'
import { ChangePasswordInput, CheckLoginDocument, CheckLoginQuery, useChangePasswordMutation } from '../generated/graphql'
import { useCheckAuth } from '../utils/useCheckAuth'

const ChangePassword = () => {
  const router = useRouter();
  const {data: authData, loading: authLoading} = useCheckAuth();
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
        }, update(cache, result) {
          // const checkloginData = cache.readQuery({query: CheckLoginDocument})
          // console.log('checkloginData: ', checkloginData);
          console.log('result: ', result.data);
  
          if(result.data?.changePassword.success) {
            cache.writeQuery<CheckLoginQuery>({
              query: CheckLoginDocument,
              data: {
                checklogin: {
                  id: result.data.changePassword.user?.id,
                  email: result.data.changePassword.user?.email,
                  username: result.data.changePassword.user?.username,
                  admin: result.data.changePassword.user?.admin
                }
              }
            })
          }
        }
      })
      
      if(response.data?.changePassword.errors) {
        const fieldErrors = response.data.changePassword.errors[0]
        if(fieldErrors.field === 'token') {
          setTokenError(fieldErrors.message)
        }
        setErrors(fieldErrors)
      } else if (response.data?.changePassword.success) {
        router.push('/')
      }
    }
  }
  
  

  if (authLoading || (!authLoading && authData?.checklogin)) {
    return (
      <Flex justifyContent='center' alignItems='center' minH='100vh'>
        <Spinner />
      </Flex>
    )
  } else if (!router.query.token || !router.query.userId) {
    return (
      <Wrapper size='small'>
          <Alert status='error'
            width={'auto'}
          >
            <AlertIcon />
            <AlertTitle>Invalid password change request</AlertTitle>
          </Alert>
          <Flex mt={4}>
            <Box>
            <Link href="/login">
              Back to Login
            </Link>
            </Box>
          </Flex>
      </Wrapper>
    )
  } else {
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
                type="password"
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
}

export default ChangePassword