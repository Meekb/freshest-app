import React from 'react';
import { useState } from 'react';

interface ErrorProps {
  errorCode?: string;
}

export const Error: React.FC<ErrorProps> = ({
  errorCode
}) => {
  const [ serverError ] = useState<ErrorProps["errorCode"]>(errorCode);

  return (
    <div>
    {errorCode === 'Sorry, no markets found for that zip code. Please try again!' && <h2>Sorry, no markets found for that zip code. Please try again!</h2>}
    { errorCode !== 'Sorry, no markets found for that zip code. Please try again!' && serverError === "500" && <h2>"Our Servers are down, please try again."</h2>}
    { errorCode !== 'Sorry, no markets found for that zip code. Please try again!' && <h2>Something went wrong, please try again!</h2>}
    </div>
  );
};
