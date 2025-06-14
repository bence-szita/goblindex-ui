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

export interface PriceTimeSeries {
  price: number;
  time: number;
}

export interface SalesTimeSeries {
  quantity: number;
  time: string;
}

export interface ItemOption {
  value: string;
  text: string;
}
