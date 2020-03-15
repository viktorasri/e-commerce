import React from 'react';
import { connect } from 'react-redux';

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton
} from './collection-item.styles';
import { addToCart } from '../../redux/actions';

const CollectionItem = ({ item, addToCart }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} className="image" />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addToCart(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(CollectionItem);
