import { ReactNode } from "react";
import Header from "../organism/header/Header";
import Footer from "../organism/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
