import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import PeerService from '../../services/peer.js'

const Init = props => {
  const [id, setId] = useState();
  const { match: { path } } = props;

  const peer = new PeerService();

  const getId = async () => {
    const id =  await peer.create();

    window.localStorage.setItem('table', id);
    setId(id);
  }

  useEffect(() =>  {!id && getId()});

  return (
    <div>Init
      {/*{!id
        ? <div>Init</div>
        : <Redirect to={`${path}/${id}`} />}*/}
    </div>
  );
};

const Play = props => {
  const peer = new PeerService();
  const { match: { params } } = props;

  peer.connect(params.id);

  return (
    <div>Play: {params.id}</div>
  );
};

const Table = props => {
  const { match: { path } } = props;

  return (
    <div className="table">
      <Switch>
        <Route exact path={`${path}`} component={Init} />
        <Route path={`${path}/:id`} component={Play} />
      </Switch>
    </div>
  );
};

export default Table;
