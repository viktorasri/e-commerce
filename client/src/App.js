import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './app.scss';

import HomePage from './pages/homepage/HomePage';
import SignInSignUpPage from './pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import Shop from './pages/shop/Shop';
import CheckoutPage from './pages/checkout-page/Checkout-page';
import Header from './components/header/Header';
import { checkUserSession } from './redux/actions';
import { isSignedInSelector } from './redux/selectors/auth.selector';

const App = ({ checkUserSession, isSignedIn }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const SignInSignUpPageRender = () => {
    return isSignedIn ? <Redirect to="/" /> : <SignInSignUpPage />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" render={SignInSignUpPageRender} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: isSignedInSelector
});

const mapDispatchToProps = {
  checkUserSession
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
