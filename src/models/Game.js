import { Cards } from './Hand';

export default class Game {

  constructor (config) {
    Object.assign(this, config);
  }

  getEquity() {
    return Math.round(
      100 * (26
        - Cards.indexOf(this.hand.first.figure)
        - Cards.indexOf(this.hand.second.figure)
      ) / 26
    );
  }

}
