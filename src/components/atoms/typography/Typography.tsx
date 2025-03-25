import React from "react";
import TypographyProps from "./type";

const Typography: React.FC<TypographyProps> = ({
  tag = "p",
  text = "null",
  className,
  children,
  style,
  role,
  ariaLabel,
  ariaLabelledBy,
}) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      role: role,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    <>
      {text}
      {children}
    </>
  );
};

export default Typography;
