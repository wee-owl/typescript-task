import Buyable from './buyable';

export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author: string,
    readonly pages: number,
    readonly unit: boolean) {
  }
}
