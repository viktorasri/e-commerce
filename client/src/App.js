import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyles, Container } from './global.styles';
import { checkUserSession } from './redux/actions';
import { isSignedInSelector } from './redux/selectors/auth.selector';
import ErrorBoundary from './components/error-boundary/Error-boundary';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(() => import('./pages/homepage/HomePage'));
const SignInSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/Sign-in-and-sign-up'));
const Shop = lazy(() => import('./pages/shop/Shop'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/Checkout-page'));

const App = ({ checkUserSession, isSignedIn }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const SignInSignUpPageRender = () => {
    return isSignedIn ? <Redirect to="/" /> : <SignInSignUpPage />;
  };

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <ErrorBoundary>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/signin" render={SignInSignUpPageRender} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </ErrorBoundary>
        </Suspense>
      </Switch>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: isSignedInSelector,
});

const mapDispatchToProps = {
  checkUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
