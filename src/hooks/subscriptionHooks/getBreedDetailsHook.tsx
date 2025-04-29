import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getBreedDetails } from "@/services/api/subscriptionApis";

export const useGetBreedDetails = (catOrDog: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_BREED_DETAILS],
    queryFn: async () => getBreedDetails(catOrDog),
  });
};