import MainLayout from "@/components/templates/MainLayout";
import React from "react";
import HeroSection from "@/components/pageSections/reviews/HeroSection";
import Testimonials from "@/components/pageSections/reviews/Testimonials";
import GoogleReviews from "@/components/pageSections/reviews/GoogleReviews";

function page() {
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
      <div className="container"></div>
    </MainLayout>
  );
}

export default page;
