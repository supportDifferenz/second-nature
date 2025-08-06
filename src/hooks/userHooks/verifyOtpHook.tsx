import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/services/api/userApis";

export const useVerifyOtp = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.VERIFY_OTP],
    mutationFn: async (
        {
            formData,
        } : {
            formData: {
                email: string;
                contactNo: string;
                otp: string;
                isWhatsapp: boolean;
                isSubscribe: boolean;
            }
        }
) => {
      return verifyOtp({ formData });
    },
  });
};