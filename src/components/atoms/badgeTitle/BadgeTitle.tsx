import React from "react";
import Typography from "@/components/atoms/typography/Typography";

interface BadgeProps {
  label: string;
  className?: string;
  color?:string;
}

const BadgeTitle: React.FC<BadgeProps> = ({ label, color, className = "",  }) => {
  return (
    <Typography
      tag={'span'}
      text={label}
      className={`subtitle2 block max-w-fit text-white uppercase font-normal px-(--space-13-16) py-[3px] rounded-full  ${className}`} style={{background:`${color}`}}
      role="badge"
      ariaLabel={label}
      ariaLabelledBy="badge"
      />
  );
};

export default BadgeTitle;
