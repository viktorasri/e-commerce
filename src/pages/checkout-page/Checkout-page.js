import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout-page.scss';
import { cartItemsSelector, totalSelector } from '../../redux/selectors/cart.selectors';

import CheckoutItem from '../../components/checkout-item/Checkout-item';
import StripeButton from '../../components/stripe-button/Stripe-button';

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use following test card for payments* <br /> 4242 4242 4242 4242 - Exp: 02/22 - CVV:123
      </div>

      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: totalSelector
});

export default connect(mapStateToProps)(CheckoutPage);
