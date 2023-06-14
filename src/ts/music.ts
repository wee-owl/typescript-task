import Buyable from './buyable';

export default class Music implements Buyable {
  constructor(
    readonly id: number, 
    readonly name: string, 
    readonly author: string, 
    readonly price: number, 
    readonly pages: number) {
  }
}