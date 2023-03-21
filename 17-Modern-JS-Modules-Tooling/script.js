// IMPORTS ARE NOT COPIES, THEY ARE SAME OBJECT

// Importing module:
// import { addToCart, totalPrice as price, total } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, total);

console.log('Importing module');
// console.log(shippingCost); // This wont work since not imported

import * as ShoppingCart from './shoppingCart.js'; // Import everything (*) and name it as ShoppingCart
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice); // This comes from export too

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); // Google jsonplaceholder
  const data = await res.json();
  // console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
  // Title and text are our choosing, representing title and body from the address provided
};
const lastPost2 = await getLastPost(); // Top level await
console.log(lastPost2);

const shoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    // Returning makes them available/not private
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
shoppingCart.addToCart('apple', 4);
