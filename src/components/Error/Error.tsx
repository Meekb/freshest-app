import React from 'react';
import { useState, useEffect } from 'react';

interface ErrorProps {
  errorCode?: string;
  // loading?: string;
}

export const Error: React.FC<ErrorProps> = ({
  errorCode
}) => {
  const [ serverError ] = useState<ErrorProps["errorCode"]>(errorCode);


  return (
    <div>
    { serverError === "500" ? <h2>"Our Servers are down, please try again."</h2> 
      : <h2>Something went wrong, please try again!</h2>}
    </div>
  );
};
