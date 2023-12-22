import React from 'react';
import PictureCard from './PictureCard'
const Header: React.FC = () => {
  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        <h1 style={nameStyles}>Quinten Bettin</h1>
        <p style={introStyles}>my portfolio site</p>
        <div style={cardContainerStyles}>
          <PictureCard
            imageSrc="/images/IMG_4430.JPG"
            aspectRatio='vertical'
          />
          <PictureCard
            imageSrc="/images/IMG_6421.JPG"
            aspectRatio='horizontal'
          />
          <PictureCard
            imageSrc="/images/IMG_6378.JPG"
            aspectRatio='vertical'
          />
        </div>
      </div>
    </header>
  );
};
const cardContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center', // Center the cards horizontally
  alignItems: 'center', // Center the cards vertically
};

const headerStyles: React.CSSProperties = {
  backgroundColor: '#222',
  color: '#fff',
  padding: '1rem',
};

const containerStyles: React.CSSProperties =  {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the content horizontally
  justifyContent: 'center', // Center the content vertically
};

const nameStyles: React.CSSProperties =  {
  fontSize: '3rem', // Larger font size
  margin: '0',
  textAlign: 'center',
  fontFamily: 'Georgia, serif', // A different font family
  color: '#FFD700', // Sunset color
};

const introStyles: React.CSSProperties = {
  fontSize: '1.5rem', // Slightly smaller font size
  margin: '0',
  textAlign: 'center',
  color: '#FFD700', // Sunset color
};

export default Header;