import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { downgradePlanBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const useDowngradePlan = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.DOWNGRADE_PLAN],
    mutationFn: async (
        {
            subId,
            petId,
            userId,
            downgradeReason,
        } : {
            subId: string;
            petId: string;
            userId: string;
            downgradeReason: string;}
) => {
      return downgradePlanBySubIdPetIdUserId({ subId, petId, userId, downgradeReason });
    },
  });
};