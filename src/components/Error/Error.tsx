import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';
import { ErrorProps } from '../../types';

export const Error: React.FC<ErrorProps> = ({ errorCode }) => {
  return (
    <div>
      {errorCode === '500' && (
        <h2 className='error-msg'>"Our Servers are down, please try again."</h2>
      )}
      {(errorCode === 'fake404' || errorCode === 'fakeDetails404') && (
        <p className='fake-404-message'>
          Sorry, no markets found. Please try a different zip or distance!
        </p>
      )}
      {errorCode === 'page not found' && (
        <div className='page-not-found'>
          <h2 className='error-msg'>Page not found, do you want to go home?</h2>
          <NavLink to='/'>
            <button className='.home-btn'>Home</button>
          </NavLink>
        </div>
      )}
      {errorCode !== 'fake404' &&
        errorCode !== 'fakeDetails404' &&
        errorCode !== '500' &&
        errorCode !== 'page not found' && (
          <h2 className='error-msg'>Something went wrong, please try again!</h2>
        )}
    </div>
  );
};
