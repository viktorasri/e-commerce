import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverviewContainer } from './collection-overview.styles';
import CollectionPreview from '../collection-preview/Colection-preview';
import { collectionsForShopPageSelector } from '../../redux/selectors/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsForShopPageSelector
});

export default connect(mapStateToProps)(CollectionsOverview);
