import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div>uvacoder © 2021</div>
    <div>v{process.env.REACT_APP_VERSION}</div>
  </div>
);

export default Footer;
