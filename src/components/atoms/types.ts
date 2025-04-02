import { JSX, MutableRefObject } from "react";

interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ref?: MutableRefObject<(HTMLSpanElement | null)[]>; // ✅ Allows mutation
}

export default TypographyProps;
