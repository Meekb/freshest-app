export interface CardProps {
  id: number;
  distance: number;
  name: string;
  findSelectedMarket: (marketID: number) => void;
}

export interface SelectedMarketProps {
  selectedMarket?: {
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
  };
  id: string;
}

export interface ErrorProps {
  errorCode?: string;
}

export interface FilterIProps {
  filterCards: (day: string) => void;
}

export interface ResultsProps {
  allMarkets: LessDetailedMarket[];
  zip: string;
  findSelectedMarket: (marketID: number) => void;
  marketDetails: Market[];
  loading: boolean;
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

export interface getMarkets {
  getMarkets: (zip: string, distance: number) => Promise<void>;
}

export interface ApiMarkets {
  markets: {
    id: number;
    distanceFromZip: number;
    marketName: string;
    schedule: {
      dayOfWeek: string;
      time: string;
      season: string;
    }[];
  }[];
  marketDetails: {
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
  }[];
  errorCode?: string;
}

export interface OneDetail {
  oneDetail: {
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
  };
  zip: string;
  errorCode?: string;
}
