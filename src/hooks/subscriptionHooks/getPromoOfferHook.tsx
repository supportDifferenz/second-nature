import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getPromoOffer } from "@/services/api/subscriptionApis";

export const useGetPromoOffer = (offerCode: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PROMO_OFFER],
    queryFn: async () => getPromoOffer(offerCode),
    enabled: !!offerCode,
  });
};