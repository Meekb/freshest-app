import React from 'react';
import './Card.css';
import { useHistory } from 'react-router-dom';
import veggies from '../../images/shelley-pauls.jpg';

interface CardProps {
  id: number;
  distance: number;
  name: string;
  findSelectedMarket: () => void;
}

export const Card: React.FC<CardProps> = ({ id, name, distance, findSelectedMarket }) => {
  const history = useHistory();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    findSelectedMarket()
    history.push(`/markets/${id}`);
  }

  return (
      <article className='market-card' id={`${id}`} onClick={e => handleClick(e)}>
        <div className='veggie-container'>
          <img src={veggies} alt='fresh produce' className='veggie-img' />
        </div>
        <div className='market-info'>
          <p>{name}</p>
          <p>{distance} miles away</p>
        </div>
      </article>
  );
};
