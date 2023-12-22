import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyles}>
      <ul style={navListStyles}>
        <li style={navItemStyles}>Home</li>
        <li style={navItemStyles}>Projects</li>
        <li style={navItemStyles}>About</li>
        <li style={navItemStyles}>Contact</li>
      </ul>
    </nav>
  );
};

const navbarStyles = {
  backgroundColor: '#333', // Dark background color
  color: '#fff',          // White text color
  padding: '1rem',
};

const navListStyles = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
};

const navItemStyles = {
  cursor: 'pointer',
};
export {};

export default Navbar;