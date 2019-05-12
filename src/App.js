import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Game from './components/game/Game';
import Table from './components/game/Table';
// import Game from './components/game/Game';
// import Hand from './components/game/Hand';
// import Table from './components/table/Table';
// import Range from './components/range/Range';

import './App.scss';

const App = props => {

  return (
    <div className="app">
      <Topbar />
      <div className="content">
        <Switch>
          {/*<IndexRedirect to="/range" />
          <Route exact path='/range' component={Range} />
          <Route exact path='/hand' component={Hand} />
          <Route path='/table' component={Table} />*/}
          <Redirect from="/" exact to="/game" />
          <Route exact path='/game' component={Game} />
          <Route exact path='/game/table/:id' component={Table} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
