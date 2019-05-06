import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Game from './components/game/Game';
import Range from './components/range/Range';

import './App.scss';

const App = props => {

  return (
    <div className="app">
      <Topbar />
      <div className="content">
        <Switch>
          <Route exact path='/' component={Range} />
          <Route exact path='/game' component={Game} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
