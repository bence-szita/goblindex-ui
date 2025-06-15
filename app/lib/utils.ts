import { ItemDetails, ItemOption, QuantityAtPrice, TimeSeriesDataPoint } from "@/app/lib/models";
import { subHours } from "date-fns";
import { format } from "date-fns";
import { wowItems } from "./wowItems";

/**
 * Generates a time series array of price data points for a given item.
 *
 * Each data point contains the price and its corresponding timestamp,
 * calculated based on the current date and the position in the price array.
 *
 * @param itemDetails - The details of the item, including its price time data.
 * @returns An array of time series data points, each with price data and a timestamp.
 */
export function getPriceTimeSeries(itemDetails: ItemDetails): TimeSeriesDataPoint[] {
  const priceArr = itemDetails.priceTimeData || [];
  const now = new Date();
  return priceArr.map((price, i) => {
    return {
      data: price,
      time: getTimeStamp(now, itemDetails.priceTimeData.length - i - 1),
    };
  });
}
/**
 * Generates a time series array of quantity data points for a given item.
 *
 * Each data point contains the quantity and its corresponding timestamp,
 * calculated based on the current date and the position in the quantity array.
 *
 * @param itemDetails - The details of the item, including its quantity time data.
 * @returns An array of time series data points, each with quantity data and a timestamp.
 */
export function getQuantityTimeSeries(itemDetails: ItemDetails): TimeSeriesDataPoint[] {
  const quantityArr = itemDetails.quantityTimeData || [];
  const now = new Date();
  return quantityArr.map((quantity, i) => {
    return {
      data: quantity,
      time: getTimeStamp(now, itemDetails.quantityTimeData.length - i - 1),
    };
  });
}

function getTimeStamp(now: Date, hoursOffset: number): number {
  const newDate = subHours(now, hoursOffset);
  return newDate.getTime();
}

export function getItemOptions(): ItemOption[] {
  return Object.entries(wowItems)
    .map(([key, value]) => ({
      value: key,
      text: value,
    }))
    .sort((a, b) => a.text.localeCompare(b.text));
}

export function binPrices(data: QuantityAtPrice[], binSize: number) {
  // Flatten prices by quantity (optional, if you want quantity-weighted binning)
  const prices = data.map((dataPoint) => dataPoint.price);

  // Get min and max prices
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Calculate number of bins
  const numBins = Math.ceil((maxPrice - minPrice) / binSize) + 1;

  // Initialize bins
  const bins = Array.from({ length: numBins }, (_, i) => ({
    binStart: minPrice + i * binSize,
    binEnd: minPrice + (i + 1) * binSize,
    price: minPrice + (i + 0.5) * binSize,
    quantity: 0,
  }));

  // Fill bins
  data.forEach((pricePoint) => {
    const binIndex = Math.floor((pricePoint.price - minPrice) / binSize);
    bins[binIndex].quantity += pricePoint.quantity;
  });

  return bins;
}
