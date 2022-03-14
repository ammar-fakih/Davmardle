import React from 'react';

const Footer = () => {
  return (
    <div
      className="footer-copyright text-center py-3 footer navbar-fixed-bottom"
      style={{ float: 'bottom middle' }}>
      &copy; {new Date().getFullYear()} Copyright: Ammar Fakih and David Garcia
    </div>
  );
};

export default Footer;
