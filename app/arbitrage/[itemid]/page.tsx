"use client";

import React, { useEffect, useState } from "react";
import type { ArbitrageDetails } from "@/app/lib/models";
import { useParams } from "next/navigation";

import { useRealmStore } from "@/app/store/realm";
import { CircularProgress } from "@mui/material";

import ArbitrageTable from "@/app/ui/arbitrage-table";

export default function ArbitrageDetails() {
  const [arbitrageData, setItemData] = useState<ArbitrageDetails[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const regionValue = useRealmStore((state) => state.region);
  const realmValue = useRealmStore((state) => state.realm);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!params.itemid) {
        setLoading(true);
        setError(null);
        setItemData(undefined);
      }
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/arbitrage?itemId=${params.itemid}&region=${regionValue.value}`);
        console.info("apiresponse", response);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setItemData(result?.data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [regionValue, realmValue]);

  return (
    <>
      <div className="grow p-5">
        {loading && (
          <div className="flex flex-row justify-center mt-24">
            <CircularProgress />
          </div>
        )}
        {error && <div className="text-red-500">Error: {error}</div>}
        {!loading && !error && arbitrageData && (
          <>
            {/* Display noData when volume is negative */}
            <ArbitrageTable tableData={arbitrageData} />
          </>
        )}
      </div>
    </>
  );
}
