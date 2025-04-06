import React, { forwardRef } from "react";
import TypographyPropsType from "@/components/types/type";

const Typography = forwardRef<HTMLSpanElement, TypographyPropsType>(
  (
    {
      tag = "p",
      text = "null",
      className,
      children,
      style,
      role,
      ariaLabel,
      ariaLabelledBy,
    },
    ref,
  ) => {
    return React.createElement(
      tag,
      {
        ref, // ✅ Now supports ref
        className,
        style,
        role,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
      },
      <>
        {text}
        {children}
      </>,
    );
  },
);
Typography.displayName = "Typography";
export default Typography;
