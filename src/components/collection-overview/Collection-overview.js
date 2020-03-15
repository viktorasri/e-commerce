import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverviewContainer } from './collection-overview.styles';
import CollectionPreview from '../collection-preview/Colection-preview';
import { collectionsSelector } from '../../redux/selectors/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {Object.values(collections).map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelector
});

export default connect(mapStateToProps)(CollectionsOverview);
