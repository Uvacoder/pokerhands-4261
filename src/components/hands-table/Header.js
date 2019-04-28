import React from 'react';

const Header = props => (
  <div className="hands-table-header">
    <span className="hands-table-text">
      {props.card}
    </span>
  </div>
);

export default Header;
