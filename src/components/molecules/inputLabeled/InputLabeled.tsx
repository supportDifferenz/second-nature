import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { InputLabeledPropsType } from "@/components/types/type";

export const InputLabeled: React.FC<InputLabeledPropsType> = ({
  label,
  subLabel,
  placeholder,
  className = "",
  inputClassName = "",
  labelClassName = "",
  error,
  ...props
}) => { 
  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex flex-col sm:flex-row place-items-baseline ${subLabel ? "max-sm:mb-3" : ""}`}>
        {label && <Label className={labelClassName}>{label}</Label>}
        
      </div>
      <Input
        placeholder={placeholder}
        className={`${inputClassName} bg-white`}
        {...props}
      />
      {subLabel && (
          <span className="text-xs text-text-color mt-1 sm:mt-0.5 px-1 sm:px-0 sm:ml-1">
            {subLabel}
          </span>
        )}
      {error && (
        <span className="text-sm text-red-500 block">{error}</span>
      )}
    </div>
  );
};
