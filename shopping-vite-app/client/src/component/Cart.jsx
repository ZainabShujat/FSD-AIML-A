import React, { useState, useEffect } from "react";
import "./index.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [checkoutForm, setCheckoutForm] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const transformedData = data.slice(0, 5).map(item => ({
          id: item.id,
          name: item.title,
          price: item.price,
          quantity: 1,
          image: item.image
        }));
        
        setCartItems(transformedData);
        setLoading(false);
      } catch (error) {
        console.error("Fetching products failed:", error);
        setError("Unable to load products. Please try again later.");
        setLoading(false);
        
        // Fallback data in case API fails
        setCartItems([
          { id: 1, name: "Fallback Product 1", price: 99.99, quantity: 1 },
          { id: 2, name: "Fallback Product 2", price: 149.99, quantity: 1 }
        ]);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: Math.max(0, newQuantity)} : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredItems = cartItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
//sorted items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const handleCheckout = () => {
    return (
      <div className="checkout-form">
        <h3>Shipping Information</h3>
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Postal Code" />
        <select>
          <option>Standard Shipping</option>
          <option>Express Shipping</option>
        </select>
        <button onClick={processPayment}>Proceed to Payment</button>
      </div>
    );
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading your cart...</p>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                {item.image && <img src={item.image} alt={item.name} style={{width: '100px'}} />}
              </div>
              <div className="item-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
};

export default Cart;