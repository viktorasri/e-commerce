import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { isSignedInSelector } from '../../redux/selectors/auth.selector';
import { isHiddenSelector } from '../../redux/selectors/cart.selectors';

const Header = ({ isSignedIn, isHidden }) => {
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
        {renderSignInSignOutButton(isSignedIn)}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDropdown />}
    </div>
  );
};

const renderSignInSignOutButton = isSignedIn => {
  return isSignedIn ? (
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
  );
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: isSignedInSelector,
  isHidden: isHiddenSelector
});

export default connect(mapStateToProps)(Header);
