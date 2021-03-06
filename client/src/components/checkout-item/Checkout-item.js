import React from 'react';
import { connect } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
  ArrowContainer
} from './checkout-item.styles';
import { addToCart, removeFromCart, deleteCartItems } from '../../redux/actions';

const CheckoutItem = ({ item, removeFromCart, addToCart }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeFromCart(item)}>&#10094;</ArrowContainer>
        <span>{quantity}</span>
        <ArrowContainer onClick={() => addToCart(item)}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <TextContainer>{`$${price}`}</TextContainer>
      <RemoveButtonContainer
        onClick={() => {
          deleteCartItems(item);
        }}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = {
  deleteCartItems,
  addToCart,
  removeFromCart
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
