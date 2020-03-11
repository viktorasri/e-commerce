import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.scss';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartDropdown } from '../../redux/actions';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div onClick={toggleCartDropdown} className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartDropdown
};

export default connect(null, mapDispatchToProps)(CartIcon);
