import Cart from '../cart.ts';

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('checking the addition of good to the cart', () => {
  const cart = new Cart();
  const good = { id: 100, name: test, price: 1000 };
  cart.add(good);
  expect(cart.items).toEqual([good]);
});

test('checking the total value of the item in the cart', () => {
  const cart = new Cart();
  cart.add({ id: 114, name: 'The War of the Worlds', price: 1268 });
  cart.add({ id: 231, name: "We'll Meet Again", price: 2126 });
  cart.add({ id: 397, name: 'The Avengers', price: 954 });
  expect(cart.sum()).toBe(4348);
});

test('checking the apply discount to the total cost of the item in the cart', () => {
  const cart = new Cart();
  cart.add({ id: 114, name: 'The War of the Worlds', price: 1268 });
  cart.add({ id: 231, name: "We'll Meet Again", price: 2126 });
  cart.add({ id: 397, name: 'The Avengers', price: 954 });
  expect(cart.sumDiscount(15)).toBe(3695.8);
});

test('checking the removal of an item from the cart', () => {
  const cart = new Cart();
  cart.add({ id: 114, name: 'The War of the Worlds', price: 1268 });
  cart.add({ id: 231, name: "We'll Meet Again", price: 2126 });
  cart.add({ id: 397, name: 'The Avengers', price: 954 });
  cart.deleteGood(231);
  expect(cart.items).toEqual([
    { id: 114, name: 'The War of the Worlds', price: 1268 },
    { id: 397, name: 'The Avengers', price: 954 },
  ]);
});

test('checking for removal of invalid product id from cart', () => {
  const cart = new Cart();
  cart.add({ id: 114, name: 'The War of the Worlds', price: 1268 });
  cart.add({ id: 231, name: "We'll Meet Again", price: 2126 });
  cart.add({ id: 397, name: 'The Avengers', price: 954 });
  expect(() => cart.deleteGood(111)).toThrow();
});
