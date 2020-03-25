import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer, LogoContainer, OptionLink, Options } from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import { auth } from '../../firebase/firebase.utils';
import { isSignedInSelector } from '../../redux/selectors/auth.selector';
import { isHiddenSelector } from '../../redux/selectors/cart.selectors';
import { signOutStart } from '../../redux/actions';

const Header = ({ isSignedIn, isHidden, signOut }) => {
  const renderSignInSignOutButton = isSignedIn => {
    return isSignedIn ? (
      <OptionLink as="div" onClick={signOut}>
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

const mapDispatchToProps = {
  signOut: signOutStart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
