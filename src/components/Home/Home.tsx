import React, { useState, useEffect } from 'react'
import { fetchGetResponse } from '../../utils/apiCalls'
import { cleanMarketsData } from '../../utils/utils'


interface ApiMarkets {
  markets: {
    id: number,
    distanceFromZip: number,
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
  const [ error, setError ] = useState(0)

  const getMarkets = async () => {
    try {
      let response = await fetchGetResponse('zipSearch?zip=01701');
      checkForError(response)
      let data = await response.json();
      let cleanedData = cleanMarketsData(data.results)
      setMarkets(cleanedData)
      getDetails(cleanedData)
    } catch (error) {
      setError(error.message)
    }
  }

  const getDetails = (filteredMarkets: ApiMarkets["markets"]) => {
    let promises = Promise.all(filteredMarkets.map(currentMarket => {
      return fetchGetResponse(`mktDetail?id=${currentMarket.id}`)
    }))
    
  }

  const checkForError = (response: Response) => {
    if (!response.ok) {
      // throw new Error(response);
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