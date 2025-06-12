import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { upgradePlanBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const useUpgradePlan = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.UPGRADE_PLAN],
    mutationFn: async (
        {
            subId,
            petId,
            userId,
            upgradeReason,
        } : {
            subId: string;
            petId: string;
            userId: string;
            upgradeReason: string;}
) => {
      return upgradePlanBySubIdPetIdUserId({ subId, petId, userId, upgradeReason });
    },
  });
};