import type { Metadata } from "next";
import "./globals.css";
import { dmSerifDisplay, bellotaText } from "@/components/config/font";

export const metadata: Metadata = {
  title: "Second Nature",
  description: "Crafted with Care for Healthier, Happier Pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSerifDisplay.variable} ${bellotaText.variable} antialiased dark`}>
        {children}
      </body>
    </html>
  );
}
