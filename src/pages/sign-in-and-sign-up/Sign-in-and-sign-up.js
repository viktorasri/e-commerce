import React from 'react';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';
import SignIn from '../../components/sign-in/Sign-in';
import SignUp from '../../components/sign-up/Sign-up';

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
