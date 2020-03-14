import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_lZvMbZJB1UX1afeUJdndDMAH008e4rJQNx';

  const onToken = token => {
    alert('Payment success');
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My Clothes Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicKey}
    />
  );
};

export default StripeButton;
