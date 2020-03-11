import React from 'react';
import { connect } from 'react-redux';

import './collection-item.scss';
import CustomButton from '../custom-button/Custom-button';
import { addToCart } from '../../redux/actions';

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addToCart(item);
        }}
        inverted
      >
        {' '}
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(CollectionItem);
