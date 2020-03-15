import React from 'react';
import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
`;

export const ArrowContainer = styled.div`
  padding: 0 10px;
  cursor: pointer;
  user-select: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #4285f4;
  }
`;

export const RemoveButtonContainer = styled.span`
  padding-left: 12px;
  cursor: pointer;
  user-select: none;
  transition: color 200ms ease-in-out;

  &:hover {
    color: #4285f4;
  }
`;
