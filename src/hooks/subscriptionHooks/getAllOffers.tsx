import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getAllOffers } from "@/services/api/subscriptionApis";

export const useGetAllOffers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_OFFERS],
    queryFn: async () => getAllOffers(),
  });
};