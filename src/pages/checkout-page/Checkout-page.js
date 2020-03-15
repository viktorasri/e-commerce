import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartItemsSelector, totalSelector } from '../../redux/selectors/cart.selectors';
import { CheckoutPageContainer, CheckoutHeader, HeaderBlock, Total, WarningMessage } from './checkout-page.styles';
import CheckoutItem from '../../components/checkout-item/Checkout-item';
import StripeButton from '../../components/stripe-button/Stripe-button';

const CheckoutPage = ({ total, cartItems }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Total>
        <span>TOTAL: ${total}</span>
      </Total>
      <WarningMessage>
        *Please use following test card for payments* <br /> 4242 4242 4242 4242 - Exp: 02/22 - CVV:123
      </WarningMessage>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  total: totalSelector
});

export default connect(mapStateToProps)(CheckoutPage);
