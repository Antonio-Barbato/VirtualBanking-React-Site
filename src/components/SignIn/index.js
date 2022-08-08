import React from 'react'
import { Container, FormH1, FormWrap, Icon, FormContent, Form, FormLabel,FormInput,FormButton, Text } from './SignInElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
            <Form action='#'>
                <FormH1>Sign in to yuor Account</FormH1>
                <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required/>
                <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'>Continue</FormButton>
                <Text>Forgot Password</Text>
            </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default SignIn
