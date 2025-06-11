import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/services/api/userApis";

export const useForgotPassword = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.FORGOT_PASSWORD],
    mutationFn: async (
        {
            formData,
        } : {
            formData: {
                emailId: string;
                newPassword: string;
                confirmNewPassword: string;
            }
        }
) => {
      return forgotPassword({ formData });
    },
  });
};