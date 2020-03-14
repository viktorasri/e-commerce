import React from 'react';
import { connect } from 'react-redux';

import './collection.scss';
import { colectionSelector } from '../../redux/selectors/shop.selectors';
import CollectionItem from '../../components/colection-item/Collection-item';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: colectionSelector(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(Collection);
