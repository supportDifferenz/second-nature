"use client";

import { createUser} from "../../services/api/userApis"
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useCreateUserHook = () => {
    return useMutation({
      mutationKey: [QUERY_KEYS.CREATE_USER],
      mutationFn: async ({
        firstname,
        lastname,
        emailId,
        contactNo,
        password
      }: {
        firstname: string;
        lastname: string;
        emailId: string;
        contactNo: string;
        password: string;
      }) => createUser({ firstname, lastname, emailId, contactNo, password }),
    });
  };