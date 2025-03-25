import HeroSection from "@/components/pages/landingPage/HeroSection";
import Marquee from "@/components/pages/landingPage/Marquee";
import OurIngredients from "@/components/pages/landingPage/OurIngredients";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      
      <HeroSection />

      <div className="-mt-(--space-30-60)">
        <Marquee speed={15} />
      </div>

      <div className=" pt-(--space-50-99) pb-(--space-120-180)">
        <OurIngredients />
      </div>

    </MainLayout>
  );
}
