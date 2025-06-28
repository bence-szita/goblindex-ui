import { useQuery } from "@tanstack/react-query";
import { useRealmStore } from "@/app/store/realm";
import { useParams } from "next/navigation";
import { ParamValue } from "next/dist/server/request/params";

const fetchItemDetails = async ({
  itemId,
  regionValue,
  realmId,
}: {
  itemId: ParamValue;
  regionValue: string;
  realmId: number;
}) => {
  const response = await fetch(`/api/item-details?itemId=${itemId}&region=${regionValue}&realmId=${realmId}`);
  const responseJson = await response.json();
  return responseJson.data;
};

const useItemDetails = () => {
  const regionValue = useRealmStore((state) => state.region);
  const realmValue = useRealmStore((state) => state.realm);

  const params = useParams();
  return useQuery({
    queryKey: ["item-details", regionValue.value, realmValue.id, params.itemid],
    queryFn: () => fetchItemDetails({ regionValue: regionValue.value, itemId: params.itemid, realmId: realmValue.id }),
    enabled: !!regionValue.value && !!params.itemid && !!realmValue.id,
  });
};

export { fetchItemDetails, useItemDetails };
