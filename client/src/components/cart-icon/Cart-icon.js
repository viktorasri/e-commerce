import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ItemCountContainer } from './cart-icon.styles';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartDropdown } from '../../redux/actions';
import { quantitySelector } from '../../redux/selectors/cart.selectors';

const CartIcon = ({ toggleCartDropdown, quantity }) => {
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <Icon />
      <ItemCountContainer>{quantity}</ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = {
  toggleCartDropdown
};

const mapStateToProps = createStructuredSelector({
  quantity: quantitySelector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
