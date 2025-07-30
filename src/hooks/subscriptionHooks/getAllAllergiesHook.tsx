import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getAllAllergies } from "@/services/api/subscriptionApis";

export const useGetAllAllergies = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_ALLERGIES],
    queryFn: async () => getAllAllergies(),
  });
};