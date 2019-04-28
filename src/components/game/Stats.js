import React, { useState, useEffect } from 'react';

const PreFlop = () => (
  <div>pre-flop</div>
);

const Flop = () => (
  <div>flop</div>
);

const River = () => (
  <div>river</div>
);

const Turn = () => (
  <div>turn</div>
);

const Stats = props => {

  const [hand, setHand] = useState(props.hand);
  const [board, setBoard] = useState(props.board);

  useEffect(() => {
    setHand(props.hand);
  }, [props.hand]);

  useEffect(() => {
    setBoard(props.board);
  }, [props.board]);

  return (
    <div className="game-stats">
      <div>Hand: {hand && hand.getName()}</div>
      <PreFlop hand={hand} />
      <Flop hand={hand} board={board} />
      <River hand={hand} board={board} />
      <Turn hand={hand} board={board} />
    </div>
  );
};

export default Stats;
