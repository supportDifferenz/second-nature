import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { pausePlanBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const usePausePlan = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.PAUSE_PLAN],
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
                pauseReason: string;
                weeks: number;
                startDate: string;
                endDate: string;
            }
        }
) => {
      return pausePlanBySubIdPetIdUserId({ subId, petId, userId, formData });
    },
  });
};