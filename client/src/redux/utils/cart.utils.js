export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExistInCart = findItem(cartItems, cartItemToAdd);

  if (itemExistInCart) {
    return cartItems.map(item => (item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const itemExistInCart = findItem(cartItems, cartItemToRemove);

  if (itemExistInCart && itemExistInCart.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

  return cartItems.map(item => (item.id === cartItemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item));
};

const findItem = (itemsArr, itemToFind) => {
  return itemsArr.find(item => itemToFind.id === item.id);
};
