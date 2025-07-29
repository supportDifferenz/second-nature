import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { InputLabeledPropsType } from "@/components/types/type"; // Import type correctly

export const InputLabeled: React.FC<InputLabeledPropsType> = ({
  label,
  subLabel,
  placeholder,
  className = "",
  inputClassName = "",
  error,
  ...props
}) => { 
  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex flex-col sm:flex-row place-items-baseline ${subLabel ? "max-sm:mb-3" : ""}`}>
        {label && <Label>{label}</Label>}
        {subLabel && (<span className="text-xs text-secondary-2 max-sm:-mt-1 sm:ml-1">{subLabel}</span>)}
      </div>
      <Input placeholder={placeholder}  className={`${inputClassName} bg-white`} {...props}  />
      {error && (
        <span className="text-sm text-red-500 block">{error}</span>
      )}{" "}
    </div>
  );
};
