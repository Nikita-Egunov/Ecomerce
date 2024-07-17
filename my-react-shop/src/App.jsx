import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import CartPage from './components/CartPage';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateCart = (newCart) => {
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList searchTerm={searchTerm} addToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;