import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getSubscriptionDetailsByUserIdAndPetId } from "@/services/api/subscriptionApis";

export const useGetSubscriptionDetailsByUserIdAndPetId = (userId: string, petId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SUBSCRIPTION_DETAILS_BY_USER_ID_AND_PET_ID, userId, petId],
    queryFn: async () => getSubscriptionDetailsByUserIdAndPetId(userId, petId),
    enabled: !!userId && !!petId,
  });
};