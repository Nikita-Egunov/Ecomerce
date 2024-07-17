import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileButton = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/login');
  };

  return (
    <button onClick={handleProfileClick}>Profile</button>
  );
};

export default ProfileButton;