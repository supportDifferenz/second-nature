

import { HeroBannersPropsType } from "@/components/pages/landingPage/type";

export type HeroBannerCarouselPropsType = {
  banners: HeroBannersPropsType[]; // ✅ Ensures banners array is strongly typed
  isCarousel?: boolean;
  autoplay?: boolean;
  showNavigation?: boolean;
  interval?: number;
  align?: "left" | "center" | "right"; // ✅ Matches cva variants
  hasButton?: boolean;
};
