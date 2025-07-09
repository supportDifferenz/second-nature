"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./globals.css";
import { dmSerifDisplay, bellotaText } from "@/components/config/font";
// import SmoothScrollWrapper from "@/components/molecules/smoothScroll/SmoothScrollWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" className="dark cursor-default">
      <head>
        <title>Second Nature</title>
        <meta name="description" content="Crafted with Care for Healthier, Happier Pets" />
      </head>
      <body className={`${dmSerifDisplay.variable} ${bellotaText.variable} antialiased dark`}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
