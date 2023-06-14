import Cart from '../cart.ts';

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('checking the addition of good to the cart', () => {
  const cart = new Cart();
  const good = {
    id: 100,
    name: test,
    price: 1000,
  };
  cart.add(good);
  expect(cart.items).toEqual([good]);
});
