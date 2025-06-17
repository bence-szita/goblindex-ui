import TrendingItemsCard from "@/app/items/trending-item-card";
import { TrendingItemDetails } from "@/app/lib/models";
import { useRealmStore } from "@/app/store/realm";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function TrendingItems() {
  const [trendingItems, setItems] = useState<TrendingItemDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const regionValue = useRealmStore((state) => state.region);
  const realmValue = useRealmStore((state) => state.realm);

  useEffect(() => {
    const fetchTrendingItems = async () => {
      setLoading(true); // Set loading to true when starting the fetch
      setError(null); // Optionally reset error state
      try {
        const response = await fetch(`/api/trending-items?&region=${regionValue.value}&realmId=${realmValue.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch trending items");
        }
        const result = await response.json();
        setItems(result?.data || []);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingItems();
  }, [realmValue.id]);

  if (loading)
    return (
      <div className="flex flex-row justify-center mt-24">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col gap-2 border-1 rounded-lg border-zinc-700 p-3 pr-0">
      <h2>Trending Items</h2>
      <div className="flex flex-col gap-3 max-h-128 overflow-scroll pr-3">
        {trendingItems.map((item) => (
          <Link href={`/items/${item.itemID}`} key={item.itemID}>
            <TrendingItemsCard trendingItem={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingItems;
