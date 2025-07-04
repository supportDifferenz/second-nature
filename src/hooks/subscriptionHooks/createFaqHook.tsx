import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { createFaq } from "@/services/api/subscriptionApis";

export const useCreateFaq = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.CREATE_FAQ],
    mutationFn: async (
        {
            formData
        } : {
            formData: {
                firstName: string;
                lastName: string;
                emailId: string;
                contactNo: string;
                message: string;
                isActive: boolean;
                isDeleted: boolean;
                createdOn: string;
                modifiedOn: string;
            }
        }
) => {
      return createFaq({ formData });
    },
  });
};