"use client";

import Typography from "@/components/atoms/typography/Typography";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useUserStore } from "@/zustand/store/userDataStore";
import { useUpdatePasswordHook } from "@/hooks/userHooks/changePasswordHook";

export default function PasswordManagement() {
  const { userDetails } = useUserStore();
  const userId = userDetails.userId;
  const { mutate: updatePassword, isPending, isError } = useUpdatePasswordHook();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [touched, setTouched] = useState({
    currentPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "currentPassword":
        if (!value) return "Current password is required";
        return "";
      case "newPassword":
        if (!value) return "New password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        return "";
      case "confirmNewPassword":
        if (!value) return "Please confirm your new password";
        if (value !== formData.newPassword) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSuccessMessage("");
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if the field was already touched
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched on submit
    setTouched({
      currentPassword: true,
      newPassword: true,
      confirmNewPassword: true,
    });

    // Validate all fields
    const newErrors = {
      currentPassword: validateField("currentPassword", formData.currentPassword),
      newPassword: validateField("newPassword", formData.newPassword),
      confirmNewPassword: validateField("confirmNewPassword", formData.confirmNewPassword),
    };

    setErrors(newErrors);

    // Check if form is valid
    const isValid = !Object.values(newErrors).some(error => error);

    if (isValid) {
      updatePassword(
        {
          userId,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          confirmNewPassword: formData.confirmNewPassword
        },
        {
          onSuccess: (response) => {
            console.log("Password update successful", response);
            // Reset form on success
            setFormData({
              currentPassword: "",
              newPassword: "",
              confirmNewPassword: "",
            });
            setTouched({
              currentPassword: false,
              newPassword: false,
              confirmNewPassword: false,
            });

            setSuccessMessage("Password updated successfully");
          },
          onError: (error: unknown) => {
            if (error instanceof Error) {
              // If error is a custom error with a 'response' property
              const apiError = error as { response?: { data?: { message?: string } } };
              const message = apiError.response?.data?.message || error.message || "Password update failed";
              console.error("Password update failed", message);
              setErrorMessage(message);
            } else {
              console.error("Password update failed", error);
              setErrorMessage("Password update failed");
            }
            // Handle API specific errors
          },
        }
      );
    }
  };

  return (
    <DashboardLayout>
      <Typography
        tag="h5"
        text="Password Management"
        className="capitalize !font-normal mb-6 text-black"
      />

      <div className="bg-[#FDFFF4] border border-[#E4E7D3] rounded-xl p-6 flex flex-col items-start sm:flex-row gap-5">
        <div className="grow">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-x-5 gap-y-6">
              {/* Current Password */}
              <InputLabeled
                name="currentPassword"
                label="Current Password"
                placeholder="Enter your current password"
                type="password"
                inputClassName="!rounded-xl"
                variant="roundedEdgeInput"
                className="max-w-[400px]"
                value={formData.currentPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.currentPassword}
                required
              />

              {/* New Password */}
              <InputLabeled
                name="newPassword"
                label="New Password"
                placeholder="Enter your new password"
                type="password"
                inputClassName="!rounded-xl"
                variant="roundedEdgeInput"
                className="max-w-[400px]"
                value={formData.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.newPassword}
                required
              />

              {/* Confirm New Password */}
              <InputLabeled
                name="confirmNewPassword"
                label="Confirm New Password"
                placeholder="Repeat your new password"
                type="password"
                inputClassName="!rounded-xl"
                variant="roundedEdgeInput"
                className="max-w-[400px]"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmNewPassword}
                required
              />
            </div>

            <Button
              type="submit"
              variant={"whiteBtnSecondary2BorderAndText"}
              className="w-fit mt-6"
              disabled={isPending}
            >
              {isPending ? "Updating..." : "Update Password"}
            </Button>

            {isError && (
              <div className="mt-4 text-red-500">
                {errorMessage}
              </div>
            )}

            {successMessage && (
              <div className="mt-4 text-green-500">
                {successMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}