import { Label } from "@/components/ui/label";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface DropDownLabeledProps {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const DropDownLabeled: React.FC<DropDownLabeledProps> = ({
  label,
  placeholder = "Select an option",
  className = "",
  error,
  options = [],
  value,
  onValueChange,
}) => {
  return (
    <div className={`flex flex-col  w-full ${className}`}>
      {label && <Label>{label}</Label>}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="bg-white capitalize">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white capitalize">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <span className="text-sm text-red-500 block">{error}</span>
      )}
    </div>
  );
};