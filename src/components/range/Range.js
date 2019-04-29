import React, { useState, useEffect } from 'react';

import HandsList from './List';
import { Cards } from '../../models/Hand';
import HandsTable from '../hands-table/Table';

import './Range.scss';

const Range = () => {

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
    <div className="range">
      <HandsTable onChange={onHandChange} />
      <HandsList hands={list} />
    </div>
  );
};

export default Range;
