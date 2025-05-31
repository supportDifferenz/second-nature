import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { updatePetByPetId } from "@/services/api/subscriptionApis";

interface PetData {
  user_id: string;
  name: string;
  type: string;
  gender: string;
  location: string;
  dateOfBirth: string;
  ageMonth: number;
  ageYear: number;
  breed: string;
  crossBreeds: string[];
  activityLevel: string;
  currentWeight: number;
  targetWeight: number;
  plan: {
    type: string;
    duration: string;
    price: number;
    protein: string;
    bowlSize: string;
  };
}

export const useUpdatePetByPetIdHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_PET_BY_PET_ID],
    mutationFn: async (
        {
            petId,
            formData,
        } : {
            petId: string;
            formData: PetData
        }
) => {
      return updatePetByPetId({ petId, formData });
    },
  });
};