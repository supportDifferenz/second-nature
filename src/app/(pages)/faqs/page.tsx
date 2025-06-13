// page.tsx
"use client";
import FaqForm from "@/components/pageSections/faqs/FaqForm";
import FaqSection from "@/components/pageSections/faqs/FaqSection";
import MainLayout from "@/components/templates/MainLayout";
import React, { useRef } from "react";

function Page() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MainLayout>
      <div className="mt-[var(--space-40-90)]">
        <FaqSection onAskUsClick={scrollToForm} />
      </div>
      <div ref={formRef} className="container pb-12">
        <FaqForm />
      </div>
    </MainLayout>
  );
}

export default Page;
