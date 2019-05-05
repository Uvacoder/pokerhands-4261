import Card from './Card';

export const Cards = [
  'A', 'K', 'Q', 'J', 'T',
  '9', '8', '7', '6', '5', '4', '3', '2'
];

export default class Hand {

  constructor(config) {
    if (Array.isArray(config)) {
      config.sort((a, b) => (
        Cards.indexOf(a.figure) - Cards.indexOf(b.figure)
      ));
      config = { first: config[0], second: config[1] };
    }

    if (!(config.first instanceof Card)) {
      config.first = new Card(config.first);
    }

    if (!(config.second instanceof Card)) {
      config.second = new Card(config.second);
    }

    Object.assign(this, config);
  }

  getName() {
    return this.first.figure
      + this.second.figure
      + (!this.isPair() ? this.isSuite() ? 's' : 'o' : '');
  }

  isSuite() {
    return this.first.color === this.second.color;
  }

  isPair() {
    return this.first.figure === this.second.figure;
  }

}
