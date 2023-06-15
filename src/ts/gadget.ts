import Buyable from './buyable';

export default class Gadget implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly model: string,
    readonly os: string,
    readonly cpu: string,
    readonly ram: number,
    readonly rom: number,
    readonly capacity: number,
    readonly country: string,
    readonly unit: boolean) {
  }
}
module.exports = Gadget;
