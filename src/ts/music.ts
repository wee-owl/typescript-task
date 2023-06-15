import Buyable from './buyable';

export default class Music implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly author: string,
    readonly duration: number | string,
    readonly unit: boolean) {
  }
}
module.exports = Music;
