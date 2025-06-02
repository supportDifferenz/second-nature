import FaqForm from "@/components/pageSections/faqs/FaqForm";
import FaqSection from "@/components/pageSections/faqs/FaqSection";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="mt-[var(--space-40-90)]">
        <FaqSection />
      </div>
      <div className="container">
        <FaqForm />
      </div>
    </MainLayout>
  );
}

export default page;
