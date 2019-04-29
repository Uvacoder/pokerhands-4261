import React from 'react';

import Tile from './Tile';
import Header from './Header';
import CardModel from '../../models/Card';
import HandModel, { Cards } from '../../models/Hand';

import './Table.scss';

const HandsTable = props => {

  const getTile = (first, second) => {
    const suite = Cards.indexOf(first) < Cards.indexOf(second);

    const hand = new HandModel([
      new CardModel({ figure: first, color: 'spades' }),
      new CardModel({ figure: second, color: (suite ? 'spades' : 'hearts') })
    ]);

    return <Tile
      hand={hand}
      key={hand.getName()}
      onChange={props.onChange}
    />;
  };

  const getRow = first => {
    return (
      <div key={first} className="hands-table-row">
        <Header card={first} />
        {Cards.map(second => getTile(first, second))}
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
