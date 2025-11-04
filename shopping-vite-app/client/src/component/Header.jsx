import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h1>ShopCart</h1>
          </Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart {cartCount > 0 && <span className="badge">{cartCount}</span>}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;