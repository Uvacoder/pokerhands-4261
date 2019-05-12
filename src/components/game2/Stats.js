import React, { useState, useEffect } from 'react';

const PreFlop = props => (
  <div className="game-stats-box">
    <h4>Pre-Flop</h4>
    <div>{
      props.game.hand
      ? `${props.game.getEquity('preflop')}%`
      : 'N/A'
    }</div>
  </div>
);

const Flop = props => (
  <div className="game-stats-box">
    <h4>Flop</h4>
      <div>N/A</div>
  </div>
);

const River = props => (
  <div className="game-stats-box">
    <h4>River</h4>
      <div>N/A</div>
  </div>
);

const Turn = props => (
  <div className="game-stats-box">
    <h4>Turn</h4>
      <div>N/A</div>
  </div>
);

const Stats = props => {

  const [, setHand] = useState(props.game.hand);
  const [, setBoard] = useState(props.game.board);

  useEffect(() => {
    setHand(props.game.hand);
  }, [props.game.hand]);

  useEffect(() => {
    setBoard(props.game.board);
  }, [props.game.board]);

  return (
    <div className="game-stats">
      <h3>Equity:</h3>
      <PreFlop game={props.game} />
      <Flop game={props.game} />
      <Turn game={props.game} />
      <River game={props.game} />
    </div>
  );
};

export default Stats;
