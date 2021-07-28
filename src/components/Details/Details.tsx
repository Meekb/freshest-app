import React from "react";
import "../Details/Details.css"

interface MarketProps {
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
  }[],
}

const Details: React.FC<MarketProps> = ({ markets, marketDetails }) => {

  return (
    <section className='market-details'>
      <h1>{markets.marketName}</h1>
      <p>Address</p>
      <p>Schedule</p>
      <div className='products'>
        <p>Products....Unordered List?</p>
      </div>
      <p>GoogleLink</p>
    </section>
  );

}

export default Details;

