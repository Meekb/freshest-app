import React from 'react';
import './Card.css';

interface CardProps {
  id: number;
  distance: number;
  name: string;
}

export const Card: React.FC<CardProps> = ({ id, name, distance }) => {
  return (
    <button className='market-card'>
      <p>{name}</p>
      <p>{distance}</p>
    </button>
  );
};
