import React from 'react';
import { useState, useEffect } from 'react';

interface ErrorProps {
    server: string;
    client: string;
    loading: string;
}

export const Error: React.FC<ErrorProps> = ({}) => {
  const [ serverError, setServerError ] = useState<ErrorProps["server"]>("");
  const [ clientError, setClientError ] = useState<ErrorProps["client"]>("")
  const [ loading, setLoading ] = useState<ErrorProps["loading"]>("")


  return (
    <>
    { serverError && <h2>Server Error</h2> }
    { clientError && <h2>Sorry, page not found. please try again</h2> }
    { loading && <h2>Loading...</h2> }
    </>
  );
};
