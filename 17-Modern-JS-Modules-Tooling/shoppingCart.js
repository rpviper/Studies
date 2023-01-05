// Exporting module:
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

const totalPrice = 300;
const totalQuantity = 25;

export { totalPrice, totalQuantity as total }; // Here we change the totalquantity to total, so import has to say total now
