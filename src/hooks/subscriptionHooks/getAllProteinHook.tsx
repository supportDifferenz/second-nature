"use client";

import { getAllProtein } from "@/services/api/subscriptionApis";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useGetAllProtein = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_PROTEINS], // Unique key for caching
    queryFn: () => getAllProtein(), // Your API function
    staleTime: 5 * 60 * 1000, // Optional: Data stays fresh for 5 minutes
  });
};