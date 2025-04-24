"use client";

import { userLogin } from "../../services/api/authApis";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useUserLoginHook = () => {
    return useMutation({
      mutationKey: [QUERY_KEYS.USERLOGIN],
      mutationFn: async ({
        userName,
        emailId,
        password,
        isWhatsapp,
        isSubscribe
        //additionalProp1
      }: {
        userName: string;
        emailId: string;
        password: string;
        isWhatsapp: boolean;
        isSubscribe: boolean;
        //additionalProp1: {};
      }) => userLogin({ userName, emailId, password, isWhatsapp, isSubscribe }),
    });
  };