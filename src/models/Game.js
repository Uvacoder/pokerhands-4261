import { Cards } from './Hand';

export default class Game {

  constructor (config) {
    Object.assign(this, config);
  }

  getEquity() {
    const index1 = 13 - Cards.indexOf(this.hand.first.figure);
    console.log('index1', index1);
    const index2 = 13 - Cards.indexOf(this.hand.second.figure);
    console.log('index1', index2);
    return 100 * (26
      - Cards.indexOf(this.hand.first.figure)
      - Cards.indexOf(this.hand.second.figure)) / 26;
  }

}
