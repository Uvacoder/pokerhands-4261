import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Topbar.scss';

const Logo = () => {

  return (
    <div className="logo">
      <div className="spades">&spades;</div>
      <div className="hearts">&hearts;</div>
      <div className="diamonds">&diams;</div>
      <div className="clubs">&clubs;</div>
    </div>
  );
};

const Topbar = props => {

  const items = [{
    label: 'Range',
    route: '/'
  }, {
    label: 'Game',
    route: '/game'
  }];

  const getClass = item => {
    return item.route === props.location.pathname
      ? 'selected' : '';
  };

  return (
    <div className="topbar">
      <h1><Logo /> Poker Probabilities and Hand Ranges Manager</h1>
      <div className="links">
        {items.map((item, i) => (
          <Link key={i} to={item.route} className={getClass(item)}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Topbar);
