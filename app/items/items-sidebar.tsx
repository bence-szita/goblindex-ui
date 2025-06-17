"use client";

import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { VirtualizedAutocomplete } from "@/app/ui/virtualized-autocomplete";
import { ItemOption, LabelValue, RealmData } from "@/app/lib/models";
import { useParams, useRouter } from "next/navigation";
import { getItemOptions } from "@/app/lib/utils";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useRealmStore } from "@/app/store/realm";
import { Realms, ServerRegions } from "@/app/lib/realms";
import TrendingItems from "@/app/items/trending-items";

function ItemsSidebar() {
  const [selectedItem, setSelectedItem] = useState<ItemOption | null>(null);
  const regionValue = useRealmStore((state) => state.region);
  const setRegionValue = useRealmStore((state) => state.setRegion);

  const realmList = useMemo(() => {
    return Realms[regionValue.value] || [];
  }, [regionValue]);

  const realmValue = useRealmStore((state) => state.realm);
  const setRealmValue = useRealmStore((state) => state.setRealm);

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
      const itemFromParams = itemOptions.find((item) => item.value === params.itemid) || null;
      setSelectedItem(itemFromParams);
    }
  }, [params]);

  useEffect(() => {
    // Set default region and realm when region changes
    setRealmValue(realmList[0]);
  }, [realmList]);

  const handleRegionChange = (event: SelectChangeEvent<string>) => {
    const selectedRegion = ServerRegions.find((region) => region.value === event.target.value) ?? null;
    if (selectedRegion) {
      setRegionValue(selectedRegion);
    }
  };

  const handleRealmChange = (event: SelectChangeEvent<string>) => {
    const selectedRealm = realmList.find((realm) => realm.name === event.target.value) ?? null;
    if (selectedRealm) {
      setRealmValue(selectedRealm);
    }
  };

  return (
    <aside className="flex flex-col h-full w-72 min-w-72 gap-5 py-5 pr-5">
      <FormControl>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
          value={regionValue?.value ?? ""}
          onChange={handleRegionChange}
          fullWidth
          label="Region"
          labelId="region-select-label"
        >
          {ServerRegions.map((region: LabelValue) => (
            <MenuItem key={region.value} value={region.value}>
              {region.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="realm-select-label">Realm</InputLabel>
        <Select
          value={realmValue?.name ?? ""}
          onChange={handleRealmChange}
          fullWidth
          label="Realm"
          labelId="realm-select-label"
        >
          {realmList.map((region: RealmData) => (
            <MenuItem key={region.name} value={region.name}>
              {region.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <VirtualizedAutocomplete
        value={selectedItem}
        options={itemOptions}
        onChange={(_, value: ItemOption | null) => setSelectedItem(value)}
        label="Item"
      />
      <TrendingItems />
    </aside>
  );
}

export default ItemsSidebar;
