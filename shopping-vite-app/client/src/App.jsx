import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Cart from './component/Cart.jsx';

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, qty) => {
    setCartItems(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.max(0, qty) } : p).filter(p => p.quantity > 0));
  };

  const removeItem = (id) => setCartItems(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onAdd={addToCart} />} />
            <Route path="/cart" element={<Cart items={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} clearCart={clearCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}