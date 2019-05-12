import React, { useState } from 'react';

// import { Master, Slave } from './Peer.js';
import Slave from './Slave.js';
import Master from './Master.js';

import './Table.scss';

const Table = props => {

  // const [, setPeer] = useState();
  const store = window.localStorage;
  const table = store.getItem('table');
  const { params: { id } } = props.match;

  const [role] = useState(
    table === id ? 'master' : 'slave'
  );

  // useEffect(() => {
    // console.log('useEffect, set peer');
    // setPeer(role === 'master'
    //   ? new Master(id)
    //   : new Slave(id)
    // );
  // }, [role, id]);

  return (
    <div className="table">
      <div>TABLE: {id}</div>
      <div>ROLE: {role}</div>
      {role === 'master'
        ? <Master id={id} />
        : <Slave id={id} />}
    </div>
  );
};

export default Table;
