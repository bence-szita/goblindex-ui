"use client";

import React, { useEffect, useMemo, useState } from "react";
import { VirtualizedAutocomplete } from "@/app/ui/virtualized-autocomplete";
import { ItemOption } from "@/app/lib/models";
import { useParams, useRouter } from "next/navigation";
import { getItemOptions } from "@/app/lib/utils";

function ItemsSidebar() {
  const [selectedItem, setSelectedItem] = useState<ItemOption | null>(null);

  const router = useRouter();
  const params = useParams();
  const itemOptions = useMemo(() => getItemOptions(), []);

  useEffect(() => {
    if (selectedItem) {
      router.push(`/items/${selectedItem.value}`);
    }
  }, [selectedItem]);

  useEffect(() => {
    if (params.itemid !== selectedItem?.value) {
      const itemFromParams = itemOptions.find((item) => item.value === params.itemid);
      setSelectedItem(itemFromParams);
    }
  }, [params]);

  return (
    <aside className="flex flex-col h-full w-72 gap-3 p-4">
      <VirtualizedAutocomplete
        value={selectedItem}
        options={itemOptions}
        onChange={(_, value: ItemOption | null) => setSelectedItem(value)}
        label="Item Id"
      />
    </aside>
  );
}

export default ItemsSidebar;
