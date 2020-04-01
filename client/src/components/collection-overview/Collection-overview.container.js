import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isFethcingSelector } from '../../redux/selectors/shop.selectors';
import withSpinner from '../with-spinner/With-spinner';
import CollectionOverview from './Collection-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: isFethcingSelector
});

const CollectionOverviewContainer = compose(connect(mapStateToProps), withSpinner)(CollectionOverview);

export default CollectionOverviewContainer;
