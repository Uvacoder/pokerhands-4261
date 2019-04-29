import React from 'react';

import Game from './components/game/Game';
import Range from './components/range/Range';

import './App.scss';

const App = () => {

  return (
    <div className="app">
      <div className="app-top">
        <Game />
      </div>
      <div className="app-bottom">
        <Range />
      </div>
    </div>
  );
};

export default App;
