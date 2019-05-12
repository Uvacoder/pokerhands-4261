import Peer from 'peerjs';
import React, { useState, useEffect } from 'react';

import Deck from '../../services/Deck';

const Master = props => {

  const [ deck, setDeck ] = useState({});
  const [ peer ] = useState(new Peer(props.id));
  const [ connections, updateConnections ] = useState(
    new Array(6).fill({})
  );
  const [ game, updateGame ] = useState({
    board: [],
    // lastUpdate: new Date(),
    players: [{id: props.id}, ...new Array(6).fill({})]
  });

  const connect = (slave) => {
    const {
      peer: id,
      provider: peer
    } = slave;

    return new Promise(resolve => {
      const conn = peer.connect(id);
      conn.on('open', () => resolve(conn));
    });
  };

  const addPlayer = player => {
    let index = findPlayerIndex(player);

    if (index === -1) index = findEmptySlot();
    if (index !== -1) {
      connections[index] = player;
      game.players[index] = { id: player.peer };
    }

    return index !== -1;
  };

  const onPlayerConnect = async (player) => {
    player.conn = await connect(player);

    if (addPlayer(player)) {
      updateConnections(connections);
      updateGame({ ...game });
      // updateGame({
      //   players: game.players,
      //   lastUpdate: new Date()
      // });
    } else {
      player.conn.send(`Sorry, table is full.`);
    }
  };

  const findPlayerIndex = player => {
    return game.players.findIndex(
      p => p.id === player.peer
    );
  };

  const findEmptySlot = () => {
    return game.players.findIndex(p => !p.id);
  };

  const getActivePlayersCount = () => {
    return (game.players.filter(p => !!p.id)).length;
  };

  const sync = () => {
    connections.forEach(
      player => player.conn && player.conn.send(game)
    );
  };

  const start = async () => {
    const count = getActivePlayersCount();
    const d = await new Deck(count)
    setDeck(d);
  };

  const draw = async () => {
    const players = game.players.filter(p => !!p.id);

    for (let player of players) {
      player.cards = await deck.draw(2);
      console.log('get cards');
    }
    console.log('Cards:', game.players[0].cards);
    game.board = await deck.draw(3);
    updateGame({ ...game });
  };

  useEffect(() => {
    peer.on('connection', onPlayerConnect);
  }, []);

  useEffect(() => {
    console.log('ON DECK UPDATE:', deck);
    if (deck.deck_id) draw();
  }, [deck]);

  useEffect(() => {
    console.log('SYNC');
    sync();
  }, [game]);

  return (
    <div className="master">
      MASTER
      <div className="cards">
        {game.board.map((card, i) => (
          <div key={i} className="card">card: {card.code}</div>
        ))}
      </div>
      <div className="cards">
        {game.players.map((player, i) => (
          <div key={i} className="player">
            <div>Player Id: {player.id}</div>
            <div className="cards">
              {player.cards && player.cards.map((card, i) => (
                <div key={i} className="card">card: {card.code}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="deck">
        <button onClick={start}>START</button>
        <div>Deck Id: {deck.deck_id}</div>
        <div>Remaining cards: {deck.remaining}</div>
      </div>
    </div>
  );
};

export default Master;
