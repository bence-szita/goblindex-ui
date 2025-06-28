"use client";

import React, { useEffect, useState } from "react";
import Chart from "@/app/ui/chart";
import type { ItemDetails } from "@/app/lib/models";
import { useParams } from "next/navigation";
import { getPriceTimeSeries, getQuantityTimeSeries } from "@/app/lib/utils";
import { useRealmStore } from "@/app/store/realm";
import numberToGold from "@/app/lib/parsers";
import { CircularProgress } from "@mui/material";
import PriceDistributionChart from "@/app/ui/price-distribution";
import PriceDistributionHistogramChart from "@/app/ui/price-distribution-histogram";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import Link from "next/link";
import Disclaimer from "@/app/ui/disclaimer";
import PriceChangeWidget from "@/app/ui/price-change-widget";
import ItemDetailsCard from "@/app/ui/item-details-card";
import { useItemDetails } from "@/app/hooks/use-item-details";

export default function ItemDetails() {
  const { data, isLoading, isLoadingError, error } = useItemDetails();

  return (
    <>
      <div className="grow my-5 px-5 border-l-1 border-zinc-800">
        {isLoading && (
          <div className="flex flex-row justify-center mt-24">
            <CircularProgress />
          </div>
        )}
        {isLoadingError && <div className="text-red-500">Error: {error.message} </div>}
        {!isLoading && !error && data && (
          <>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-1 items-center">
                <div className="mr-4 text-neutral-500">{data.itemID}</div>
                <div className="text-2xl font-bold text-neutral-200">{data.itemName}</div>
                <PriceChangeWidget value={data.percentChange} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <ItemDetailsCard>
                  <h2 className="text-xs text-zinc-400">Minimum Price</h2>
                  <p className=" font-normal">{numberToGold(data.minPrice)}</p>
                </ItemDetailsCard>

                <ItemDetailsCard>
                  <h2 className="text-xs text-zinc-400">Historic Price</h2>
                  <p className=" font-normal">{numberToGold(data.historicPrice)}</p>
                </ItemDetailsCard>
                <ItemDetailsCard>
                  <h2 className="text-xs text-zinc-400">Daily Sales</h2>
                  <p className=" font-normal">{data.salesPerDay}</p>
                </ItemDetailsCard>

                <ItemDetailsCard>
                  <h2 className="text-xs text-zinc-400">Current Quantity</h2>
                  <p className=" font-normal">{data.minPrice}</p>
                </ItemDetailsCard>

                <ItemDetailsCard>
                  <h2 className="text-xs text-zinc-400">Average Quantity</h2>
                  <p className=" font-normal">{data.historicPrice}</p>
                </ItemDetailsCard>
              </div>

              <Link
                className="bg-zinc-700 border-1 border-zinc-700 rounded-lg p-2 flex flex-row justify-center gap-2 grow hover:bg-zinc-600 hover:text-cyan-200 cursor:pointer"
                href={`/arbitrage/${data.itemID}`}
              >
                <QueryStatsOutlinedIcon />
                <span>Find arbitrage opportunities</span>
              </Link>

              <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 p-4">
                <div className="text-xl font-medium text-neutral-200">Price</div>
                <Chart plotData={getPriceTimeSeries(data)} yLabel="Price" chartType="price" />
              </div>

              <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 p-4">
                <div className="text-xl font-medium text-neutral-200">Quantity</div>
                <Chart plotData={getQuantityTimeSeries(data)} yLabel="Quantity" chartType="quantity" />
              </div>
              <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 p-4">
                <div className="text-xl font-medium text-neutral-200">Current Listings</div>
                <PriceDistributionChart plotData={data.listingData} />
              </div>
              <div className="bg-zinc-800/50 rounded-lg border-1 border-zinc-700 p-4">
                <div className="text-xl font-medium text-neutral-200">Histogram of Current Listings</div>
                <PriceDistributionHistogramChart plotData={data.listingData} />
              </div>

              <Disclaimer />
            </div>
          </>
        )}
      </div>
    </>
  );
}
