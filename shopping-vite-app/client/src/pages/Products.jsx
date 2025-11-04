import React, { useState, useEffect } from 'react';
import ProductCard from '../component/ProductCard.jsx';

const Products = ({ onAdd }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetch('https://fakestoreapi.com/products')
      .then(r => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then(data => { if (mounted) { setProducts(data); setLoading(false); } })
      .catch(err => { if (mounted) { setError(err.message); setLoading(false); } });
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(p => (
          <ProductCard key={p.id} product={{ id: p.id, title: p.title, price: p.price, image: p.image }} onAdd={() => onAdd({ id: p.id, name: p.title, price: p.price, image: p.image })} />
        ))}
      </div>
    </div>
  );
};

export default Products;