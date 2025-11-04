import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ isLoggedIn, onLogout }) => {
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
            <li><Link to="/cart">Cart</Link></li>
            {isLoggedIn && (
              <li>
                <button className="logout-btn" onClick={onLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;