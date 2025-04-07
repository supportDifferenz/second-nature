

import { JSX, MutableRefObject } from "react";


export type HeaderPropsTypes = {
  isOnlyBrandHeader?: boolean; // optional prop with default to false
};

// HeroBannersProps type
export type HeroBannersPropsType = {
  id: string;
  image: {
    web: string;
    tablet: string;
    mobile: string;
  };
  caption?: string;
  captionColor?: string;
  title?: string;
  paragraph?: string;
  paragraphColor?: string;
  halfTitle?: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  bannerThemeColor?: string;
};

// FAQSItemsProps type
export type FAQSItemsPropsTypes = {
  question: string;
  answer: string;
};

// FooterBannerCTAProps type
export type FooterBannerCTAPropsType = {
  id: string;
  image: {
    web: string;
    tablet: string;
    mobile: string;
  };
  caption?: string;
  captionColor: string;
  title?: string;
  paragraph?: string;
  paragraphColor?: string;
  subTitle?: string;
  buttonText?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  bannerThemeColor: string;
};

// BannerCarouselProps type
export type BannerCarouselPropsType = {
  banners: HeroBannersPropsType[]; 
  isCarousel?:boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  interval?: number;
  align?: "left" | "center" | "right"; 
  bannerHeight?: "mainHero" | "subHero";
  isTitleHierarchyRegular?: boolean;
  hasButton?: boolean;
};

// meal card prop Type
export type MealsButtonPropsType = {
  label: string;
  route: string;
  variant?: string;
};
export type MealCardPropsType = {
  tag?: string;
  title: string;
  image: string;
  features?: string[];
  buttons: MealsButtonPropsType[];
};

// FAQSProp type
export type FAQSPropsTypes = {
  faqs: FAQSItemsPropsTypes[];
  defaultOpenIndex?: number | null;
  className?: string;
};

// TitlePropsType type
export type TitlePropsType = {
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

// InputLabeledProps type
export type InputLabeledPropsType = {
  label?: string;
  className?: string; 
  error?: string; 
  type?: string;
  placeholder?: string;

};

// TypographyProps type
interface TypographyPropsType {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ref?: MutableRefObject<(HTMLSpanElement | null)[]>; 
}
export default TypographyPropsType;


export type MealPlanStatus =
  | 'current'
  | 'paused'
  | 'cancelled'
  | 'payment_failed'
  | 'expired'
  | 'ending_soon'
  | 'renewal_needed';

export interface OrderHistoryCardPropsType {
  title: string;
  subtitle: string;
  planDuration: string;
  itemName: string;
  planStartDate: string;
  planEndDate: string;
  orderDate: string;
  price: number;
  status: MealPlanStatus;
  note?: string;
  noteDetails?: string;
  processingNote?: string;
  hasInvoice?: boolean;
  pausedDuration?: string;
  pausedPeriod?: string;
  cancellationTitle?: string;
  cancellationDate?: string;
}