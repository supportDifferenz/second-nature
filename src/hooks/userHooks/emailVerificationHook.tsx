import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { emailVerification } from "@/services/api/userApis";

export const useEmailVerification = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.EMAIL_VERIFICATION],
    mutationFn: async (
        {
            formData,
        } : {
            formData: {
                name: string;
                email: string;
            }
        }
) => {
      return emailVerification({ formData });
    },
  });
};