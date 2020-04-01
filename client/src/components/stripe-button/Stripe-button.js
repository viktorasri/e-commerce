import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_lZvMbZJB1UX1afeUJdndDMAH008e4rJQNx';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment was successful');
      })
      .catch(error => {
        console.log(error.response);
        alert('Payment was rejected, please duoble check your payment crediantials');
      });
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
