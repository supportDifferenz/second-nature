import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getAllEatingPreferences } from "@/services/api/subscriptionApis";

export const useGetAllEatingPreferences = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_EATING_PREFERENCES],
    queryFn: async () => getAllEatingPreferences(),
  });
};