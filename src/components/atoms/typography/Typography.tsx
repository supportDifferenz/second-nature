import React, { forwardRef } from "react";
import TypographyProps from "../types";

const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
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
