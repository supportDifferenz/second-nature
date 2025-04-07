import React from "react";
import Typography from "@/components/atoms/typography/Typography";

interface BadgeProps {
  label: string;
  className?: string;
  color?: string;
  variant?: "curved" | "squared"; // new prop
}

const BadgeTitle: React.FC<BadgeProps> = ({
  label,
  color = "#000",
  className = "",
  variant = "curved",
}) => {
  const borderRadiusClass = variant === "curved" ? "rounded-full" : "";

  return (
    <Typography
      tag="span"
      text={label}
      className={`subtitle2 block max-w-fit text-white uppercase font-normal px-[13px] py-[3px] ${borderRadiusClass} ${className}`}
      style={{ background: color }}
      role="badge"
      ariaLabel={label}
      ariaLabelledBy="badge"
    />
  );
};

export default BadgeTitle;
