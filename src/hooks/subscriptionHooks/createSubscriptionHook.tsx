"use client";

import { createSubscription } from "../../services/api/subscriptionApis";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

interface SubscriptionData {
  user_id: string;
  account: {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
  };
  shippingDetails: {
    firstName: string;
    lastName: string;
    contactNo: string;
    address: string;
    aptSuite: string;
    municipality: string;
  };
  billingDetails: {
    firstName: string;
    lastName: string;
    contactNo: string;
    address: string;
    aptSuite: string;
    municipality: string;
    useDifferentBilling: boolean;
  };
  subscriptiondate: string;
  promoCode: string;
  subscribeToOffers: boolean;
  pets: Array<{
    petId: string;
    name: string;
    type: string;
    gender: string;
    location: string;
    dateOfBirth?: string;
    ageMonth?: number;
    ageYear?: number;
    breed?: string;
    crossBreeds?: Array<string>;
    activityLevel?: string;
    currentWeight: number;
    targetWeight: number;
    plan: {
      type: string;
      duration: string;
      price: number;
      protein: string;
      bowlSize: string;
      isActive: boolean;
      planStatus: string;
    }
  }>;
  payment: {
    method: string;
    cardNumber: string;
    cardExpiry: string;
    cardCVV: string;
  };
  isDeleted: boolean;
}

export const useCreateSubscriptionHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.CREATE_SUBSCRIPTION],
    mutationFn: async (formData: SubscriptionData) => {
      return createSubscription(formData);
    },
  });
};