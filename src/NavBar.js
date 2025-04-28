import { Link } from 'react-router-dom';
import './NavBar.css';
import React from 'react';

export default function NavBar() {
  return (
    <div id="navigation-bar" sticky="top">
      <Link to="/about" id="works-link" className='link navigation-link'>about</Link>
      <Link to="/works" id="info-link" className='link navigation-link'>works</Link>
    </div>
  );
}