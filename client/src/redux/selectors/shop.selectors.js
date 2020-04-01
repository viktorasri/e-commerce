import { createSelector } from 'reselect';

const shop = state => state.shop;

export const collectionsSelector = createSelector(shop, shop => shop.collections);

export const colectionSelector = collectionUrlParam =>
  createSelector(collectionsSelector, collections => (collections ? collections[collectionUrlParam] : null));

export const collectionsForShopPageSelector = createSelector(collectionsSelector, collections =>
  collections ? Object.values(collections) : []
);

export const isFethcingSelector = createSelector(shop, shop => shop.isFethcing);

export const isLoadingSelector = createSelector(shop, shop => !!shop.collections);
