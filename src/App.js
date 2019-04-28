import React, { useState, useEffect } from 'react';

import { Cards } from './models/Hand';
import Game from './components/game/Game';
import HandsList from './components/hands-list/List';
import HandsTable from './components/hands-table/Table';

import './App.css';

const App = () => {

  const [list] = useState([]);
  const [count, updateCount] = useState(0);

  useEffect(() => {
    console.log('App useEffect', count);
  }, [count]);

  const updateList = hand => {
    hand.selected
      ? list.push(hand)
      : list.splice(list.indexOf(hand), 1);
  };

  const sortList = () => {
    list.sort((a, b) => {
      return Cards.indexOf(a.first.figure)
        - Cards.indexOf(b.first.figure)
        + Cards.indexOf(a.second.figure)
        - Cards.indexOf(b.second.figure)
    });
  };

  const onHandChange = hand => {
    updateList(hand);
    sortList();
    updateCount(list.length);
  };

  return (
    <div className="app">
      <div className="app-top">
        <Game />
      </div>
      <div className="app-bottom">
        <HandsTable onChange={onHandChange} />
        <HandsList hands={list} />
      </div>
    </div>
  );
};

export default App;
