import React from 'react';
import { connect } from 'react-redux';

import { CollectionPage, Title, ItemsContainer } from './collection.styles';
import { colectionSelector } from '../../redux/selectors/shop.selectors';
import CollectionItem from '../../components/colection-item/Collection-item';

const Collection = ({ collection: { title, items } }) => {
  return (
    <CollectionPage>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: colectionSelector(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(Collection);
