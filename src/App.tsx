import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={appStyles}>
      <Navbar />
      <Header />
      <div style={contentStyles}>
        {/* Your page content goes here */}
      </div>
    </div>
  );
};

const appStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#222', // Dark background color
  color: '#fff',          // White text color
  margin: 0,
  padding: 0
};

const contentStyles = {
  padding: '2rem',
};

export default App;