import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './app.scss';
import { signIn, signOut } from './redux/actions';
import HomePage from './pages/homepage/Homepage';
import SignInSignUpPage from './pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { isSignedInSelector } from './redux/selectors/auth.selector';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.signIn({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.signOut();
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  SignInSignUpPageRender = () => {
    return this.props.isSignedIn ? <Redirect to="/" /> : <SignInSignUpPage />;
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" render={this.SignInSignUpPageRender} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn,
  signOut
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: isSignedInSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
