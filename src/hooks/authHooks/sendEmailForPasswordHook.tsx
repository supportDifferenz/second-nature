import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { sendEmailForPassword } from "@/services/api/userApis";

export const useSendEmailForPassword = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.SEND_EMAIL_FOR_PASSWORD],
    mutationFn: async (
        {
            emailId,
        } : {
            emailId: string;
        }
) => {
      return sendEmailForPassword({ emailId });
    },
  });
};