import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionLink, Options } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { isSignedInSelector } from '../../redux/selectors/auth.selector';
import { isHiddenSelector } from '../../redux/selectors/cart.selectors';

const Header = ({ isSignedIn, isHidden }) => {
  const renderSignInSignOutButton = isSignedIn => {
    return isSignedIn ? (
      <OptionLink as="div" onClick={() => auth.signOut()}>
        SIGN OUT
      </OptionLink>
    ) : (
      <OptionLink to="/signin">SIGN IN</OptionLink>
    );
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <Options>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {renderSignInSignOutButton(isSignedIn)}
        <CartIcon />
      </Options>
      {isHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isSignedIn: isSignedInSelector,
  isHidden: isHiddenSelector
});

export default connect(mapStateToProps)(Header);
