import BehindTheScenes from "@/components/pages/landingPage/BehindTheScenes";
import FAQSection from "@/components/pages/landingPage/FAQSection";
import HeroSection from "@/components/pages/landingPage/HeroSection";
import Marquee from "@/components/pages/landingPage/Marquee";
import MealsAndTreats from "@/components/pages/landingPage/Meals&Treats";
import MealTransition from "@/components/pages/landingPage/MealTransition";
import OurIngredients from "@/components/pages/landingPage/OurIngredients";
import Testimonial from "@/components/pages/landingPage/Testimonial";
import TrustedByVets from "@/components/pages/landingPage/TrustedByVets";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="relative z-[6]">
        <HeroSection />
      </div>

      <div className="-mt-(--space-30-60) relative z-[6]">
        <Marquee speed={15} />
      </div>

      <div className=" pt-(--space-50-99) pb-(--space-120-180)">
        <OurIngredients />
      </div>

      <TrustedByVets />

      <div className="pt-(--space-120-180)">
        <MealsAndTreats />
      </div>

      <div className="py-(--space-120-180)">
        <MealTransition />
      </div>

      <BehindTheScenes />

      <div className="py-(--space-120-180)">
        <Testimonial />
      </div>

      <FAQSection />
    </MainLayout>
  );
}
