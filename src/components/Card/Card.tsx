import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

interface CardProps {
  id: number;
  distance: number;
  name: string;
}

export const Card: React.FC<CardProps> = ({ id, name, distance }) => {
  return (
    <Link to={`/markets/${id}`}>
      <article className='market-card' id={id.toString()}>
        <p>{name}</p>
        <p>{distance}</p>
      </article>
    </Link>
  );
};
