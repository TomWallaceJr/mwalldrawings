import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <h1 className="header-title pt-3">MWall Drawings</h1>
      </Link>
    </header>
  );
}
