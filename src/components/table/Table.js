import React from 'react';
import Player from './Player';
import Pot from './Pot';
import './Table.scss';

const Table = props => {
  const potValue = Math.floor(Math.random() * Math.floor(5000));
  const dealer = { nickname: 'Dealer', bank: 'N/A', avatar: 'http://lorempixel.com/100/100/sports/10/' };
  const players = [
    { nickname: 'Player1', bank: 100, avatar: 'http://lorempixel.com/100/100/sports/1/' },
    { nickname: 'Player2', bank: 200, avatar: 'http://lorempixel.com/100/100/sports/2/' },
    { nickname: 'Player3', bank: 300, avatar: 'http://lorempixel.com/100/100/sports/3/' },
    { nickname: 'Player4', bank: 400, avatar: 'http://lorempixel.com/100/100/sports/4/' },
    { nickname: 'Player5', bank: 500, avatar: 'http://lorempixel.com/100/100/sports/5/' },
    { nickname: 'Player6', bank: 600, avatar: 'http://lorempixel.com/100/100/sports/6/' },
    { nickname: 'Player7', bank: 700, avatar: 'http://lorempixel.com/100/100/sports/7/' },
    { nickname: 'Player8', bank: 800, avatar: 'http://lorempixel.com/100/100/sports/8/' },
    { nickname: 'Player9', bank: 900, avatar: 'http://lorempixel.com/100/100/sports/9/' },
  ];

  return (
    <div className="container">
      <div className="game-table">
        
        <div className="players">
          <Player player={dealer} classProp={'dealer'} />
          {players.map((player, index) => {
            return <Player key={`${player + index}`} player={player} classProp={`player-${index + 1}`} />
          })}
        </div>

        <Pot value={potValue}></Pot>

        <div className="card-place"></div>
      </div>
    </div>
  );
};

export default Table;
