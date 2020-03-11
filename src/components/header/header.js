import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ isSignedIn }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>

        {isSignedIn ? (
          <div
            onClick={() => {
              auth.signOut();
            }}
            className="option"
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Header);
