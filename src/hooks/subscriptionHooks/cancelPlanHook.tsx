import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { cancelPlanBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const useCancelPlan = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.CANCEL_PLAN],
    mutationFn: async (
        {
            subId,
            petId,
            userId,
            formData,
        } : {
            subId: string;
            petId: string;
            userId: string;
            formData: {
                cancelReason: string;
            }
        }
) => {
      return cancelPlanBySubIdPetIdUserId({ subId, petId, userId, formData });
    },
  });
};