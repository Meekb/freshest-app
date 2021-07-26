import React, { useState, useEffect } from 'react'

interface ApiMarkets {
  markets: {
    id: number,
    marketName: string
    //need logic to split the distance from the name to display the name
  }[],
  marketDetails: {
    googlink: string,
    address: string,
    schedule: string,
    products: string
    // need logic for splitting products string into an array
  }[]
}

const Home = ():JSX.Element => {
  const [ allMarkets, setMarkets ] = useState<ApiMarkets["markets"]>([])
  const [ marketDetails, setDetails ] = useState<ApiMarkets["marketDetails"]>([])
  const [ error, setError ] = useState('')
  
  const getMarkets = async () => {
    const url = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=01070'
    setError('')

    try {
      const response = await fetch(url)
      const markets = await response.json()
      setMarkets(markets)
    } catch(error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getMarkets()
  }, [])
  
  return (
    <div className="home">
      <h2>yellow</h2>
      
      {/* <Search allMarkets={allMarkets} marketDetails={marketDetails}/> */}
      {/* <Results allMarkets={allMarkets} marketDetails={marketDetails}/> */}
    </div>
  )
}

export default Home;