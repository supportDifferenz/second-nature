// components/pageSections/buyingFlow/step3/choosePlan/PlanCardSkeleton.tsx
import React from "react";
import { cn } from "@/lib/utils";

export default function PlanCardSkeleton() {
  return (
    <div className={cn(
      "flex flex-col relative border rounded-2xl w-fit px-5 py-10 lg:p-14 border-slate-300",
      "animate-pulse bg-gray-100" // Skeleton styles
    )}>
      {/* Offer Badge Skeleton */}
      <div className="absolute top-4 right-4 h-6 w-32 bg-gray-300 rounded-full"></div>
      
      {/* Header Section */}
      <div className="w-full border-b border-gray-300 pb-8 flex flex-col">
        <div className="h-8 w-3/4 bg-gray-300 rounded mx-auto mb-2"></div>
        <div className="h-5 w-full bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="h-12 w-1/2 bg-gray-300 rounded mx-auto"></div>
      </div>
      
      {/* Protein Selection Section */}
      <div className="flex flex-col pt-8">
        <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bowl Size Section */}
      <div className="flex flex-col pt-8">
        <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-4"></div>
        <div className="flex justify-center gap-4">
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}