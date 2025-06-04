import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getSubscriptionDetailsBySubIdAndPetId } from "@/services/api/subscriptionApis";

export const useGetSubscriptionDetailsBySubIdAndPetId = (subId: string, petId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SUBSCRIPTION_DETAILS_BY_SUB_ID_AND_PET_ID, subId, petId],
    queryFn: async () => getSubscriptionDetailsBySubIdAndPetId(subId, petId),
    enabled: !!subId && !!petId,
  });
};