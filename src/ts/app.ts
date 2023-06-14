import Cart from './cart';

const cart = new Cart;

cart.add({
  id: 114,
  name: 'The War of the Worlds',
  price: 1268,
});

cart.add({
  id: 231,
  name: "We'll Meet Again",
  price: 2126,
});

cart.add({
  id: 397,
  name: 'The Avengers',
  price: 954,
});

console.log(cart.items);
