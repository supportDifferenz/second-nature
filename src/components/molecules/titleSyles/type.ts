export type TitleProps = {
    title?: string; // Mandatory
    highlight?: string;
    paragraph: string;
    caption?: string;
    textAlign?: "left" | "center" | "right";
    textColor?: string;
    captionPosition?: "top" | "bottom"; // Only for blockPrimaryTitle & blockSecondaryTitle
    className?:string,
  };