import React from 'react';
import './Error.css';

interface ErrorProps {
  errorCode?: string;
}

export const Error: React.FC<ErrorProps> = ({ errorCode }) => {
  return (
    <div>
      {errorCode === 'fake404' && (
        <h2 className='error-msg'>
          Sorry, no markets found for that zip code. Please try again!
        </h2>
      )}
      {errorCode === '500' && (
        <h2 className='error-msg'>"Our Servers are down, please try again."</h2>
      )}
      {errorCode !== 'fake404' && errorCode !== '500' && (
        <h2 className='error-msg'>Something went wrong, please try again!</h2>
      )}
    </div>
  );
};
