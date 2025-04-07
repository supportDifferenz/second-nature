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

export type InputLabeledProps = {
  label?: string;
  className?: string; 
  error?: string; 
  type?: string;
  placeholder?: string;

};

export type DropDownLabeledProps = {
  label?: string;
  className?: string; 
  error?: string; 
  type?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onValueChange?: (value: string) => void;
};