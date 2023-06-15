import Cart from '../cart';
import Book from '../book';
import Music from '../music';
import Movie from '../movie';
import Gadget from '../gadget';

test('new cart should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('checking the addition of good to the cart', () => {
  const cart = new Cart();
  const book = new Book(99, 'War and Peace', 1870, 'Leo Tolstoy', 921, true);
  const music = new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true);
  const movie = new Movie(358, 'The Avengers', 1200, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min / 02:17', true);
  const gadget = new Gadget(487, 'Samsung Galaxy', 37999, 'A54', 'Android 13', 'Samsung Exynos 1380 2.4 GHz', 8, 256, 5000, 'Vietnam', false);
  cart.add(book);
  cart.add(music);
  cart.add(movie);
  cart.add(gadget);
  expect(cart.items).toEqual([book, music, movie, gadget]);
});

test('check adding the same unit product to cart', () => {
  const cart = new Cart();
  const music = new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true);
  const lynn = new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true);
  cart.add(music);
  expect(() => cart.add(lynn)).toThrow();
});

test('check adding the same no-unit product to cart', () => {
  const cart = new Cart();
  const music = new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true);
  const gadget = new Gadget(487, 'Samsung Galaxy', 37999, 'A54', 'Android 13', 'Samsung Exynos 1380 2.4 GHz', 8, 256, 5000, 'Vietnam', false);
  cart.add(music);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  expect(cart.items).toEqual([music, gadget, gadget, gadget, gadget]);
});

test('checking the total value of the item in the cart', () => {
  const cart = new Cart();
  cart.add(new Book(99, 'War and Peace', 1870, 'Leo Tolstoy', 921, true));
  cart.add(new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true));
  cart.add(new Music(203, "Don't Let Me Be Misunderstood", 3120, 'Nina Simone', '166 sec / 02:46', true));
  cart.add(new Movie(358, 'The Avengers', 1200, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min / 02:17', true));
  cart.add(new Gadget(487, 'Samsung Galaxy', 37999, 'A54', 'Android 13', 'Samsung Exynos 1380 2.4 GHz', 8, 256, 5000, 'Vietnam', false));
  expect(cart.sum()).toBe(46549);
});

test('checking the apply discount to the total cost of the item in the cart', () => {
  const cart = new Cart();
  cart.add(new Book(99, 'War and Peace', 1870, 'Leo Tolstoy', 921, true));
  cart.add(new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true));
  cart.add(new Music(203, "Don't Let Me Be Misunderstood", 3120, 'Nina Simone', '166 sec / 02:46', true));
  cart.add(new Movie(358, 'The Avengers', 1200, 2012, 'USA', 'Avengers Assemble!', 'fantasy', '137 min / 02:17', true));
  cart.add(new Gadget(487, 'Samsung Galaxy', 37999, 'A54', 'Android 13', 'Samsung Exynos 1380 2.4 GHz', 8, 256, 5000, 'Vietnam', false));
  expect(cart.sumDiscount(15)).toBe(39566.65);
});

test('checking the removal of an item from the cart', () => {
  const cart = new Cart();
  cart.add(new Book(99, 'War and Peace', 1870, 'Leo Tolstoy', 921, true));
  cart.add(new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true));
  cart.add(new Music(203, "Don't Let Me Be Misunderstood", 3120, 'Nina Simone', '166 sec / 02:46', true));
  cart.deleteGood(201);
  expect(cart.items).toEqual([
    {
      id: 99, name: 'War and Peace', price: 1870, author: 'Leo Tolstoy', pages: 921, unit: true,
    },
    {
      id: 203, name: "Don't Let Me Be Misunderstood", price: 3120, author: 'Nina Simone', duration: '166 sec / 02:46', unit: true,
    },
  ]);
});

test('checking for removal of identical products from the cart', () => {
  const cart = new Cart();
  const music = new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true);
  const gadget = new Gadget(487, 'Samsung Galaxy', 37999, 'A54', 'Android 13', 'Samsung Exynos 1380 2.4 GHz', 8, 256, 5000, 'Vietnam', false);
  cart.add(music);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  cart.add(gadget);
  cart.deleteGood(487);
  cart.deleteGood(487);
  expect(cart.items).toEqual([music, gadget, gadget]);
});

test('checking for removal of invalid product id from cart', () => {
  const cart = new Cart();
  cart.add(new Book(99, 'War and Peace', 1870, 'Leo Tolstoy', 921, true));
  cart.add(new Music(201, "We'll Meet Again", 2360, 'Vera Lynn', '182 sec / 03:02', true));
  cart.add(new Music(203, "Don't Let Me Be Misunderstood", 3120, 'Nina Simone', '166 sec / 02:46', true));
  expect(() => cart.deleteGood(111)).toThrow();
});
