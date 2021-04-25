import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img src={banner} alt="banner" className="banner" />
      </Link>
    </header>
  );
}
