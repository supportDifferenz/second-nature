import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { InputLabeledProps } from "../type"; // Import type correctly

export const InputLabeled: React.FC<InputLabeledProps> = ({
  label,
  placeholder,
  className = "",
  error,
  ...props
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} className="bg-white" {...props} />
      {error && (
        <span className="text-sm text-red-500 block">{error}</span>
      )}{" "}
    </div>
  );
};
