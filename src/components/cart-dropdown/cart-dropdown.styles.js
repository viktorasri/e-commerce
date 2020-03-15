import React from 'react';
import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  bottom: 0;
  transform: translate3d(0, 100%, 0);
  right: 0;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessge = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
