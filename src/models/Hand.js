export const Cards = [
  'A', 'K', 'Q', 'J', 'T',
  '9', '8', '7', '6', '5', '4', '3', '2'
];

export default class Hand {

  constructor(cards) {
    cards.sort((a, b) => (
      Cards.indexOf(a.figure) - Cards.indexOf(b.figure)
    ));
    const [first, second] = cards;
    Object.assign(this, {first, second});
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
