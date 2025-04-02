import {
  FAQSItemsProps,
  HeroBannersPropsType,
} from "@/components/pages/landingPage/type";

// hero banner carousel props type
export type BannerCarouselPropsType = {
  banners: HeroBannersPropsType[]; // ✅ Ensures banners array is strongly typed
  isCarousel?: boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  interval?: number;
  align?: "left" | "center" | "right"; // ✅ Matches cva variants
  bannerHeight?: "mainHero" | "subHero";
  isTitleHierarchyRegular?: boolean;
  hasButton?: boolean;
};

// meal card prop Type
export type MealsButtonProps = {
  label: string;
  route: string;
  variant?: string;
};
export type MealCardProps = {
  tag?: string;
  title: string;
  image: string;
  features?: string[];
  buttons: MealsButtonProps[];
};

export type FAQSProps = {
  faqs: FAQSItemsProps[];
  defaultOpenIndex?: number | null;
  className?: string;
};
