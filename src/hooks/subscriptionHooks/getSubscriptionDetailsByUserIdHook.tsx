import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getSubscriptionDetailsByUserId } from "@/services/api/subscriptionApis";

export const useGetSubscriptionDetailsByUserId = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SUBSCRIPTION_DETAILS_BY_USER_ID],
    queryFn: async () => getSubscriptionDetailsByUserId(userId),
  });
};