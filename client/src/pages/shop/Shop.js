import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/actions';
import Spinner from '../../components/spinner/Spinner';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/Collection-overview.container')
);
const CollectionContainer = lazy(() => import('../collection/Collection.container'));

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = {
  fetchCollections: fetchCollectionsStart,
};

export default connect(null, mapDispatchToProps)(Shop);
