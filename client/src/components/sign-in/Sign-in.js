import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SigninContainer, ButtonsContainer, Title } from './sign-in.style';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/actions';

const SignIn = ({ googleSignIn, emailSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({ password: '', email: '' });
  const { email, password } = userCredentials;

  const onChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    emailSignIn({ email, password });
  };

  return (
    <SigninContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmit}>
        <FormInput label="Email" onChange={onChange} name="email" type="email" value={email} required />
        <FormInput label="Password" onChange={onChange} name="password" type="password" value={password} required />
        <ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};

const mapDispatchToProps = {
  googleSignIn: googleSignInStart,
  emailSignIn: emailSignInStart
};

export default connect(null, mapDispatchToProps)(SignIn);
