import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
        <div className="footer-copy">© {new Date().getFullYear()} PetMall — All rights reserved</div>
      </div>
    </footer>
  );
}
