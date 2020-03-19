import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { isLoadingSelector } from '../../redux/selectors/shop.selectors';
import withSpinner from '../../components/with-spinner/With-spinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !isLoadingSelector(state)
});

const CollectionContainer = compose(connect(mapStateToProps), withSpinner)(Collection);

export default CollectionContainer;
