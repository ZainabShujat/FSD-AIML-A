import React from 'react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title || product.name} />
      <h3>{product.title || product.name}</h3>
      <p className="price">${(product.price || 0).toFixed(2)}</p>
      <button className="btn" onClick={onAdd}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;