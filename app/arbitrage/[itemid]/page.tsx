"use client";

import React, { useEffect, useState } from "react";
import type { ArbitrageDetails } from "@/app/lib/models";
import { useParams } from "next/navigation";

import { useRealmStore } from "@/app/store/realm";
import { CircularProgress } from "@mui/material";

import ArbitrageTable from "@/app/ui/arbitrage-table";
import Disclaimer from "@/app/ui/disclaimer";
import { useArbitrage } from "@/app/hooks/use-arbitrage";

export default function ArbitrageDetails() {
  const { data, isLoading, isLoadingError, error } = useArbitrage();

  return (
    <>
      <div className="grow my-5 px-5 border-l-1 border-zinc-800 min-w-0">
        {isLoading && (
          <div className="flex flex-row justify-center mt-24">
            <CircularProgress />
          </div>
        )}
        {isLoadingError && <div className="text-red-500">Error: {error.message}</div>}
        {!isLoading && !error && data && (
          <>
            {data?.length ? (
              <div className="flex flex-col gap-5">
                <ArbitrageTable tableData={data} />
                <Disclaimer />
              </div>
            ) : (
              <div className="flex flex-row justify-center mt-24">
                Arbitrage data in this region is not available for the selected item.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
