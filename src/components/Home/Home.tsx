import React, { useState } from 'react'

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

// interface ApiDetails {
//   marketDetails: {
//     googlink: string,
//     address: string,
//     schedule: string,
//     products: string
//     // need logic for splitting products string into an array
//   }
// }

// const Home = ():JSX.Element => {
//   const [ allMarkets, marketDetails ] = useState<ApiMarkets>()

//   return (
//     <div className="home">

//     </div>
//   )
// }

class Home extends React.Component<ApiMarkets> {
  state: ApiMarkets = {
    markets: [],
    marketDetails: []
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}


export default Home;