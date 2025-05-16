"use client";

import { getAllPlan } from "@/services/api/subscriptionApis";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useGetAllPlan = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PLANS], // Unique key for caching
    queryFn: () => getAllPlan(), // Your API function
    staleTime: 5 * 60 * 1000, // Optional: Data stays fresh for 5 minutes
  });
};