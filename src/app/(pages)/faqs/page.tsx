// page.tsx
"use client";
import FaqForm from "@/components/pageSections/faqs/FaqForm";
import FaqSection from "@/components/pageSections/faqs/FaqSection";
import MainLayout from "@/components/templates/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import { motion } from "framer-motion";
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
      <div ref={formRef} className="container pb-12 lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaqForm />
        </motion.div>
      </div>
      <Toaster position="top-right" />
    </MainLayout>
  );
}

export default Page;
