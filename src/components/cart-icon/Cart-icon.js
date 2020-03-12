import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.scss';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartDropdown } from '../../redux/actions';
import { quantitySelector } from '../../redux/selectors/cart.selectors';

const CartIcon = ({ toggleCartDropdown, quantity }) => {
  return (
    <div onClick={toggleCartDropdown} className="cart-icon">
      <Icon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

const mapDispatchToProps = {
  toggleCartDropdown
};

const mapStateToProps = state => {
  return {
    quantity: quantitySelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
