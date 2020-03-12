import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/Custom-button';
import CartItem from '../cart-item/Cart-item';

import { cartItemsSelector } from '../../redux/selectors/cart.selectors';
import { toggleCartDropdown } from '../../redux/actions';

const CartDropdown = ({ cartItems, history, toggleCartDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderCartItems(cartItems)}</div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCartDropdown();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const renderCartItems = cartItems => {
  return cartItems.length ? (
    cartItems.map(item => <CartItem key={item.id} item={item} />)
  ) : (
    <span className="empty-message">Your cart is empty</span>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

const connectWrap = connect(mapStateToProps, { toggleCartDropdown })(CartDropdown);

export default withRouter(connectWrap);
