import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, updateCart, clearCart }) => {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [selectedItems, setSelectedItems] = useState(cart.map(() => false));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  const handleSelectChange = (index, value) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems[index] = value;
    setSelectedItems(newSelectedItems);
  };

  const handleOrder = () => {
    const selectedItemsToOrder = cart.filter((_, index) => selectedItems[index]);
    if (selectedItemsToOrder.length > 0) {
      alert('Order placed!');
      updateCart(cart.filter((_, index) => !selectedItems[index]));
      setSelectedItems(cart.map(() => false));
    } else {
      alert('No items selected for order.');
    }
  };

  const handleRemove = () => {
    const selectedItemsToRemove = cart.filter((_, index) => selectedItems[index]);
    if (selectedItemsToRemove.length > 0) {
      updateCart(cart.filter((_, index) => !selectedItems[index]));
      setSelectedItems(cart.map(() => false));
    } else {
      alert('No items selected for removal.');
    }
  };

  const goToCatalog = () => {
    navigate('/');
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={selectedItems[index]}
                onChange={(e) => handleSelectChange(index, e.target.checked)}
              />
              <input
                type="number"
                value={quantities[index]}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                min="0"
              />
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <>
          <button onClick={handleOrder}>Order Selected</button>
          <button onClick={handleRemove}>Remove Selected</button>
        </>
      )}
      <button onClick={goToCatalog}>Go to Catalog</button>
    </div>
  );
};

export default CartPage;