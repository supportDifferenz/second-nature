"use client";

import { createAddress } from "../../services/api/subscriptionApis"
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useCreateAddressHook = () => {
    return useMutation({
      mutationKey: [QUERY_KEYS.CREATE_ADDRESS],
      mutationFn: async ({
        user_id,
        shippingAddress,
        billingAddress,
      }: {
        user_id: string;
        shippingAddress: [
            {
                firstName: string;
                lastName: string;
                contactNo: string;
                address: string;
                aptSuite: string;
                municipality: string;
            }
        ];
        billingAddress: [
            {
                firstName: string;
                lastName: string;
                contactNo: string;
                address: string;
                aptSuite: string;
                municipality: string;
                useDifferentBilling?: boolean;
            }
        ];
      }) => createAddress({ 
        user_id, 
        shippingAddress,
        billingAddress
      }),
    });
  };