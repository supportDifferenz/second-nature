import MainLayout from "@/components/templates/MainLayout";
import React from "react";
import HeroSection from "@/components/pageSections/reviews/HeroSection";
import Testimonials from "@/components/pageSections/reviews/Testimonials";
import GoogleReviews from "@/components/pageSections/reviews/GoogleReviews";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import FooterBannerCTA from "@/components/organism/footerBannerCTA/FooterBannerCTA";

function page() {
  const footerCtaData = {
    mealTransition: {
      title: "Meal",
      highlight: "Transition",
      paragraph:
        "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
      imageSrc: "/images/meal-transition.webp",
    },
    petFood: {
      title: "Begin Your Pet’s",
      highlight: "Meal Journey",
      paragraph:
        "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
      imageSrc: "/images/multiple-pet.webp",
    },
  };

    return (
    <MainLayout>
      <HeroSection />
      <div
        style={{
          background: `
      linear-gradient(
        to top,
        #F9FCE9 0%,
        #FFFFFF 20%,
        #FFFFFF 20.01%,
        #FFFFFF 100%
      )
    `,
        }}
      >
        <Testimonials />
      </div>

      <div className="">
        <GoogleReviews />
      </div>
      <div className="mt-[var(--space-120-180)]">
        <FooterBannerCTA
          id="footer-banner"
          image={{
            web: "/images/google-footer-cta.webp",
            tablet: "/images/google-footer-cta-mob.webp",
            mobile: "/images/google-footer-cta-mob.webp",
          }}
          caption="GIVE US A REVIEW"
          captionColor="#fff"
          title="Share Your Story"
          // subTitle="the Gift of Real Food Today!"
          paragraph="Have you seen the difference in your pet? We’d love to hear your story! Leave us a review and join the growing community of pet parents who trust Second Nature."
          paragraphColor="#FFFFFF"
          buttonText="Build your plan"
          buttonLink="/location"
          bannerThemeColor="#fff"
          align="center"
        />
      </div>

      <div className="py-(--space-120-180) overflow-x-hidden">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
          ImageWrapperClassName="sm:w-[29.9vw]"
        />
      </div>
    </MainLayout>
  );
}

export default page;
