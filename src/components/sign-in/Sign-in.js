import React, { Component } from 'react';

import { SigninContainer, ButtonsContainer, Title } from './sign-in.style';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = { password: '', email: '' };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ password: '', email: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <SigninContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmit}>
          <FormInput
            label="Email"
            onChange={this.onChange}
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            label="Password"
            onChange={this.onChange}
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <ButtonsContainer>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SigninContainer>
    );
  }
}

export default SignIn;
