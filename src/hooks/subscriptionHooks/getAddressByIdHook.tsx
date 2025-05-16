import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getAddressById } from "@/services/api/subscriptionApis";

export const useGetAddressById = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ADDRESS_BY_ID],
    queryFn: async () => getAddressById(userId),
  });
};