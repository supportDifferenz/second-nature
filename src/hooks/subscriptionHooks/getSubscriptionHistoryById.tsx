import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getSubscriptionHistoryById } from "@/services/api/subscriptionApis";

export const useGetSubscriptionHistoryById = ({ userId, petId }: { userId: string; petId: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SUBSCRIPTION_HISTORY_BY_ID],
    queryFn: async () => getSubscriptionHistoryById({ userId, petId }),
  });
};