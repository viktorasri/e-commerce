import React from 'react';
import { CartItemContainer, CartImage, ItemDetails, Name, Price } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>{`${quantity} x $${price}`}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
