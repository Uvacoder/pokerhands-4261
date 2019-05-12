import Peer from 'peerjs';
import React, { useState, useEffect } from 'react';

const Slave = props => {

  const [, setId ] = useState(null);
  const [ peer ] = useState(new Peer());
  const [ game, updateGame ] = useState({
    board: [],
    // lastUpdate: new Date(),
    players: new Array(6).fill({})
  });

  const open = () => {
    console.log('open slave connection');
    return new Promise(resolve => {
      peer.on('open', id => {
        console.log('open', id);
        resolve(id)
      });
    });
  };

  const connect = () => {
    return new Promise(resolve => {
      const conn = peer.connect(props.id);
      conn.on('open', () => resolve(conn));
    });
  }

  const onGameUpdate = game => {
    console.log('onGameUpdate', game);
    updateGame(game);
  };

  useEffect(() => {
    console.log('useEffect Slave');
    const init = async () => {
      setId(await open());
      await connect();
    };
    peer.on('connection', master => {
      master.on('data', data => onGameUpdate(data));
    });
    init();
  }, []);

  return (
    <div className="slave">
      SLAVE
      <div className="cards">
        {game.board.map((card, i) => (
          <div key={i} className="card">card: {card.code}</div>
        ))}
      </div>
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
  );
};

export default Slave;
