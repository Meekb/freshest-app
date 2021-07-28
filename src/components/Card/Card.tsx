import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import veggies from '../../images/shelley-pauls.jpg';

interface CardProps {
  id: number;
  distance: number;
  name: string;
}

export const Card: React.FC<CardProps> = ({ id, name, distance }) => {
  return (
    <Link to={`/markets/${id}`} className='link'>
      <article className='market-card' id={id.toString()}>
        <div className='veggie-container'>
          <img src={veggies} alt='fresh produce' className='veggie-img' />
        </div>
        <div className='market-info'>
          <p>{name}</p>
          <p>{distance} miles away</p>
        </div>
      </article>
    </Link>
  );
};
