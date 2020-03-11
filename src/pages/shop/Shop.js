import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/Colection-preview';

export default class Shop extends Component {
  state = { collections: SHOP_DATA };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
