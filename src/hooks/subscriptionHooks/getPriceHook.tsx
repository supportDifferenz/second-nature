"use client";

import { getPrice } from "../../services/api/subscriptionApis"
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useGetPriceHook = () => {
    return useMutation({
      mutationKey: [QUERY_KEYS.GET_PRICE],
    mutationFn: async ({
      weight,
      proteinType,
      activityLevel,
      bowlSize,
      planType,
    }: {
      weight: string;
      proteinType: string;
      activityLevel: string;
      bowlSize: string;
      planType: string;
    }) => getPrice({
        weight,
        proteinType,
        activityLevel,
        bowlSize,
        planType,
    }),
    });
  };