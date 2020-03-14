import { createSelector } from 'reselect';

const shop = state => state.shop;

export const collectionsSelector = createSelector(shop, shop => shop.collections);

export const colectionSelector = collectionUrlParam =>
  createSelector(collectionsSelector, collections => collections[collectionUrlParam]);
