import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection-overview.scss';
import CollectionPreview from '../collection-preview/Colection-preview';
import { collectionsSelector } from '../../redux/selectors/shop.selectors';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {Object.values(collections).map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: collectionsSelector
});

export default connect(mapStateToProps)(CollectionsOverview);
