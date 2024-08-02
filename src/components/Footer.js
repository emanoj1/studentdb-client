import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
        <div className="footer">
        <p>&copy; {new Date().getFullYear()} StudentDB. All rights reserved | NOTE: This is a test website designed as a part of a coding project. Do not signup for professional services.</p>
        </div>
    </footer>
  );
}

export default Footer;
