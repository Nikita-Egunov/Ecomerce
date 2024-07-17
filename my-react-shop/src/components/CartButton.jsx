import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartButton = ({ cart }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <button onClick={handleCartClick}>Cart ({cart.length})</button>
  );
};

export default CartButton;