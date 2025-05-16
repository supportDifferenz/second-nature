import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";
import { useMutation } from "@tanstack/react-query";
import { getUserDetails, updateUser } from "@/services/api/userApis"

export const useGetUserDetails = (userId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USER_DETAILS],
    queryFn: async () => getUserDetails(userId),
  });
};

export const useUpdateUserHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_USER],
    mutationFn: async ({
      userId,
      firstname,
      lastname,
      emailId,
      alternativeEmail,
      contactNo,
      alternativeMobile,
    }: {
      userId: string;
      firstname: string;
      lastname: string;
      emailId: string;
      alternativeEmail: string;
      contactNo: string;
      alternativeMobile: string;
    }) => {
      return updateUser(userId, {
        firstname,
        lastname,
        emailId,
        alternativeEmail,
        contactNo,
        alternativeMobile,
      });
    },
  });
};