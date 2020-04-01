import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  MenuItemLink,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const menuItem = ({ title, imageUrl, size, linkUrl, match }) => {
  return (
    <MenuItemLink to={`${match.url}${linkUrl}`} size={size}>
      <BackgroundImageContainer imageUrl={imageUrl} className="image" />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemLink>
  );
};

export default withRouter(menuItem);
