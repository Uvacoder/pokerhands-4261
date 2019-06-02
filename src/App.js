import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Game from './components/game/Game';
import Range from './components/range/Range';
import Table from './components/table/Table';

import './App.scss';

const App = props => {

  return (
    <div className="app">
      <Topbar />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Range} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/table' component={Table} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
