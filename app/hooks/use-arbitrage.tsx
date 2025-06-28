import { useQuery } from "@tanstack/react-query";
import { useRealmStore } from "@/app/store/realm";
import { useParams } from "next/navigation";
import { ParamValue } from "next/dist/server/request/params";

const fetchArbitrage = async ({ itemId, regionValue }: { itemId: ParamValue; regionValue: string }) => {
  const response = (await fetch(`/api/arbitrage?itemId=${itemId}&region=${regionValue}`)).json();
  return response;
};

const useArbitrage = () => {
  const regionValue = useRealmStore((state) => state.region);

  const params = useParams();
  return useQuery({
    queryKey: ["arbitrage", regionValue.value, params.itemid],
    queryFn: () => fetchArbitrage({ regionValue: regionValue.value, itemId: params.itemid }),
  });
};

export { useArbitrage, fetchArbitrage };
