import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/collection-preview/Colection-preview';
import { collectionsSelector } from '../../redux/selectors/shop.selectors';

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelector
});

export default connect(mapStateToProps)(Shop);
