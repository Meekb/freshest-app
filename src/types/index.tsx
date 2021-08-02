export interface CardProps {
  id: number;
  distance: number;
  name: string;
  findSelectedMarket: (marketID: number) => void;
}
