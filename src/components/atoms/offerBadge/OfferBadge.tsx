import React from "react";
import Typography from "../typography/Typography";

export default function OfferBadge({ content }: { content: string }) {
  return (
    <div
      className="absolute max-sm:flex max-sm:justify-center top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-5/6 text-white px-16 py-1 font-bold rounded-full bg-slate-500"
      style={{
        backgroundImage:
          "linear-gradient(to right, #00683D 0%, #09B870 54%, #00683D 100%)",
      }}
    >
      <Typography
        tag="h6"
        text={content}
        className="text-white whitespace-nowrap text-center"
      />
    </div>
  );
}
