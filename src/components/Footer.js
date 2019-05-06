import React from 'react';

import './Footer.scss';

console.log('PROCESS', process.env);

const Footer = () => (
  <div className="footer">
    <div>Chewam © 2019</div>
    <div>
      {process.env.REACT_APP_VERSION}
    </div>
  </div>
);

export default Footer;
