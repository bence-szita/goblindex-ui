import { ItemDetails, PriceTimeSeries } from "@/app/lib/models";
import { subHours } from "date-fns";
import { format } from "date-fns";
import { wowItems } from "./wowItems";

// Combine priceTimeData and quantityTimeData by index into one array using map through priceArr
export function getPriceTimeSeries(itemDetails: ItemDetails): PriceTimeSeries[] {
  // TODO create new chart of quantity, x axis should be the time
  const priceArr = itemDetails.priceTimeData || [];
  const quantityArr = itemDetails.quantityTimeData || [];
  const now = new Date();
  return priceArr.map((price, i) => {
    return {
      price,
      time: getTimeStamp(now, itemDetails.priceTimeData.length - i - 1),
    };
  });
}

function getTimeStamp(now: Date, hoursOffset: number): number {
  const newDate = subHours(now, hoursOffset);
  return newDate.getTime();
}


export function getItemOptions(): ItemOption[] {
  console.log("getting item options");
  return Object.entries(wowItems).map(([key, value]) => ({
    value: key,
    text: value,
  }));
}
