"use client";

import React, { useEffect, useState } from "react";
import Chart from "@/app/ui/chart";
import type { ItemDetails } from "@/app/lib/models";
import { useParams } from "next/navigation";
import ItemDetailsCard from "@/app/ui/item-details-card";

export default function ItemDetails() {
  const [itemData, setItemData] = useState<ItemDetails>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        // Replace with your actual API endpoint

        const response = await fetch(`/api/item-details?itemId=${params.itemid}`);
        console.log("apiresponse", response);
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
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto w-full p-4">
        {loading && <div className="text-blue-500">Loading...</div>}
        {error && <div className="text-red-500">Error: {error}</div>}
        {!loading && !error && itemData && (
          <>
            {/* Display noData when volume is negative */}
            <div>
              <p className="text-2xl font-bold mb-4">
                {itemData.itemID} - {itemData.itemName}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <ItemDetailsCard header="Minimum Price" text={itemData.minPrice} />
                <ItemDetailsCard header="Historic Price" text={itemData.historicPrice} />
                <ItemDetailsCard header="Daily Sale" text={itemData.salesPerDay} />

                <ItemDetailsCard header="Current Quantity" text={itemData.minPrice} />
                <ItemDetailsCard header="Average Quantity" text={itemData.historicPrice} />
              </div>

              <Chart itemDetails={itemData} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
