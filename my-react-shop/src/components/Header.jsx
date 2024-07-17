import React from 'react';
import SearchBar from './SearchBar';
import CartButton from './CartButton';
import ProfileButton from './ProfileButton';

const Header = ({ onSearch, cart }) => {
  return (
    <header>
      <SearchBar onSearch={onSearch} />
      <CartButton cart={cart} />
      <ProfileButton />
    </header>
  );
};

export default Header;