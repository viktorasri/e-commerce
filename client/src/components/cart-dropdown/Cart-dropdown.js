import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { CartDropdownContainer, CartItemsContainer, EmptyMessge } from './cart-dropdown.styles';
import CustomButton from '../custom-button/Custom-button';
import CartItem from '../cart-item/Cart-item';

import { cartItemsSelector } from '../../redux/selectors/cart.selectors';
import { toggleCartDropdown } from '../../redux/actions';

const CartDropdown = ({ cartItems, history, toggleCartDropdown }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>{renderCartItems(cartItems)}</CartItemsContainer>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartDropdown();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  );
};

const renderCartItems = cartItems => {
  return cartItems.length ? (
    cartItems.map(item => <CartItem key={item.id} item={item} />)
  ) : (
    <EmptyMessge>Your cart is empty</EmptyMessge>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

const connectWrap = connect(mapStateToProps, { toggleCartDropdown })(CartDropdown);

export default withRouter(connectWrap);
