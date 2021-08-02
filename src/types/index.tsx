export interface Market {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  schedule: {
    dayOfWeek: string;
    time: string;
    season: string;
  }[];
  products: string[];
  mapsLink: string;
  marketName: string;
}
export interface LessDetailedMarket {
  id: number;
  distanceFromZip: number;
  marketName: string;
  schedule: {
    dayOfWeek: string;
    season: string;
    time: string;
  }[];
}
export interface CardProps {
  id: number;
  distance: number;
  name: string;
  findSelectedMarket: (marketID: number) => void;
}
export interface FilterIProps {
  filterCards: (day: string) => void;
}

export interface ErrorProps {
  errorCode?: string;
}

export interface ResultsProps {
  allMarkets: LessDetailedMarket[];
  zip: string;
  findSelectedMarket: (marketID: number) => void;
  marketDetails: Market[];
}

export interface SelectedMarketProps {
  selectedMarket?: Market;
  id: string;
}

export interface getMarkets {
  getMarkets: (zip: string, distance: number) => Promise<void>;
}

export interface ApiMarkets {
  markets: LessDetailedMarket[];
  marketDetails: Market[];
  errorCode?: string;
}

export interface CleaningFunctions {
  response: { id: string; marketname: string }[];
  distance: number;
  detailsResponse: {
    GoogleLink: string;
    Address: string;
    Schedule: string;
    Products: string;
  };
  id: number;
  marketDetails: Market[];
  markets: LessDetailedMarket[];
}
