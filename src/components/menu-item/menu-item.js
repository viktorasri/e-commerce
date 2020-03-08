import React from 'react';
import './menu-item.scss';
import { withRouter, Link } from 'react-router-dom';

const menuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  return (
    <Link to={`${match.url}${linkUrl}`} className={`${size ? size : ''} menu-item`}>
      <div style={{ backgroundImage: `URL(${imageUrl}` }} className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </Link>
  );
};

export default withRouter(menuItem);
