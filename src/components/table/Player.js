import React from 'react';
import './Player.scss';

const Player = ({ player, classProp }) => {
  const bet = Math.floor(Math.random() * Math.floor(100));

  return (
    <div className={`player ${classProp}`}>
      <div className="avatar" style={{ backgroundImage: `url(${player.avatar})` }}/>

      <div className="info">
        <div className="nickname">{player.nickname}</div>
        <div className="separator" />
        <div className="bank">{player.bank}</div>
      </div>

      {classProp !== 'dealer' && (
        <div className="bet">{bet}</div>
      )}
    </div>
  )
}

export default Player;