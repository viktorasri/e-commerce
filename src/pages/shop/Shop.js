import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/actions';

import CollectionOverviewContainer from '../../components/collection-overview/Collection-overview.container';
import CollectionContainer from '../collection/Collection.container';

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
    </div>
  );
};

const mapDispatchToProps = {
  fetchCollections: fetchCollectionsStart
};

export default connect(null, mapDispatchToProps)(Shop);
