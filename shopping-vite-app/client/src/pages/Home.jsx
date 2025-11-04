import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to ShopCart</h1>
    <p>Classic shopping cart demo — browse products and add them to your cart.</p>
    <div style={{marginTop:16}}>
      <Link to="/products" className="btn">View Products</Link>
    </div>
  </div>
);

export default Home;