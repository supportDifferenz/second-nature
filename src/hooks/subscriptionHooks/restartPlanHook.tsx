import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { restartPlanBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const useRestartPlan = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.RESTART_PLAN],
    mutationFn: async (
        {
            subId,
            petId,
            userId,
        } : {
            subId: string;
            petId: string;
            userId: string;
        }
) => {
      return restartPlanBySubIdPetIdUserId({ subId, petId, userId });
    },
  });
};