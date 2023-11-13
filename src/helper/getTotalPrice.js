export const getTotalPrice = (cart) => {
  const total = cart.reduce((sum, item) => (sum += item.subTotalPrice), 0);

  return total;
};
