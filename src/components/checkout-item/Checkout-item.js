import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';
import { deleteFromCart, addToCart, removeFromCart } from '../../redux/actions';

const CheckoutItem = ({ item, removeFromCart, addToCart }) => {
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeFromCart(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addToCart(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span onClick={() => removeFromCart(item)} className="remove-button">
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  deleteFromCart,
  addToCart,
  removeFromCart
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
