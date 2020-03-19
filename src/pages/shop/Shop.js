import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/actions';

import CollectionOverviewContainer from '../../components/collection-overview/Collection-overview.container';
import CollectionContainer from '../collection/Collection.container';

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCollections: fetchCollectionsStartAsync
};

export default connect(null, mapDispatchToProps)(Shop);
