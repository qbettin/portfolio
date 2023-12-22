import React from 'react';
import Card from 'react-bootstrap/Card';

interface PictureCardProps {
  imageSrc: string;
  aspectRatio: 'horizontal' | 'vertical';
}

const PictureCard: React.FC<PictureCardProps> = ({ imageSrc, aspectRatio = 'vertical' }) => {
  const cardStyles: React.CSSProperties = {
    margin: '1rem',
    width: aspectRatio === 'horizontal' ? '215%' : '100%',
    background: '#222', // Dark background color
    borderRadius: '10px', // Rounded edges
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
    overflow: 'hidden', // Ensure the image doesn't overflow the card

  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderTopLeftRadius: '10px', // Match the top-left border radius of the card
    borderTopRightRadius: '10px', // Match the top-right border radius of the card
  };

  return (
    <Card style={cardStyles}>
      <Card.Img src={imageSrc} style={imageStyles} />
    </Card>
  );
};

export default PictureCard;