import React, { useState, useEffect } from 'react'
import { fetchGetResponse } from '../../utils/apiCalls'
import { cleanMarketsData, cleanDetailsData, checkForError } from '../../utils/utils'
import Search from '../Search/Search'

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

   const getMarkets = async (zip: string) => {
     console.log(zip)
    try {
      let response = await fetchGetResponse(`zipSearch?zip=${zip}`);
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
      .then(response => checkForError(response))
      .then(response => response.json())
    }))
    .then(arrayOfPromises => cleanDetailsData(arrayOfPromises))
    .then(cleanData => setDetails(cleanData))
    .catch(error => setError(error))
  }
  
  return (
    <div className="home">
      <h2>yellow</h2>
      <Search getMarkets={getMarkets} />
      {/* <Search allMarkets={allMarkets} marketDetails={marketDetails}/> */}
      {/* <Results allMarkets={allMarkets} marketDetails={marketDetails}/> */}
    </div>
  )
}

export default Home;