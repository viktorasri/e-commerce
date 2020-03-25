import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SigninContainer, ButtonsContainer, Title } from './sign-in.style';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/actions';

class SignIn extends Component {
  state = { password: '', email: '' };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { emailSignIn } = this.props;
    const { email, password } = this.state;

    emailSignIn({ email, password });
  };

  render() {
    const { googleSignIn } = this.props;
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
            <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SigninContainer>
    );
  }
}

const mapDispatchToProps = {
  googleSignIn: googleSignInStart,
  emailSignIn: emailSignInStart
};

export default connect(null, mapDispatchToProps)(SignIn);
