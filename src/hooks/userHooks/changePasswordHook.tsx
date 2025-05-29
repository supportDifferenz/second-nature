"use client";

import { changePassword } from "../../services/api/userApis"
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useUpdatePasswordHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.UPDATE_PASSWORD],
    mutationFn: async ({
        userId,
        currentPassword,
        newPassword,
        confirmNewPassword,
        }: {
        userId: string;
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
}) => changePassword({ userId, currentPassword, newPassword, confirmNewPassword }),
  });
};