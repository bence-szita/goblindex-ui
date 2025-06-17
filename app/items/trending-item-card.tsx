import { TrendingItemDetails } from "@/app/lib/models";
import PriceChangeWidget from "@/app/ui/price-change-widget";
import React from "react";

type TrendingItemsProps = {
  trendingItem: TrendingItemDetails;
};

function TrendingItemsCard({ trendingItem }: TrendingItemsProps) {
  return (
    <div
      key={trendingItem.itemID}
      className="bg-zinc-800 rounded-xl p-2 border-1 border-zinc-800 hover:border-zinc-500 hover:bg-zinc-700 cursor-pointer"
    >
      <div className="text-normal  text-neutral-200 mb-2">{trendingItem.itemName}</div>

      <div className="text-sm text-neutral-400">
        <span>Daily sales:</span>
        <span className="text-neutral-300"> {trendingItem.salesPerDay}</span>
      </div>

      <div className="text-sm text-neutral-400 flex flex-row items-center">
        <div>Price change:</div> <PriceChangeWidget value={trendingItem.percentChange} />
      </div>
    </div>
  );
}

export default TrendingItemsCard;
