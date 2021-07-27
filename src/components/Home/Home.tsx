import React, { useState, useEffect } from 'react'
import { fetchGetResponse } from '../../utils/apiCalls'
import { cleanMarketsData, cleanDetailsData, checkForError } from '../../utils/utils'

interface ApiMarkets {
  markets: {
    id: number,
    distanceFromZip: number,
    marketName: string
  }[],
  marketDetails: {
    street: string,
    city: string,
    state: string,
    zip: string,
    schedule: {
      dayOfWeek: string,
      time: string,
      season: string
    }[],
    products: string[],
    mapsLink: string
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
      setError(error)
    }
  }

  const getDetails = (filteredMarkets: ApiMarkets["markets"]) => {
    Promise.all(filteredMarkets.map(currentMarket => {
      return fetchGetResponse(`mktDetail?id=${currentMarket.id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response
        }
      })
      .then(response => response.json())
    }))
    .then(arrayOfPromises => cleanDetailsData(arrayOfPromises))
    .then(cleanData => setDetails(cleanData))
    .catch(error => setError(error))
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