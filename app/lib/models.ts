export interface ItemDetailsResponse {
  data: ItemDetails;
}

export interface ItemDetails {
  itemID: number;
  itemName: string;
  blog: string;
  item_type: string;
  minPrice: number;
  historicPrice: number;
  salesPerDay: number;
  listingData: Array<{ price: number; quantity: number }>;
  quantity: number;
  quantityTimeData: number[];
  priceTimeData: number[];
  currentQuantity: number;
  avgQuantity: number;
  currentVsAvgQuantityPercent: number;
  quantityState: string;
  currentMarketValue: number;
  historicMarketValue: number;
  percentChange: number;
  state: string;
  link: string;
}

export interface ArbitrageDetails {
  connectedRealmID: number;
  connectedRealmNames: string[];
  itemQuantity: number;
  minPrice: number;
  realmPopulationType: string;
  realmPopulationInt: number;
  realmPopulationReal: number;
  realmRanking: number;
  link: string;
  undermineLink: string;
}

export interface TimeSeriesDataPoint {
  data: number;
  time: number;
}

export interface ItemOption {
  value: string;
  text: string;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface RealmData {
  name: string;
  id: number;
}

export interface QuantityAtPrice {
  price: number;
  quantity: number;
}

export type ChartTypes = "price" | "quantity";
