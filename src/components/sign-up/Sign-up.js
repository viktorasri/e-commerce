import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignupContainer, Title } from './sign-up.styles';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { signUpStart } from '../../redux/actions';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  onSubmit = async e => {
    e.preventDefault();
    const { signUp } = this.props;
    signUp(this.state);
  };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignupContainer>
        <Title>I do not have a account</Title>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.onSubmit} className="sign-up-form">
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.onChange}
            label="Display Name"
            required
          />
          <FormInput type="email" name="email" value={email} onChange={this.onChange} label="Email" required />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignupContainer>
    );
  }
}

const mapDispatchToProps = {
  signUp: signUpStart
};

export default connect(null, mapDispatchToProps)(SignUp);
