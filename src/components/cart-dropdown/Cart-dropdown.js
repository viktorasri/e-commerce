import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.scss';
import CustomButton from '../custom-button/Custom-button';
import CartItem from '../cart-item/Cart-item';
import { cartItemsSelector } from '../../redux/selectors/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: cartItemsSelector(state)
});

export default connect(mapStateToProps)(CartDropdown);
