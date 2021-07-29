import React from "react";
import "../Details/Details.css"

interface MarketProps {
  markets: {
    id: number;
    distanceFromZip: number;
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
  id: string;
}

const Details: React.FC<MarketProps> = ({ id, markets, marketDetails }) => {

  const marketMatch = markets.filter(market => market.id === Number(id));
  const detailsMatch = marketDetails.filter(market => { 
    let match = market.mapsLink.split('%22')[1].includes(marketMatch[0].marketName.split(' ')[0]);
    console.log(marketMatch[0].marketName)
    return match
  });
  const nameMatch = marketMatch[0].marketName;
  const detail = detailsMatch[0];
  const openSeason = `Season: ${detail.schedule[0].season}`;
  const daysAndTimes = `Open: ${detail.schedule[0].dayOfWeek} ${detail.schedule[0].time}`;
  const productList = detail.products.map(prod => {
    return (
    <div className='list'>
      <ul>
        <li> {prod}, </li>
      </ul>
    </div>
    );
  });

  return (
    <section className='market-details'>
      <h1> {nameMatch} </h1>
        <p> Located at: {detail.street}, {detail.city} {detail.state}, {detail.zip} </p>
      <div className='schedule'>
        <h4> Season and Schedule: </h4>
        <p> {openSeason} </p>
        <p> {daysAndTimes} </p>
      </div>
      <div className='prod-list'>
        <h4> Products available at this market: </h4>
        <p> {productList} </p>
      </div>
      <a href={detail.mapsLink} target='_blank' className='link' > Open this location in Google Maps </a>
    </section>
  );
}

export default Details;

