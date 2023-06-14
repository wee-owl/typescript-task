import Buyable from './buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
    return this._items.reduce((acc: number, cur: Buyable) => acc + cur.price, 0);
  }

  sumDiscount(discount: number): number {
    return +(this.sum() * (1 - 0.01 * discount)).toFixed(2);
  }

  deleteGood(id: number): void {
    const index = this._items.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Invalid product id');
    this._items.splice(index, 1);
  }
}
