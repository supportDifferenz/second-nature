export type TitleProps = {
  title?: string; // Mandatory
  highlight?: string;
  paragraph?: string;
  paragraphColor?: string;
  caption?: string;
  textAlign?:
    | "text-left"
    | "text-center"
    | "text-right"
    | "sm:text-left"
    | "sm:text-center"
    | "sm:text-right"
    | "lg:text-left"
    | "lg:text-center"
    | "lg:text-right"
    | string;
  textColor?: string;
  captionPosition?: "top" | "bottom"; // Only for blockPrimaryTitle & blockSecondaryTitle
  className?: string;
  order?: "accenting" | "dissenting";
};
