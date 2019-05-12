import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import PeerService from '../../services/peer.js'

import './Player.scss';

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

const Slot = props => {

  const { player } = props.data;

  return (
    <div className="slot">
      Id: {player && player.id}
    </div>
  );

};

const Play = props => {
  const { match: { params } } = props;
  // const [, setCount] = useState(0);
  // const [players, setPlayers] = useState([ ...new Array(6) ])
  const [slots, setSlots] = useState(new Array(6).fill({}))

  const assignPlayer = player => {
    const index = slots.findIndex(slot => !slot.player);

    console.log('assignPlayer', player, index);
    return index !== -1
      ? slots[index] = { player }
      : false;
  };

  const updatePlayers = players => {
    console.log('updatePlayers', players);
    players.forEach(player => {
      let index = slots.findIndex(
        slot => slot.player && slot.player.id === player.id
      );

      console.log('update player', player, index);
      index !== -1
        ? slots[index] = { player }
        : assignPlayer(player);
    });
  };

  const onUpdate = data => {
    console.log('onUpdate', data, slots);
    updatePlayers(data.players);
    console.log('slots', slots);
    setSlots([...slots]);
  };

  const getData = async () => {
    const peer = new PeerService();
    peer.connect(params.id, onUpdate);
    // console.log('set handler');
    // room.on('update', data => onUpdate);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {slots.map((slot, i) => <Slot key={i} data={slot} />)}
    </div>
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
