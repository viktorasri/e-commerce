import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/With-spinner';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { getCollections } from '../../redux/actions';
import CollectionOverview from '../../components/collection-overview/Collection-overview';
import Collection from '../collection/Collection';

const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollection = WithSpinner(Collection);

class Shop extends React.Component {
  state = {
    isLoading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      this.props.updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => <WithSpinnerCollectionOverview isLoading={isLoading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <WithSpinnerCollection isLoading={isLoading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateCollections: getCollections
};

export default connect(null, mapDispatchToProps)(Shop);
