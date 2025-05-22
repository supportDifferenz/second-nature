import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { updateAddressById } from "@/services/api/subscriptionApis"

export const useUpdateAddressByIdHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_ADDRESS_BY_ID],
    mutationFn: async ({
        addressId,
        subId,
        type,
        formData
    }: {
        addressId: string;
        subId: string;
        type: string;
        formData: {
            shippingAddress: {
                firstName: string;
                lastName: string;
                contactNo: string;
                address: string;
                aptSuite: string;
                municipality: string;
            };
            billingAddress: {
                firstName: string;
                lastName: string;
                contactNo: string;
                address: string;
                aptSuite: string;
                municipality: string;
                useDifferentBilling: boolean;
            };
        }
    }) => {
      return updateAddressById(addressId,subId,type,formData); 
    },
  });
};