"use client";

import { getAllBowl } from "@/services/api/subscriptionApis";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useGetAllBowl = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_BOWLS], // Unique key for caching
    queryFn: () => getAllBowl(), // Your API function
    staleTime: 5 * 60 * 1000, // Optional: Data stays fresh for 5 minutes
  });
};