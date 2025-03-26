

import { HeroBannersPropsType } from "@/components/pages/landingPage/type";

// hero banner carousel props type
export type HeroBannerCarouselPropsType = {
  banners: HeroBannersPropsType[]; // ✅ Ensures banners array is strongly typed
  isCarousel?: boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  interval?: number;
  align?: "left" | "center" | "right"; // ✅ Matches cva variants
  hasButton?: boolean;
};


// meal card prop Type
export interface MealsButtonProps {
    label: string;
    route: string;
    variant?: string;
  }
export interface MealCardProps {
    tag?: string;
    title: string;
    image: string;
    features?: string[];
    buttons: MealsButtonProps[];
}


