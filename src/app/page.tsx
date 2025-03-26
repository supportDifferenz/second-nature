import HeroSection from "@/components/pages/landingPage/HeroSection";
import Marquee from "@/components/pages/landingPage/Marquee";
import MealsAndTreats from "@/components/pages/landingPage/Meals&Treats";
import OurIngredients from "@/components/pages/landingPage/OurIngredients";
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

      <div className="py-(--space-120-180)">
        <MealsAndTreats />
      </div>
    </MainLayout>
  );
}
