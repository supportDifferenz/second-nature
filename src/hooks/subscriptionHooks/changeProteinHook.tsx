import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { changeProteinBySubIdPetIdUserId } from "@/services/api/subscriptionApis";

export const useChangeProtein = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.CHANGE_PROTEIN],
    mutationFn: async (
        {
            subId,
            petId,
            userId,
            proteinType,
        } : {
            subId: string;
            petId: string;
            userId: string;
            proteinType: string;}
) => {
      return changeProteinBySubIdPetIdUserId({ subId, petId, userId, proteinType });
    },
  });
};