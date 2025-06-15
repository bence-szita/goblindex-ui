import { ItemDetails, ItemOption, TimeSeriesDataPoint } from "@/app/lib/models";
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
  return Object.entries(wowItems).map(([key, value]) => ({
    value: key,
    text: value,
  }));
}
