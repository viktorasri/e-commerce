import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from './redux/actions';

import './app.scss';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/header';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
