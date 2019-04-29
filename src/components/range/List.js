import React, { useState, useEffect } from 'react';

const List = props => {

  const [hands, setHands] = useState(props.hands);

  useEffect(() => {
    setHands(props.hands);
  }, [props.hands]);

  return (
    <div className="hands-list">
      {hands.map((hand, i) => <div key={i}>{hand.getName()}</div>)}
    </div>
  );
};

export default List;
