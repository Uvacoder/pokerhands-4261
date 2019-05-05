import React from 'react';

import Tile from './Tile';
import Header from './Header';
import CardModel from '../../models/Card';
import HandModel, { Cards } from '../../models/Hand';

import './Table.scss';

const HandsTable = props => {

  const getHand = (first, second) => {
    const suite = Cards.indexOf(first) < Cards.indexOf(second);

    return props.hands.filter(hand => (
      hand.getName() === (suite
        ? (first + second + 's')
        : (second + first + (first === second ? '' : 'o')))
    ))[0] || new HandModel([
      new CardModel({ figure: first, color: 'spades' }),
      new CardModel({ figure: second, color: (suite ? 'spades' : 'hearts') })
    ]);
  };

  const getRow = first => {
    return (
      <div key={first} className="hands-table-row">
        <Header card={first} />
        {Cards.map((second, i) => {
          const hand = getHand(first, second);

          return <Tile key={i} hand={hand}
            onChange={props.onChange.bind(this, hand)} />;
        })}
      </div>
    );
  };

  return (
    <div className="hands-table">
      <div className="hands-table-row">
        <div className="hands-table-header"></div>
        {Cards.map((card, i) => <Header key={i} card={card} />)}
      </div>
      {Cards.map(card => getRow(card))}
    </div>
  );

};

export default HandsTable;
