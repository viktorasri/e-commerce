import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignupContainer, Title } from './sign-up.styles';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { signUpStart } from '../../redux/actions';

const SignUp = ({ signUp }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const onSubmit = async e => {
    e.preventDefault();
    signUp(userCredentials);
  };

  const onChange = e => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignupContainer>
      <Title>I do not have a account</Title>
      <span>Sign up with your email and password</span>

      <form onSubmit={onSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={onChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={email} onChange={onChange} label="Email" required />
        <FormInput type="password" name="password" value={password} onChange={onChange} label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignupContainer>
  );
};

const mapDispatchToProps = {
  signUp: signUpStart
};

export default connect(null, mapDispatchToProps)(SignUp);
