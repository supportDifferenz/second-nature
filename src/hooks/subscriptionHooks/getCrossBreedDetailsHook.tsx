import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getCrossBreedDetails } from "@/services/api/subscriptionApis";

export const useGetCrossBreedDetails = (catOrDog: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CROSS_BREED_DETAILS],
    queryFn: async () => getCrossBreedDetails(catOrDog),
  });
};