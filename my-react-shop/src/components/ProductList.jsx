import React, { useState } from 'react';

const ProductList = ({ searchTerm, addToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const [inCart, setInCart] = useState(products.map(() => false));

  const handleAddToCart = (product, index) => {
    addToCart(product);
    const newInCart = [...inCart];
    newInCart[index] = true;
    setInCart(newInCart);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product, index) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          {inCart[index] ? (
            <span>Товар уже в корзине</span>
          ) : (
            <button onClick={() => handleAddToCart(product, index)}>Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;