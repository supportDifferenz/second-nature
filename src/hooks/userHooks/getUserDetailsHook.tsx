import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { getUserDetails } from "@/services/api/userApis"

export const useGetUserDetails = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_DETAILS],
    queryFn: async () => getUserDetails(userId),
  });
};