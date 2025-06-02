import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getPetDetailsByUserId } from "@/services/api/subscriptionApis";

export const useGetPetDetailsByUserId = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PET_DETAILS_BY_USER_ID],
    queryFn: async () => getPetDetailsByUserId(userId),
  });
};